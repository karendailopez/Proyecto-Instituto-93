import AlumnosLayout from "@/Layouts/Alumnos/AlumnosLayout";
import Disenio from "@/Layouts/Alumnos/Disenio/disenio.jsx";
import mesas from "@/Layouts/Alumnos/Css/mesas.css";
import { useEffect } from "react";
import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Index({ carrera, mesas, mesas_alumno }) {
    // Mapeo de mesas para mostrarlas en el componente Disenio
    const mesasFiltradas = mesas.map(mesa => ({
        id: mesa.id,
        materia: mesa.materia.descripcion,
        fecha_hora_1: mesa.fecha_hora_1,
        fecha_hora_2: mesa.fecha_hora_2,
        personal_presidente: mesa.personal_presidente,
        personal_auxiliar: mesa.personal_auxiliar
    }));

    const formuarioEstado = useForm({
        selectedMesas: []  // Estado inicial vacío
    });

    //State donde se guardan las mesas en donde se incribio el alumno, y en caso de inscribirse en nuevas se guardaran aca
    const [mesasAlumno, setMesasAlumno] = useState(
        mesas_alumno.map(mesa_alumno => ({
                mesa_alumno_id: mesa_alumno.id,
                mesa_id: mesa_alumno.mesa_id,
                inscripto: mesa_alumno.mesa_alumno_estado_id == 1 ? true : false,
                registrar: false
    }))  // Las mesas donde esta inscripto
    );

    // Actualiza el estado de selectedMesas cuando cambia mesasSeleccionadas
    useEffect(() => {
        formuarioEstado.setData({
            selectedMesas: mesasAlumno
        });
    }, [mesasAlumno]);

    // Función para guardar mesas seleccionadas
    const mesasGuardadas = () => {
        if (mesasAlumno.length === 0) {
            alert("No hay mesas seleccionadas para guardar.");
            return;
        }

        formuarioEstado.post(route('alumnos.mesas.store'), {
            
            onSuccess: () => {
                console.log('Mesas guardadas correctamente');
            },
            onError: () => {
                console.log('Hubo un error al guardar las mesas');
            }
        });
    };

    // Función para manejar el cambio de selección de mesas
    const checkSeleccionados = (mesa_id, seleccionado) => {

        setMesasAlumno(prevState => {
            const mesaExistente = prevState.find(mesa => mesa.mesa_id === mesa_id);

            //Modificacion
            if (mesaExistente) { 
                return prevState.map(mesa =>
                    mesa.mesa_id === mesa_id
                        ? { ...mesa, inscripto: seleccionado } // Actualizar si existe
                        : mesa
                );
            //Agregado
            } else { 
                return [...prevState, { 
                    mesa_alumno_id: 0,
                    mesa_id: mesa_id, 
                    inscripto: seleccionado, 
                    registrar: true 
                }]; 
            }
        });
    };
    

    return (
        <AlumnosLayout>
            <p>Mesas: Tecnicatura Superior en Análisis, Desarrollo y Programación de Aplicaciones</p>
            
            <Disenio mesas={mesasFiltradas} mesasAlumno={mesasAlumno} checkSeleccionados={checkSeleccionados} />

            <button className="custom-button" onClick={mesasGuardadas}>Guardar</button>
        </AlumnosLayout>
    );
}
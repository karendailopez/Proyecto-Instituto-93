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

    const [mesasSeleccionadas, setmesasSeleccionadas] = useState(
        mesas_alumno.map(mesa_alumno => mesa_alumno.mesa_id)  // Las mesas ya seleccionadas
    );

    // Actualiza el estado de selectedMesas cuando cambia mesasSeleccionadas
    useEffect(() => {
        formuarioEstado.setData({
            selectedMesas: mesasSeleccionadas
        });
    }, [mesasSeleccionadas]);

    // Función para guardar mesas seleccionadas
    const mesasGuardadas = () => {
        if (mesasSeleccionadas.length === 0) {
            alert("No hay mesas seleccionadas para guardar.");
            return;
        }

        formuarioEstado.post(route('alumnos.mesas.updateSelected'), {
            onSuccess: () => {
                console.log('Mesas guardadas correctamente');
            },
            onError: () => {
                console.log('Hubo un error al guardar las mesas');
            }
        });
    };

    // Función para manejar el cambio de selección de mesas
    const checkSeleccionados = (mesa_id) => {
       /* setmesasSeleccionadas(prevState => 
            prevState.includes(mesa_id)
                ? prevState.filter(mesa => mesa !== mesa_id)  // Eliminar si está seleccionada
                : [...prevState, mesa_id]  // Agregar si no está seleccionada
        );*/
    };

    return (
        <AlumnosLayout>
            <p>Mesas: Tecnicatura Superior en Análisis, Desarrollo y Programación de Aplicaciones</p>
            
            <Disenio mesas={mesasFiltradas} checkSeleccionados={checkSeleccionados} />

            <button className="custom-button" onClick={mesasGuardadas}>Guardar</button>
        </AlumnosLayout>
    );
}
import AlumnosLayout from "@/Layouts/Alumnos/AlumnosLayout";
import Disenio from "@/Layouts/Alumnos/Disenio/disenio.jsx";
import { useEffect } from "react";
import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';








export default function Index({ mesas }) {
    // Declarar la variable antes del return
    console.log(mesas)
    var mesasFiltradas = mesas.map(function(mesa) {
        return {
            id: mesa.id,
            materia: mesa.materia.descripcion,
            fecha_hora_1: mesa.fecha_hora_1,
            fecha_hora_2: mesa.fecha_hora_2,
            personal_presidente: mesa.personal_presidente,
            personal_auxiliar: mesa.personal_auxiliar

           
        };
    });
    const formEstado = useForm({
        selectedMesas: []
    })
    const [mesasSelected, setMesasSelected] = useState(
        mesas_alumno.map(mesa_alumno => mesa_alumno.mesa_id)
    )
    useEffect(() => {
        formEstado.setData({
            selectedMesas: mesasSelected
        });
    }, [mesasSelected]);

    const handleSave = () => {
        if(mesasSelected.length === 0){
            alert("No hay mesas seleccionadas para guardar.");
            return; //no se guarda nada en este caso
        }

        //use setTimeout para garantizar que es estado este actualizado antes de la operacion de guardado
        setTimeout(() => {
            formEstado.post(route('alumnos.mesas.updateSelected'));
        })
    }

    return (
        <AlumnosLayout>
            <p>Mesas: Tecnicatura Superior en Analisis, Desarrollo y Programacion de Aplicaciones</p>
            
        
            <Disenio mesas={mesasFiltradas} handleSave={handleSave} />
        </AlumnosLayout>
    );
    
}


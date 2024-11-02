import AlumnosLayout from "@/Layouts/Alumnos/AlumnosLayout";
import Disenio from "@/Layouts/Alumnos/Disenio/disenio.jsx";

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
   

    return (
        <AlumnosLayout>
            <p>Mesas: Tecnicatura Superior en Analisis, Desarrollo y Programacion de Aplicaciones</p>
            
        
            <Disenio mesas={mesasFiltradas} />
        </AlumnosLayout>
    );
}


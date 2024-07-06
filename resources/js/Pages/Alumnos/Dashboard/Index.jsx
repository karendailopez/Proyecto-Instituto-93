import AlumnosLayout from "@/Layouts/Alumnos/AlumnosLayout";


export default function Index() {
    const breadcrumb = [
        { href: route('alumnos.dashboard.index'), label: 'Dashboard' }
    ];

    return <AlumnosLayout breadcrumb={ breadcrumb }>
        <p>Lista de alumnos</p>
    </AlumnosLayout>;
}

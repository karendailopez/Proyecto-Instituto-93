import AdminLayout from '@/Layouts/Admin/AdminLayout.jsx';
import Table from "@/Components/Table/Table.jsx";
import {Head, router} from "@inertiajs/react";
import PageTitle from "@/Layouts/Admin/Components/PageTitle.jsx";

export default function Index({ alumnos }) {
    const breadcrumb = [
        { href: route('admin.alumnos.index'), label: 'Alumnos' }
    ];

    const table = [
        { value: 'id',  label: 'X' },
        { value: 'nombre',  label: 'Nombre' },
        { value: 'apellido',  label: 'Apellido' },
        { value: 'email',  label: 'Email' },
        { value: 'carrera',  label: 'Carrera' },
    ];

    const actions = [
        {
            label: 'Editar',
            icon: 'check-square',
            iconClass: 'w-4 h-4 mr-1',
            action: (value) => { router.visit(route('admin.alumnos.edit', value.id)) }
        },
    ];

    alumnos.data = alumnos.data.map((x) => ({
        ...x,
        carrera: x.alumno_carreras?.length > 0 ? x.alumno_carreras[0].carrera.nombre : ''
    }));

    return <AdminLayout breadcrumb={ breadcrumb }>
        <Head title="Alumnos"/>

        <PageTitle label="Lista de Alumnos" />

        <Table head={table} rows={alumnos} actions={actions} paginate={true}></Table>
    </AdminLayout>;
}

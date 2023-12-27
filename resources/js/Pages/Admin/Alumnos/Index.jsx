import AdminLayout from '@/Layouts/Admin/AdminLayout.jsx';
import Table from "@/Components/Table/Table.jsx";
import {Head} from "@inertiajs/react";
import PageTitle from "@/Layouts/Admin/Components/PageTitle.jsx";

export default function Index({ alumnos }) {
    const table = [
        { value: 'id',  label: 'X' },
        { value: 'nombre',  label: 'Nombre' },
        { value: 'apellido',  label: 'Apellido' },
        { value: 'email',  label: 'Email' },
        { value: 'carrera',  label: 'Carrera' },
    ];

    alumnos.data = alumnos.data.map((x) => ({
        ...x,
        carrera: x.alumno_carreras?.length > 0 ? x.alumno_carreras[0].carrera.nombre : ''
    }));

    return <AdminLayout>
        <Head title="Alumnos"/>

        <PageTitle label="Lista de Alumnos" />

        <Table head={table} rows={alumnos} paginate={true}></Table>

        <div id="delete-confirmation-modal" className="modal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <div className="p-5 text-center">
                            <i data-feather="x-circle" className="w-16 h-16 text-theme-6 mx-auto mt-3"></i>
                            <div className="text-3xl mt-5">Are you sure?</div>
                            <div className="text-gray-600 mt-2">
                                Do you really want to delete these records?
                                <br />
                                This process cannot be undone.
                            </div>
                        </div>
                        <div className="px-5 pb-8 text-center">
                            <button type="button" data-dismiss="modal" className="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                            <button type="button" className="btn btn-danger w-24">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>;
}

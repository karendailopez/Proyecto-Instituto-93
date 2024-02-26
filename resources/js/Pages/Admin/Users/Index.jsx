import AdminLayout from '@/Layouts/Admin/AdminLayout.jsx';
import Table from "@/Components/Table/Table.jsx";
import {Head, router} from "@inertiajs/react";
import DropdownButton from "@/Layouts/Admin/Components/DropdownButton.jsx";
import DropdownButtonItem from "@/Layouts/Admin/Components/DropdownButtonItem.jsx";
import AdminTitle from "@/Layouts/Admin/Components/AdminTitle.jsx";

export default function Index({ users }) {
    const breadcrumb = [
        { href: route('admin.users.index'), label: 'Usuarios' }
    ];

    const table = [
        { value: 'id',  label: 'X' },
        { value: 'name',  label: 'Nombre' },
        { value: 'email',  label: 'Email' },
        { value: 'rol.descripcion',  label: 'Rol' }
    ]

    const actions = [
        {
            label: 'Editar',
            icon: 'check-square',
            iconClass: 'w-4 h-4 mr-1',
            action: (value) => { router.visit(route('admin.users.edit', value.id)) }
        }
    ];

    return <AdminLayout breadcrumb={ breadcrumb }>
        <Head title="Usuarios"/>

        <AdminTitle title="Lista de Usuarios Administradores" />

        <Table head={table} rows={users} actions={actions} paginate={true}>
            <a href={route('admin.users.create')} className="btn btn-primary shadow-md mr-2">Agregar nuevo</a>

            <DropdownButton>
                <DropdownButtonItem label="Imprimir" icon="printer"></DropdownButtonItem>
            </DropdownButton>
        </Table>

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

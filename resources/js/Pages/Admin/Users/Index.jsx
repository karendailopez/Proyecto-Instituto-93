import AdminLayout from '@/Layouts/Admin/AdminLayout.jsx';
import AppIcon from "@/Components/Icons/AppIcon.jsx";
import Table from "@/Components/Table/Table.jsx";
import {Head} from "@inertiajs/react";
import DropdownButton from "@/Layouts/Admin/Components/DropdownButton.jsx";
import DropdownButtonItem from "@/Layouts/Admin/Components/DropdownButtonItem.jsx";

export default function Index({ users }) {
    const table = [
        { value: 'id',  label: 'X' },
        { value: 'name',  label: 'Nombre' },
        { value: 'email',  label: 'Email' },
        { value: 'rol.descripcion',  label: 'Rol' }
    ]

    return <AdminLayout>
        <Head title="Usuarios"/>

        <h2 className="intro-y text-lg font-medium mt-10">
            Lista de Usuarios Administradores
        </h2>

        <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                <a href={route('admin.users.create')} className="btn btn-primary shadow-md mr-2">Agregar nuevo</a>

                <DropdownButton>
                    <DropdownButtonItem label="Imprimir" icon="printer"></DropdownButtonItem>
                </DropdownButton>

                <div className="hidden md:block mx-auto text-gray-600">Showing 1 to 10 of 150 entries</div>
                <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                    <div className="w-56 relative text-gray-700 dark:text-gray-300">
                        <input type="text" className="form-control w-56 box pr-10 placeholder-theme-13" placeholder="Search..." />
                        <AppIcon name="search" className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
                    </div>
                </div>
            </div>

            <Table head={table} rows={users}></Table>
        </div>
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

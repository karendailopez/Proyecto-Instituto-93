import {useRef} from "react";
import {Head, router, useForm} from '@inertiajs/react';
import AdminLayout from '@/Layouts/Admin/AdminLayout.jsx';
import Table from "@/Components/Table/Table.jsx";
import PageTitle from "@/Layouts/Admin/Components/PageTitle.jsx";
import ModalMessage from "@/Components/Modals/ModalMessage.jsx";
import AppIcon from "@/Components/Icons/AppIcon.jsx";
import DropdownButton from "@/Layouts/Admin/Components/DropdownButton.jsx";
import DropdownButtonItem from "@/Layouts/Admin/Components/DropdownButtonItem.jsx";
import EstadoPersonal from "@/Core/Constants/estadoPersonal.js";

export default function Index({ personal }) {
    const breadcrumb = [
        { href: route('admin.personal.index'), label: 'Personal' }
    ];

    const modalRef = useRef(null);

    const formEstado = useForm({
        id: '',
        personalEstado: ''
    });

    const table = [
        { value: 'id',  label: 'X' },
        { value: 'nombre',  label: 'Nombre' },
        { value: 'apellido',  label: 'Apellido' },
        { value: 'email',  label: 'Email' },
        {
            value: 'estado',
            label: 'Estado',
            className: (data) => data.personalEstadoid === EstadoPersonal.ACTIVA ? 'text-theme-9' : data.personalEstado === EstadoPersonal.INACTIVA ? 'text-theme-6' : '',
            icon: 'check-square',
            iconClass: 'w-4 h-4 mr-1',
        }
    ]

    const actions = [
        {
            label: 'Editar',
            icon: 'check-square',
            iconClass: 'w-4 h-4 mr-1',
            action: (value) => { router.visit(route('admin.personal.edit', value.id)) }
        },
        {
            label: (data) => data.personalEstado === EstadoPersonal.ACTIVA ? 'Dar de baja' : 'Dar de alta',
            className: (data) => data.personalEstado === EstadoPersonal.ACTIVA ? 'text-theme-6' : 'text-theme-9',
            icon: (data) => data.personalEstado === EstadoPersonal.ACTIVA ? 'trash-2' : 'check-square',
            iconClass: 'w-4 h-4 mr-1',
            action: (value) => {
                formEstado.setData({
                    id: value.id,
                    personalEstado: value.personalEstado === EstadoPersonal.ACTIVA ? EstadoPersonal.INACTIVA : EstadoPersonal.ACTIVA
                });
                modalRef.current.show();
            }
        }
    ];

    personal.data = personal.data.map((x) => ({
        ...x,
        estado: x.personal_estado.descripcion

    }));

    const onModalOk = () => {
        formEstado.put( route('admin.personal.estado', formEstado.data.id ) );
    }

    const willActive = () => {
        return formEstado.data.personalEstado === EstadoPersonal.ACTIVA;
    }

    return <AdminLayout breadcrumb={ breadcrumb }>
        <Head title="Personal"/>

        <PageTitle label="Lista del Personal" />

        <Table head={table} rows={personal} actions={actions} paginate={true}>
            <a href={route('admin.personal.create')} className="btn btn-primary shadow-md mr-2">Agregar nuevo</a>

            <DropdownButton>
                <DropdownButtonItem label="Imprimir" icon="printer"></DropdownButtonItem>
            </DropdownButton>
        </Table>

        <ModalMessage ref={modalRef} okText="Eliminar" variant={ willActive() ? 'success' : 'danger' } onOk={onModalOk}>
            <div className="p-5 text-center">
                <AppIcon name={ willActive() ? 'check-square' : 'x-circle' } className={`w-16 h-16 text-theme-${ willActive() ? '9' : '6'} mx-auto mt-3`}></AppIcon>
                <div className="text-3xl mt-5">¿Está seguro?</div>

                <div className="text-gray-600 mt-2">
                    {!willActive() && '¿Está seguro de dar de baja este personal?'}
                    {willActive() && '¿Está seguro de dar de alta este personal?'}
                    <br/>
                    {!willActive() && 'Cuando lo desee podrá darlo de alta nuevamente.'}
                    {willActive() && 'Cuando lo desee podrá darlo de baja nuevamente.'}
                </div>
            </div>
        </ModalMessage>
    </AdminLayout>;
}
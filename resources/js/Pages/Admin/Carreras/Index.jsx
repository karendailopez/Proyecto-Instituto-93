import {useRef} from "react";
import {Head, router, useForm} from '@inertiajs/react';
import AdminLayout from '@/Layouts/Admin/AdminLayout.jsx';
import Table from "@/Components/Table/Table.jsx";
import PageTitle from "@/Layouts/Admin/Components/PageTitle.jsx";
import ModalMessage from "@/Components/Modals/ModalMessage.jsx";
import AppIcon from "@/Components/Icons/AppIcon.jsx";
import EstadoCarrera from "@/Core/Constants/estadoCarrera.js";

export default function Index({ carreras }) {
    const breadcrumb = [
        { href: route('admin.carreras.index'), label: 'Carreras' }
    ];

    const modalRef = useRef(null);

    const formEstado = useForm({
        id: '',
        carrera_estado_id: ''
    });

    const table = [
        { value: 'id',  label: 'X' },
        { value: 'nombre',  label: 'Carrera' },
        { value: 'numero_institucion',  label: 'Instituto' },
        { value: 'jefe_catedra',  label: 'Jefe de Cátedra' },
        {
            value: 'estado',
            label: 'Estado',
            className: (data) => data.carrera_estado_id === EstadoCarrera.ACTIVA ? 'text-theme-9' : data.carrera_estado_id === EstadoCarrera.INACTIVA ? 'text-theme-6' : '',
            icon: 'check-square',
            iconClass: 'w-4 h-4 mr-1',
        }
    ];

    const actions = [
        {
            label: 'Editar',
            icon: 'check-square',
            iconClass: 'w-4 h-4 mr-1',
            action: (value) => { router.visit(route('admin.carreras.edit', value.id)) }
        },
        {
            condition: (data) => data.carrera_estado_id !== EstadoCarrera.BORRADOR,
            label: (data) => data.carrera_estado_id === EstadoCarrera.ACTIVA ? 'Dar de baja' : 'Dar de alta',
            className: (data) => data.carrera_estado_id === EstadoCarrera.ACTIVA ? 'text-theme-6' : 'text-theme-9',
            icon: (data) => data.carrera_estado_id === EstadoCarrera.ACTIVA ? 'trash-2' : 'check-square',
            iconClass: 'w-4 h-4 mr-1',
            action: (value) => {
                formEstado.setData({
                    id: value.id,
                    carrera_estado_id: value.carrera_estado_id === EstadoCarrera.ACTIVA ? EstadoCarrera.INACTIVA : EstadoCarrera.ACTIVA
                });
                modalRef.current.show();
            }
        }
    ];

    carreras.data = carreras.data.map((x) => ({
        ...x,
        estado: x.carrera_estado.descripcion
    }));

    const onModalOk = () => {
        formEstado.put( route('admin.carreras.estado', formEstado.data.id ) );
    }

    const willActive = () => {
        return formEstado.data.carrera_estado_id === EstadoCarrera.ACTIVA;
    }

    return <AdminLayout breadcrumb={ breadcrumb }>
        <Head title="Carreras"/>

        <PageTitle label="Lista de Carreras" />

        <Table head={table} rows={carreras} paginate={true} actions={actions}></Table>

        <ModalMessage ref={modalRef} okText="Eliminar" variant={ willActive() ? 'success' : 'danger' } onOk={onModalOk}>
            <div className="p-5 text-center">
                <AppIcon name={ willActive() ? 'check-square' : 'x-circle' } className={`w-16 h-16 text-theme-${ willActive() ? '9' : '6'} mx-auto mt-3`}></AppIcon>
                <div className="text-3xl mt-5">¿Está seguro?</div>

                <div className="text-gray-600 mt-2">
                    {!willActive() && '¿Está seguro de dar de baja la carrera?'}
                    {willActive() && '¿Está seguro de dar de alta la carrera?'}
                    <br/>
                    {!willActive() && 'Cuando lo desee podrá darlo de alta nuevamente.'}
                    {willActive() && 'Cuando lo desee podrá darlo de baja nuevamente.'}
                </div>
            </div>
        </ModalMessage>
    </AdminLayout>;
}

import { useRef } from "react";
import AdminLayout from '@/Layouts/Admin/AdminLayout.jsx';
import AdminTitle from "@/Layouts/Admin/Components/AdminTitle.jsx";
import Form from '@/Layouts/Admin/Components/Form/Form.jsx';
import { Head, useForm } from "@inertiajs/react";
import FormInput from "@/Layouts/Admin/Components/Form/FormInput.jsx";
import ModalMessage from "@/Components/Modals/ModalMessage.jsx";
import AppIcon from "@/Components/Icons/AppIcon.jsx";

export default function Create({ }) {
    const breadcrumb = [
        { href: route('admin.personal.index'), label: 'Personal' },
        { href: route('admin.personal.create'),  label: 'Agregar Personal' }
    ];

    const {data, setData, post, processing, errors, reset } = useForm({
        numeroDocumento: '',
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        sexo: '',
        direccion: '',
        piso: '',
        departamento: '',
        localidad: '',
        celular: '',
        telefono: '',
        nacionalidad: '',
        email: '',
        estadoCivil: '',
        foto: '',
        titulo: '', 
        tramoPedagogico: '',
        fechaAlta: '',
        fechaBaja: '', 
        personalEstado: '', 
    });

    const modalRef = useRef(null);

    const onSubmit = (event) => {
        event.preventDefault();
        modalRef.current.show();
        
       
    }

    const onReset = () => {
        reset('numeroDocumento', 'nombre', 'apellido', 'fechaNacimiento', 'sexo','direccion','piso','departamento','localidad','celular','telefono','nacionalidad','email','estadoCivil','foto','titulo','tramoPedagogico','fechaAlta','fechaBaja','personalEstado');
    }

    const onChangeData = ({target}) => {
        const {id, value} = target;
        setData(id, value);
    }

    const onModalOk = () => {
        console.log(data)
        post(route('admin.personal.store'));
    }

    return <AdminLayout breadcrumb={breadcrumb}>
        <Head title="Agregar Personal"/>

        <AdminTitle title="Agregar Personal"/>

        <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="intro-y col-span-12">
                <Form onSubmit={onSubmit} onReset={onReset} procesing={processing} backHref={ route('admin.personal.index') }>
                    <div className="sm:grid grid-cols-2 gap-2">
                        <FormInput name="numeroDocumento" placeholder="Número de Documento" type="text"
                                   onChange={onChangeData} value={data.numeroDocumento} errors={errors}></FormInput>

                        <FormInput name="nombre" placeholder="Nombre" type="text"
                                   onChange={onChangeData} value={data.nombre} errors={errors}></FormInput>
                    </div>
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="apellido" placeholder="Apellido" type="text"
                                    onChange={onChangeData} value={data.apellido} errors={errors}></FormInput>
                        <FormInput name="fechaNacimiento" placeholder="Fecha de Nacimiento" type="date"
                                    onChange={onChangeData} value={data.fechaNacimiento} errors={errors}></FormInput>
                    </div>
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="sexo" placeholder="Sexo" type="text"
                                   onChange={onChangeData} value={data.sexo} errors={errors}></FormInput>
                        <FormInput name="direccion" placeholder="Direccion" type="text"
                                   onChange={onChangeData} value={data.direccion} errors={errors}></FormInput>
                    </div>
                     
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="piso" placeholder="Piso" type="text"
                                   onChange={onChangeData} value={data.piso} errors={errors}></FormInput>
                        <FormInput name="departamento" placeholder="Departamento" type="text"
                                   onChange={onChangeData} value={data.departamento} errors={errors}></FormInput>
                    </div> 
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="localidad" placeholder="Localidad" type="text"
                                   onChange={onChangeData} value={data.localidad} errors={errors}></FormInput>
                        <FormInput name="celular" placeholder="Celular" type="text"
                                   onChange={onChangeData} value={data.celular} errors={errors}></FormInput>
                    </div>
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="telefono" placeholder="Telefono" type="text"
                                   onChange={onChangeData} value={data.telefono} errors={errors}></FormInput>
                        <FormInput name="nacionalidad" placeholder="Nacionalidad" type="text"
                                   onChange={onChangeData} value={data.nacionalidad} errors={errors}></FormInput>
                    </div>
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="email" placeholder="Email" type="text"
                                   onChange={onChangeData} value={data.email} errors={errors}></FormInput>
                        <FormInput name="estadoCivil" placeholder="Estado Civil" type="text"
                                   onChange={onChangeData} value={data.estadoCivil} errors={errors}></FormInput>
                    </div>
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="foto" placeholder="Foto" type="text"
                                   onChange={onChangeData} value={data.foto} errors={errors}></FormInput>
                        <FormInput name="titulo" placeholder="Titulo" type="text"
                                   onChange={onChangeData} value={data.titulo} errors={errors}></FormInput>
                    </div>
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="tramoPedagogico" placeholder="Tramo Pedagogico" type="text"
                                   onChange={onChangeData} value={data.tramoPedagogico} errors={errors}></FormInput>
                        <FormInput name="fechaAlta" placeholder="Fecha De Alta" type="date"
                                   onChange={onChangeData} value={data.fechaAlta} errors={errors}></FormInput>
                    </div>
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="fechaBaja" placeholder="Fecha De Baja" type="date"
                                   onChange={onChangeData} value={data.fechaBaja} errors={errors}></FormInput>
                        <FormInput name="personalEstado" placeholder="Estado del Personal" type="text"
                                   onChange={onChangeData} value={data.personalEstado} errors={errors}></FormInput>
                    </div>
                </Form>
            </div>
        </div>

        <ModalMessage ref={modalRef} okText="Confirmar" variant="success" onOk={onModalOk}>
            <div className="p-5 text-center">
                <AppIcon name="check-square" className="w-16 h-16 text-theme-9 mx-auto mt-3"></AppIcon>
                <div className="text-3xl mt-5">¿Está seguro?</div>
                <div className="text-gray-600 mt-2">
                    ¿Está seguro de registrar este nuevo personal?
                </div>
            </div>
        </ModalMessage>

    </AdminLayout>;
}
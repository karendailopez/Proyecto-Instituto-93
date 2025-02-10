import {Head, useForm} from "@inertiajs/react";
import AdminTitle from "@/Layouts/Admin/Components/AdminTitle.jsx";
import AdminLayout from "@/Layouts/Admin/AdminLayout.jsx";
import FormInput from "@/Layouts/Admin/Components/Form/FormInput.jsx";
import Form from "@/Layouts/Admin/Components/Form/Form.jsx";
import FormRadio from "@/Layouts/Admin/Components/Form/FormRadio.jsx";
import { sexos } from '@/Core/Jsons';
import { estados_civil } from '@/Core/Jsons';
import FormSelect from "@/Layouts/Admin/Components/Form/FormSelect/FormSelect.jsx";

export default function Edit({personal}) {
    const breadcrumb = [
        { href: route('admin.personal.index'), label: 'Personal' },
        { href: route('admin.personal.edit', personal.id),  label: 'Editar Personal' }
    ];

    const {data, setData, put, processing, errors, reset } = useForm({
      
        id: personal.id,
        numeroDocumento: personal.numeroDocumento,
        nombre: personal.nombre,
        apellido: personal.apellido,
        fechaNacimiento: personal.fechaNacimiento,
        sexo: personal.sexo,
        direccion: personal.direccion,
        piso: personal.piso,
        departamento: personal.departamento,
        localidad: personal.localidad,
        celular: personal.celular,
        telefono: personal.telefono,
        nacionalidad: personal.nacionalidad,
        email: personal.email,
        estadoCivil: personal.estadoCivil,
        foto: personal.foto,
        titulo: personal.titulo,
        tramoPedagogico: personal.tramoPedagogico,
        fechaAlta: personal.fechaAlta,
        fechaBaja: personal.fechaBaja,
        personalEstado: personal.personalEstado,
        created_at: personal.created_at,
        modified_at: personal.modified_at
    });

    const onSubmit = (event) => {
        event.preventDefault();
        put(route('admin.personal.update', personal.id));
    }

    const onReset = () => {
        reset('numeroDocumento',
        'nombre',
        'apellido',
        'fechaNacimiento',
        'sexo',
        'direccion',
        'piso',
        'departamento',
        'localidad',
        'celular',
        'telefono',
        'nacionalidad',
        'email',
        'estadoCivil',
        'foto',
        'titulo',
        'tramoPedagogico',
        'fechaAlta',
        'created_at',
        'modified_at'
        );
    }

    const onChangeData = ({target}) => {
        const { id, value } = target;

        setData(id, value);
    }

    return <AdminLayout breadcrumb={ breadcrumb }>
        <Head title="Editar Personal"/>

        <AdminTitle title="Editar Personal"/>

        <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="intro-y col-span-12">
                <Form onSubmit={onSubmit} onReset={onReset} procesing={processing} backHref={ route('admin.personal.index') } >
                    <div className="sm:grid grid-cols-2 gap-2">
                        <FormInput name="numeroDocumento" placeholder="Numero de documento" type="text"
                                   value={data.numeroDocumento} onChange={onChangeData} errors={errors}></FormInput>

                        <FormInput name="nombre" placeholder="Nombre" type="text"
                                   value={data.nombre} onChange={onChangeData} errors={errors}></FormInput>
                    </div>
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="apellido" placeholder="Apellido" type="text"
                                   value={data.apellido} onChange={onChangeData} errors={errors}></FormInput>
                        <FormInput name="fechaNacimiento" placeholder="Fecha de Nacimiento" type="date"
                                   value={data.fechaNacimiento} onChange={onChangeData} errors={errors}></FormInput>
                    </div>
                    
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                    <FormInput name="sexo" placeholder="Sexo" type="text"
                                   onChange={onChangeData} value={data.sexo} errors={errors}></FormInput>
                        <FormInput name="direccion" placeholder="Direccion" type="text"
                                   value={data.direccion} onChange={onChangeData} errors={errors}></FormInput>
                    </div>
                
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                    <FormInput name="piso" placeholder="Piso" type="text"
                                   value={data.piso} onChange={onChangeData} errors={errors}></FormInput>
                    <FormInput name="departamento" placeholder="Departamento" type="text"
                                   value={data.departamento} onChange={onChangeData} errors={errors}></FormInput>
                    </div>
                    
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="localidad" placeholder="Localidad" type="text"
                                   value={data.localidad} onChange={onChangeData} errors={errors}></FormInput>
                        <FormInput name="celular" placeholder="Celular" type="text"
                                   value={data.celular} onChange={onChangeData} errors={errors}></FormInput>
                    </div>
                    
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                    <FormInput name="telefono" placeholder="Telefono" type="text"
                                   value={data.telefono} onChange={onChangeData} errors={errors}></FormInput>
                    <FormInput name="nacionalidad" placeholder="Nacionalidad" type="text"
                                   value={data.nacionalidad} onChange={onChangeData} errors={errors}></FormInput>
                    </div>
                 
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                    <FormInput name="email" placeholder="Email" type="text"
                                   value={data.email} onChange={onChangeData} errors={errors}></FormInput>
                    <FormSelect name="estadocivil" items={estados_civil} label="Estado Civil"
                                onChange={onChangeData} value={data.estadoCivil} errors={errors} />
                    </div>
                    
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                    <FormInput name="foto" placeholder="Foto" type="text"
                                   value={data.foto} onChange={onChangeData} errors={errors}></FormInput>
                    <FormInput name="titulo" placeholder="Titulo" type="text"
                                   value={data.titulo} onChange={onChangeData} errors={errors}></FormInput>
                    </div>
                   
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                    <FormRadio name="tramoPedagogico" label="Tramo Pedagógico" checked={data.tramoPedagogico}
                                onChange={onChangeData} />      
                    <FormInput name="fechaAlta" placeholder="Fecha de Alta" type="date"
                                   value={data.fechaAlta} onChange={onChangeData} errors={errors}></FormInput>
                    </div>
                    

                </Form>
            </div>
        </div>
    </AdminLayout>;

}
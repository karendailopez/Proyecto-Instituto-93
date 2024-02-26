import {Head, useForm} from "@inertiajs/react";
import AdminTitle from "@/Layouts/Admin/Components/AdminTitle.jsx";
import AdminLayout from "@/Layouts/Admin/AdminLayout.jsx";
import FormInput from "@/Layouts/Admin/Components/Form/FormInput.jsx";
import Form from "@/Layouts/Admin/Components/Form/Form.jsx";
import FormRadio from "@/Layouts/Admin/Components/Form/FormRadio.jsx";

export default function Edit({carrera}) {
    const breadcrumb = [
        { href: route('admin.carreras.index'), label: 'Carreras' },
        { href: route('admin.carreras.edit', carrera.id),  label: 'Editar Carrera' }
    ];

    const {data, setData, put, processing, errors, reset } = useForm({
        id: carrera.id,
        titulo: carrera.titulo,
        nombre: carrera.nombre,
        descripcion_corta: carrera.descripcion_corta,
        anio_inicio: carrera.anio_inicio,
        anio_fin: carrera.anio_fin,
        numero_expediente: carrera.numero_expediente,
        numero_resolucion: carrera.numero_resolucion,
        numero_institucion: carrera.numero_institucion,
        mostrar_inscripcion: carrera.mostrar_inscripcion
    });

    const onSubmit = (event) => {
        event.preventDefault();
        put(route('admin.carreras.update', carrera.id));
    }

    const onReset = () => {
        reset('titulo',
            'nombre',
            'descripcion_corta',
            'anio_inicio',
            'anio_fin',
            'numero_expediente',
            'numero_resolucion',
            'numero_institucion',
            'mostrar_inscripcion',
        );
    }

    const onChangeData = ({target}) => {
        const { id, value } = target;

        const inputValue = value === '' ? null : value;

        setData(id, inputValue);
    }

    return <AdminLayout breadcrumb={ breadcrumb }>
        <Head title="Editar Carrera"/>

        <AdminTitle title="Editar Carrera"/>

        <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="intro-y col-span-12">
                <Form onSubmit={onSubmit} onReset={onReset} procesing={processing}>
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="titulo" placeholder="Título" type="text" onChange={onChangeData}
                                   errors={errors} value={data.titulo}></FormInput>
                    </div>

                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="nombre" placeholder="Nombre" type="text" onChange={onChangeData}
                                   errors={errors} value={data.nombre}></FormInput>

                        <FormInput name="descripcion_corta" placeholder="Descripción Corta" type="text"
                                   onChange={onChangeData} errors={errors}
                                   value={data.descripcion_corta}></FormInput>
                    </div>

                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="anio_inicio" type="number" placeholder="Año de Inicio"
                                   onChange={onChangeData} errors={errors} value={data.anio_inicio}></FormInput>

                        <FormInput name="anio_fin" type="number" placeholder="Año de Fin"
                                   onChange={onChangeData} errors={errors} value={data.anio_fin}></FormInput>
                    </div>

                    <div className="sm:grid grid-cols-3 gap-2 mt-3">
                        <FormInput name="numero_expediente" type="text" placeholder="Número de Expediente"
                                   onChange={onChangeData} errors={errors}
                                   value={data.numero_expediente}></FormInput>

                        <FormInput name="numero_resolucion" type="text" placeholder="Número de Resolución"
                                   onChange={onChangeData} errors={errors}
                                   value={data.numero_resolucion}></FormInput>

                        <FormInput name="numero_institucion" type="text" placeholder="Número de Institución"
                                   onChange={onChangeData} errors={errors}
                                   value={data.numero_institucion}></FormInput>
                    </div>

                    <div className="sm:grid grid-cols-1 gap-2 mt-3">
                        <FormRadio name="mostrar_inscripcion" label="Mostar Inscripción"
                                   checked={data.mostrar_inscripcion} onChange={onChangeData}></FormRadio>
                    </div>
                </Form>
            </div>
        </div>
    </AdminLayout>
}

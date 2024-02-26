import { useEffect } from "react";
import {Head, useForm} from "@inertiajs/react";
import AdminLayout from "@/Layouts/Admin/AdminLayout.jsx";
import AdminTitle from "@/Layouts/Admin/Components/AdminTitle.jsx";
import Wizard from "@/Components/Wizard/Wizard.jsx";
import WizardContent from "@/Components/Wizard/WizardContent.jsx";
import DatosPersonales from "./Partials/DatosPersonales.jsx";
import Formacion from "./Partials/Formacion.jsx";
import FormInput from "@/Layouts/Admin/Components/Form/FormInput.jsx";
import FormRadio from "@/Layouts/Admin/Components/Form/FormRadio.jsx";
import FormSelect from "@/Layouts/Admin/Components/Form/FormSelect/FormSelect.jsx";
import { useFormEvent } from "@/Core/Hooks/useFormEvent.js";
import { niveles_educativos, maximo_nivel_educativo, alumno_dato_extras } from '@/Core/Jsons';
import datoExtra from '@/Core/Constants/datoExtra.js';

export default function Edit({ alumno, provincias }) {
    const breadcrumb = [
        { href: route('admin.alumnos.index'), label: 'Alumnos' },
        { href: route('admin.alumnos.edit', alumno.id),  label: 'Editar Alumno' }
    ];

    const {data, setData, put, processing, errors, reset } = useForm({
        id: alumno.id,
        apellido: alumno.apellido,
        nombre: alumno.nombre,
        tipo_documento: alumno.tipo_documento,
        numero_documento: alumno.numero_documento,
        estado_civil: alumno.estado_civil,
        sexo: alumno.sexo,
        fecha_nacimiento: alumno.fecha_nacimiento,
        pais_nacimiento: alumno.pais_nacimiento,
        localidad_nacimiento: alumno.localidad_nacimiento,
        domicilio_provincia_id: alumno.domicilio_provincia_id,
        domicilio_localidad_id: alumno.domicilio_localidad_id,
        domicilio_calle: alumno.domicilio_calle,
        domicilio_altura: alumno.domicilio_altura,
        domicilio_piso: alumno.domicilio_piso,
        domicilio_departamento: alumno.domicilio_departamento,
        domicilio_distrito: alumno.domicilio_distrito,
        domicilio_codigo_postal: alumno.domicilio_codigo_postal,
        telefono: alumno.telefono,
        celular: alumno.celular,
        email: alumno.email,
        titulo_secundario: alumno.titulo_secundario,
        adeuda_materias: alumno.adeuda_materias,
        adeuda_descripcion: alumno.adeuda_descripcion,
        titulo: alumno.titulo,
        orientacion: alumno.orientacion,
        otorgado_por: alumno.otorgado_por,
        anio_egreso: alumno.anio_egreso,
        promedio: alumno.promedio,
        titulo_tramite: alumno.titulo_tramite,
        mayor_titulo: alumno.mayor_titulo,
        mayor_titulo_descripcion: alumno.mayor_titulo_descripcion,
        mayor_titulo_institucion: alumno.mayor_titulo_institucion,
        mayor_titulo_promedio: alumno.mayor_titulo_promedio,
        alumno_dato_extras: getAlumnoDatoExtras(alumno.alumno_dato_extras)
    });

    function getAlumnoDatoExtras(datos_extras) {
        if(datos_extras && datos_extras.length > 0) {
            return datos_extras.map((x) => ({...x, valor: JSON.parse( x.valor ) }));
        }

        return alumno_dato_extras.map((x) => ({...x, alumno_id: alumno.id, valor: JSON.parse( x.valor ) }));
    }

    const { onChangeData, onChangeDataExtra } = useFormEvent( data, setData );

    const onReset = () => {
        reset('apellido',
            'nombre',
            'tipo_documento',
            'numero_documento'
        );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        put(route('admin.alumnos.update', alumno.id));
    }

    return <AdminLayout breadcrumb={breadcrumb}>
        <Head title="Editar Alumno"/>

        <AdminTitle title={`Editar Alumno ${alumno.nombre} ${alumno.apellido}`}/>

        <Wizard showGuardar={true}>
            <WizardContent title="Datos personales">
                <DatosPersonales data={ data } setData={ setData } errors={ errors }></DatosPersonales>
            </WizardContent>

            <WizardContent title="Formación">
                <Formacion data={ data } setData={ setData } errors={ errors }></Formacion>
            </WizardContent>

            <WizardContent title="Trabajo">
                <FormRadio name="alumno_dato_extras" label="¿Vive solo?"
                           checked={data.alumno_dato_extras[ datoExtra.TRABAJO ].valor.vive_solo}
                           onChange={() => onChangeDataExtra(event, datoExtra.TRABAJO, 'vive_solo' )}></FormRadio>


            </WizardContent>
        </Wizard>
    </AdminLayout>;
}

import {Head, useForm} from "@inertiajs/react";
import AdminLayout from "@/Layouts/Admin/AdminLayout.jsx";
import AdminTitle from "@/Layouts/Admin/Components/AdminTitle.jsx";
import Wizard from "@/Components/Wizard/Wizard.jsx";
import WizardContent from "@/Components/Wizard/WizardContent.jsx";
import DatosPersonales from "./Partials/DatosPersonales.jsx";
import Formacion from "./Partials/Formacion.jsx";
import { useFormEvent } from "@/Core/Hooks/useFormEvent.js";
import {alumno_dato_extras, familiares, horas_trabajo, sector_trabajo} from '@/Core/Jsons';
import Trabajo from "@/Pages/Admin/Alumnos/Partials/Trabajo.jsx";
import Cultura from "@/Pages/Admin/Alumnos/Partials/Cultura.jsx";
import Salud from "@/Pages/Admin/Alumnos/Partials/Salud.jsx";
import Instituto from "@/Pages/Admin/Alumnos/Partials/Instituto.jsx";
import FormRadio from "@/Layouts/Admin/Components/Form/FormRadio.jsx";
import datoExtra from "@/Core/Constants/datoExtra.js";
import FormSelect from "@/Layouts/Admin/Components/Form/FormSelect/FormSelect.jsx";
import FormInput from "@/Layouts/Admin/Components/Form/FormInput.jsx";
import FamiliaBeca from "@/Pages/Admin/Alumnos/Partials/FamiliaBeca.jsx";

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
        fotocopia_titulo: alumno.fotocopia_titulo,
        constancia_titulo_tramite: alumno.constancia_titulo_tramite,
        constancia_adeuda_materias: alumno.constancia_adeuda_materias,
        cantidad_adeuda_materias: alumno.cantidad_adeuda_materias,
        certificado_aptitud: alumno.certificado_aptitud,
        fotocopia_documento: alumno.fotocopia_documento,
        foto_carnet: alumno.foto_carnet,
        fotocopia_partida_nacimiento: alumno.fotocopia_partida_nacimiento,
        vacuna_antihepatitis: alumno.vacuna_antihepatitis,
        vacuna_antitetanica: alumno.vacuna_antitetanica,
        recibo: alumno.recibo,
        monto: alumno.monto,
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
                <Trabajo data={ data } setData={ setData } errors={ errors }></Trabajo>
            </WizardContent>

            <WizardContent title="Familia y Becas">
                <FamiliaBeca data={ data } setData={ setData } errors={ errors }></FamiliaBeca>
            </WizardContent>

            <WizardContent title="Cooperadora">
                <Trabajo data={data} setData={setData} errors={errors}></Trabajo>
            </WizardContent>

            <WizardContent title="Cultura">
                <Cultura data={data} setData={setData} errors={errors}></Cultura>
            </WizardContent>

            <WizardContent title="Salud">
                <Salud data={data} setData={setData} errors={errors}></Salud>
            </WizardContent>

            <WizardContent title="Instituto">
                <Instituto data={data} setData={setData} errors={errors}></Instituto>
            </WizardContent>
        </Wizard>
    </AdminLayout>;
}

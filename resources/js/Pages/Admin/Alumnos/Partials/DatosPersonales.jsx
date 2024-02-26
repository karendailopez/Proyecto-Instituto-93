import FormInput from "@/Layouts/Admin/Components/Form/FormInput.jsx";
import FormSelect from "@/Layouts/Admin/Components/Form/FormSelect/FormSelect.jsx";
import {estados_civil, localidades, paises, sexos, tipos_documentos} from "@/Core/Jsons";
import axios from "axios";
import {useState} from "react";
import {usePage} from "@inertiajs/react";
import {useFormEvent} from "@/Core/Hooks/useFormEvent.js";

export default function DatosPersonales({ data, setData, errors }) {
    const [ domicilio_localidades, setLocalidades ] = useState([]);
    const page = usePage();

    const { onChangeData } = useFormEvent( data, setData );

    const onChangeDomicilio = async (event) => {
        onChangeData(event);

        const { value } = event.target;

        const inputValue = value === '' ? null : value;

        if(inputValue) {
            const result = await axios.get( route('api.localidad.get', inputValue) );
            setLocalidades( result.data );
        } else {
            setLocalidades( [] );
        }
    }

    return <>
        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormInput name="apellido" placeholder="Apellido" type="text"
                       onChange={onChangeData} errors={errors} value={data.apellido}></FormInput>

            <FormInput name="nombre" placeholder="Nombre" type="text"
                       onChange={onChangeData} errors={errors} value={data.nombre}></FormInput>
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormSelect name="tipo_documento" items={tipos_documentos} value={data.tipo_documento}
                        label="Tipo de Documento" onChange={onChangeData} errors={errors}></FormSelect>

            <FormInput name="numero_documento" placeholder="Número de Documento" type="number"
                       onChange={onChangeData} errors={errors} value={data.numero_documento}></FormInput>
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormSelect name="estado_civil" items={estados_civil} value={data.estado_civil}
                        label="Estado Civil" onChange={onChangeData} errors={errors}></FormSelect>

            <FormSelect name="sexo" items={sexos} value={data.sexo}
                        label="Sexo" onChange={onChangeData} errors={errors}></FormSelect>
        </div>

        <div className="font-medium my-5 text-sm">Información de nacimiento</div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormInput name="fecha_nacimiento" placeholder="Fecha de nacimiento" type="date"
                       onChange={onChangeData} errors={errors}
                       value={data.fecha_nacimiento.substring(0, 10)}></FormInput>
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormSelect name="pais_nacimiento" items={paises} value={data.pais_nacimiento}
                        label="País de Nacimiento" onChange={onChangeData} errors={errors}></FormSelect>

            <FormSelect name="localidad_nacimiento" items={localidades} value={data.localidad_nacimiento}
                        label="Localidad de Nacimiento " onChange={onChangeData} errors={errors}></FormSelect>
        </div>

        <div className="font-medium my-5 text-sm">Reside</div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormSelect name="domicilio_provincia_id" items={page.props.provincias} value={data.domicilio_provincia_id}
                        label="Provincia" onChange={onChangeDomicilio} errors={errors}></FormSelect>

            <FormSelect name="domicilio_localidad_id" items={domicilio_localidades}
                        value={data.domicilio_localidad_id}
                        label="Localidad " onChange={onChangeData} errors={errors}></FormSelect>
        </div>

        <div className="sm:grid grid-cols-3 gap-2 mt-3">
            <FormInput name="domicilio_calle" placeholder="Calle" type="text"
                       onChange={onChangeData} errors={errors} value={data.domicilio_calle}></FormInput>

            <FormInput name="domicilio_altura" placeholder="Altura" type="number"
                       onChange={onChangeData} errors={errors} value={data.domicilio_altura}></FormInput>

            <FormInput name="domicilio_piso" placeholder="Piso" type="text"
                       onChange={onChangeData} errors={errors} value={data.domicilio_piso}></FormInput>
        </div>

        <div className="sm:grid grid-cols-3 gap-2 mt-3">
            <FormInput name="domicilio_departamento" placeholder="Departamento" type="text"
                       onChange={onChangeData} errors={errors} value={data.domicilio_departamento}></FormInput>

            <FormInput name="domicilio_codigo_postal" placeholder="Código Postal" type="text"
                       onChange={onChangeData} errors={errors} value={data.domicilio_codigo_postal}></FormInput>

            <FormInput name="domicilio_distrito" placeholder="Distrito" type="text"
                       onChange={onChangeData} errors={errors} value={data.domicilio_distrito}></FormInput>
        </div>

        <div className="font-medium my-5 text-sm">Información de Contacto</div>

        <div className="sm:grid grid-cols-3 gap-2 mt-3">
            <FormInput name="telefono" placeholder="Teléfono" type="text"
                       onChange={onChangeData} errors={errors} value={data.telefono}></FormInput>

            <FormInput name="celular" placeholder="Celular" type="text"
                       onChange={onChangeData} errors={errors} value={data.celular}></FormInput>

            <FormInput name="email" placeholder="Email" type="text"
                       onChange={onChangeData} errors={errors} value={data.email}></FormInput>
        </div>
    </>;
}

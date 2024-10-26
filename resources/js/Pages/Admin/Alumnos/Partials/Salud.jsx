import FormRadio from "@/Layouts/Admin/Components/Form/FormRadio.jsx";
import datoExtra from "@/Core/Constants/datoExtra.js";
import FormInput from "@/Layouts/Admin/Components/Form/FormInput.jsx";
import FormSelect from "@/Layouts/Admin/Components/Form/FormSelect/FormSelect.jsx";
import {tipo_discapacidades} from "@/Core/Jsons/index.js";
import {useFormEvent} from "@/Core/Hooks/useFormEvent.js";

export default function Salud({ data, setData, errors }) {
    const { onChangeDataExtra } = useFormEvent( data, setData );

    return <>
        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Tienes Obra Social Prepaga?"
                       checked={data.alumno_dato_extras[datoExtra.FICHASALUD].valor.obra_social_prepaga}
                       onChange={() => onChangeDataExtra(event, datoExtra.FICHASALUD, 'obra_social_prepaga')}>
            </FormRadio>

            {data.alumno_dato_extras[datoExtra.FICHASALUD].valor.obra_social_prepaga && <FormInput
                name="alumno_dato_extras" placeholder="Descripción de la Obra Social" type="text"
                onChange={() => onChangeDataExtra(event, datoExtra.FICHASALUD, 'obra_social_descripcion')}
                value={data.alumno_dato_extras[datoExtra.FICHASALUD].valor.obra_social_descripcion}
                errors={errors}>
            </FormInput>}
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Estás bajo tratamiento médico?"
                       checked={data.alumno_dato_extras[datoExtra.FICHASALUD].valor.tratamiento_medico}
                       onChange={() => onChangeDataExtra(event, datoExtra.FICHASALUD, 'tratamiento_medico')}>
            </FormRadio>

            {data.alumno_dato_extras[datoExtra.FICHASALUD].valor.tratamiento_medico && <FormInput
                name="alumno_dato_extras" placeholder="Descripción del Tratamiento Médico" type="text"
                onChange={() => onChangeDataExtra(event, datoExtra.FICHASALUD, 'tratamiento_medico_descripcion')}
                value={data.alumno_dato_extras[datoExtra.FICHASALUD].valor.tratamiento_medico_descripcion}
                errors={errors}>
            </FormInput>}
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Estás tomando medicación?"
                       checked={data.alumno_dato_extras[datoExtra.FICHASALUD].valor.medicacion}
                       onChange={() => onChangeDataExtra(event, datoExtra.FICHASALUD, 'medicacion')}>
            </FormRadio>

            {data.alumno_dato_extras[datoExtra.FICHASALUD].valor.medicacion && <FormInput
                name="alumno_dato_extras" placeholder="Descripción de la Medicación" type="text"
                onChange={() => onChangeDataExtra(event, datoExtra.FICHASALUD, 'medicacion_descripcion')}
                value={data.alumno_dato_extras[datoExtra.FICHASALUD].valor.medicacion_descripcion}
                errors={errors}>
            </FormInput>}
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Tienes alguna discapacidad?"
                       checked={data.alumno_dato_extras[datoExtra.FICHASALUD].valor.discapacidad}
                       onChange={() => onChangeDataExtra(event, datoExtra.FICHASALUD, 'discapacidad')}>
            </FormRadio>

            {data.alumno_dato_extras[datoExtra.FICHASALUD].valor.discapacidad && <FormRadio
                name="alumno_dato_extras" label="¿Tienes certificado de discapacidad?"
                checked={data.alumno_dato_extras[datoExtra.FICHASALUD].valor.discapacidad_certificado}
                onChange={() => onChangeDataExtra(event, datoExtra.FICHASALUD, 'discapacidad_certificado')}>
            </FormRadio>}
        </div>

        {data.alumno_dato_extras[datoExtra.FICHASALUD].valor.discapacidad &&
            <div className="sm:grid grid-cols-2 gap-2 mt-3">
                <FormSelect
                    name="alumno_dato_extras"
                    items={tipo_discapacidades}
                    value={data.alumno_dato_extras[datoExtra.FICHASALUD].valor.discapacidad_estado}
                    label="Estado de la Discapacidad"
                    onChange={(event) => onChangeDataExtra(event, datoExtra.FICHASALUD, 'discapacidad_estado')}
                    errors={errors}>
                </FormSelect>

                <FormInput
                    name="alumno_dato_extras" placeholder="Descripción de la Discapacidad" type="text"
                    onChange={() => onChangeDataExtra(event, datoExtra.FICHASALUD, 'discapacidad_descripcion')}
                    value={data.alumno_dato_extras[datoExtra.FICHASALUD].valor.discapacidad_descripcion}
                    errors={errors}>
                </FormInput>
            </div>}

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormInput
                name="alumno_dato_extras" placeholder="Contacto de Emergencia" type="text"
                onChange={() => onChangeDataExtra(event, datoExtra.FICHASALUD, 'contacto_emergencia')}
                value={data.alumno_dato_extras[datoExtra.FICHASALUD].valor.contacto_emergencia}
                errors={errors}>
            </FormInput>

            <FormInput
                name="alumno_dato_extras" placeholder="Teléfono de Contacto" type="text"
                onChange={() => onChangeDataExtra(event, datoExtra.FICHASALUD, 'telefono_contacto')}
                value={data.alumno_dato_extras[datoExtra.FICHASALUD].valor.telefono_contacto}
                errors={errors}>
            </FormInput>
        </div>
    </>;
}

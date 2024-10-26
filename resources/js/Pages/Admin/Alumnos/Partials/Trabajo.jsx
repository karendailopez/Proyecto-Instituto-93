import FormRadio from "@/Layouts/Admin/Components/Form/FormRadio.jsx";
import datoExtra from "@/Core/Constants/datoExtra.js";
import FormSelect from "@/Layouts/Admin/Components/Form/FormSelect/FormSelect.jsx";
import {horas_trabajo, sector_trabajo} from "@/Core/Jsons/index.js";
import {useFormEvent} from "@/Core/Hooks/useFormEvent.js";
import FormInput from "@/Layouts/Admin/Components/Form/FormInput.jsx";

export default function Trabajo({ data, setData, errors }) {
    const { onChangeDataExtra } = useFormEvent( data, setData );

    return <>
        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Actualmente trabajas?"
                       checked={data.alumno_dato_extras[datoExtra.TRABAJO].valor.trabaja}
                       onChange={() => onChangeDataExtra(event, datoExtra.TRABAJO, 'trabaja')}>
            </FormRadio>

            {data.alumno_dato_extras[datoExtra.TRABAJO].valor.trabaja === true && <FormSelect
                name="alumno_dato_extras"
                items={sector_trabajo}
                multiple={true}
                value={data.alumno_dato_extras[datoExtra.TRABAJO].valor.sector}
                label="Sector de trabajo"
                onChange={(event) => onChangeDataExtra(event, datoExtra.TRABAJO, 'sector')}
                errors={errors}>
            </FormSelect>}
        </div>

        {data.alumno_dato_extras[datoExtra.TRABAJO].valor.trabaja === true &&
            <div className="sm:grid grid-cols-2 gap-2 mt-3">
                <FormSelect
                    name="alumno_dato_extras"
                    items={horas_trabajo}
                    value={data.alumno_dato_extras[datoExtra.TRABAJO].valor.horas_trabajo}
                    label="¿Cuántas horas trabajas diariamente?"
                    onChange={(event) => onChangeDataExtra(event, datoExtra.TRABAJO, 'horas_trabajo')}
                    errors={errors}>
                </FormSelect>

                {data.alumno_dato_extras[datoExtra.TRABAJO].valor.sector?.some((x) => x === 'otro') &&
                    <FormInput
                        name="alumno_dato_extras" placeholder="Especificar otro sector de trabajo" type="text"
                        onChange={() => onChangeDataExtra(event, datoExtra.TRABAJO, 'otro_sector')}
                        value={data.alumno_dato_extras[datoExtra.TRABAJO].valor.otro_sector}
                        errors={errors}>
                    </FormInput>}
            </div>}

        <div className="sm:grid grid-cols-1 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Eres pensionado/jubilado?"
                       checked={data.alumno_dato_extras[datoExtra.TRABAJO].valor.pensionado_jubilado}
                       onChange={() => onChangeDataExtra(event, datoExtra.TRABAJO, 'pensionado_jubilado')}>
            </FormRadio>
        </div>
    </>;
}

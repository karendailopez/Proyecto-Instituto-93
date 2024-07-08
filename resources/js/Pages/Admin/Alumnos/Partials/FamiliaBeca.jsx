import FormRadio from "@/Layouts/Admin/Components/Form/FormRadio.jsx";
import datoExtra from "@/Core/Constants/datoExtra.js";
import FormSelect from "@/Layouts/Admin/Components/Form/FormSelect/FormSelect.jsx";
import {becas_programas, familiares, familiares_a_cargo} from "@/Core/Jsons/index.js";
import {useFormEvent} from "@/Core/Hooks/useFormEvent.js";

export default function FamiliaBeca({ data, setData, errors }) {
    const { onChangeDataExtra } = useFormEvent( data, setData );

    return <>
        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Vive solo?"
                       checked={data.alumno_dato_extras[datoExtra.FAMILIA].valor.vive_solo}
                       onChange={() => onChangeDataExtra(event, datoExtra.FAMILIA, 'vive_solo')}>
            </FormRadio>

            {data.alumno_dato_extras[datoExtra.FAMILIA].valor.vive_solo === true && <FormSelect
                name="alumno_dato_extras"
                items={familiares}
                multiple={true}
                value={data.alumno_dato_extras[datoExtra.FAMILIA].valor.vive_con}
                label="¿Con quién vive?"
                onChange={(event) => onChangeDataExtra(event, datoExtra.FAMILIA, 'vive_con')}
                errors={errors}>
            </FormSelect>}
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Tiene familiares a cargo?"
                       checked={data.alumno_dato_extras[datoExtra.FAMILIA].valor.familiar_a_cargo}
                       onChange={() => onChangeDataExtra(event, datoExtra.FAMILIA, 'familiar_a_cargo')}>
            </FormRadio>

            {data.alumno_dato_extras[datoExtra.FAMILIA].valor.familiar_a_cargo === true && <FormSelect
                name="alumno_dato_extras"
                items={familiares_a_cargo}
                multiple={true}
                value={data.alumno_dato_extras[datoExtra.FAMILIA].valor.a_cargo_de}
                label="¿A cargo de quién?"
                onChange={(event) => onChangeDataExtra(event, datoExtra.FAMILIA, 'a_cargo_de')}
                errors={errors}>
            </FormSelect>}
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormSelect
                name="alumno_dato_extras"
                items={becas_programas}
                multiple={true}
                value={data.alumno_dato_extras[datoExtra.BECAS].valor.beca_programa}
                label="¿Recibe becas o participa en programas?"
                onChange={(event) => onChangeDataExtra(event, datoExtra.BECAS, 'beca_programa')}
                errors={errors}>
            </FormSelect>
        </div>
    </>;
}

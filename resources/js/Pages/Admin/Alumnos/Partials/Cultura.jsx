import FormRadio from "@/Layouts/Admin/Components/Form/FormRadio.jsx";
import datoExtra from "@/Core/Constants/datoExtra.js";
import FormSelect from "@/Layouts/Admin/Components/Form/FormSelect/FormSelect.jsx";
import {lectura_frecuente, redes_sociales, sitios_frecuentados, usa_internet} from "@/Core/Jsons/index.js";
import FormInput from "@/Layouts/Admin/Components/Form/FormInput.jsx";
import {useFormEvent} from "@/Core/Hooks/useFormEvent.js";

export default function Cultura({ data, setData, errors }) {
    const { onChangeDataExtra } = useFormEvent( data, setData );

    return <>
        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Escuchas la radio?"
                       checked={data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.escucha_radio}
                       onChange={() => onChangeDataExtra(event, datoExtra.PRACTICASCULTURALES, 'escucha_radio')}>
            </FormRadio>

            <FormRadio name="alumno_dato_extras" label="¿Miras televisión?"
                       checked={data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.mira_television}
                       onChange={() => onChangeDataExtra(event, datoExtra.PRACTICASCULTURALES, 'mira_television')}>
            </FormRadio>
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Asistes a obras de teatro?"
                       checked={data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.asiste_teatros}
                       onChange={() => onChangeDataExtra(event, datoExtra.PRACTICASCULTURALES, 'asiste_teatros')}>
            </FormRadio>

            <FormRadio name="alumno_dato_extras" label="¿Asistes a museos?"
                       checked={data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.asiste_museos}
                       onChange={() => onChangeDataExtra(event, datoExtra.PRACTICASCULTURALES, 'asiste_museos')}>
            </FormRadio>
        </div>

        <div className="sm:grid grid-cols-1 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Asistes a conciertos?"
                       checked={data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.asiste_conciertos}
                       onChange={() => onChangeDataExtra(event, datoExtra.PRACTICASCULTURALES, 'asiste_conciertos')}>
            </FormRadio>
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Realizas lecturas frecuentes?"
                       checked={data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.lecturas_frecuentes}
                       onChange={() => onChangeDataExtra(event, datoExtra.PRACTICASCULTURALES, 'lecturas_frecuentes')}>
            </FormRadio>

            {data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.lecturas_frecuentes === true
                && <FormSelect
                    name="alumno_dato_extras"
                    items={lectura_frecuente}
                    multiple={true}
                    value={data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.tipo_lectura_frecuente}
                    label="Selecciona el tipo de lectura frecuente"
                    onChange={(event) => onChangeDataExtra(event, datoExtra.PRACTICASCULTURALES, 'tipo_lectura_frecuente')}
                    errors={errors}>
                </FormSelect>}
        </div>

        <div className="sm:grid grid-cols-1 gap-2 mt-3">
            <FormInput name="alumno_dato_extras" placeholder="Otras prácticas culturales" type="text"
                       onChange={() => onChangeDataExtra(event, datoExtra.PRACTICASCULTURALES, 'otras_practicas_culturales')}
                       value={data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.otras_practicas_culturales}
                       errors={errors}>
            </FormInput>
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Usas Internet?"
                       checked={data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.usa_internet}
                       onChange={() => onChangeDataExtra(event, datoExtra.PRACTICASCULTURALES, 'usa_internet')}>
            </FormRadio>

            {data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.usa_internet === true
                && <FormSelect
                    name="alumno_dato_extras"
                    items={usa_internet}
                    multiple={true}
                    value={data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.donde_usa_internet}
                    label="¿Dónde usa internet?"
                    onChange={(event) => onChangeDataExtra(event, datoExtra.PRACTICASCULTURALES, 'donde_usa_internet')}
                    errors={errors}>
                </FormSelect>}
        </div>

        <div className="sm:grid grid-cols-1 gap-2 mt-3">
            <FormRadio name="alumno_dato_extras" label="¿Usas Redes Sociales?"
                       checked={data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.usa_redes_sociales}
                       onChange={() => onChangeDataExtra(event, datoExtra.PRACTICASCULTURALES, 'usa_redes_sociales')}>
            </FormRadio>
        </div>

        {data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.usa_redes_sociales === true && <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormSelect
                name="alumno_dato_extras"
                items={redes_sociales}
                multiple={true}
                value={data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.redes_sociales}
                label="Selecciona las Redes Sociales que usas"
                onChange={(event) => onChangeDataExtra(event, datoExtra.PRACTICASCULTURALES, 'redes_sociales')}
                errors={errors}>
            </FormSelect>
        </div>}
        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormSelect
                name="alumno_dato_extras"
                items={sitios_frecuentados}
                multiple={true}
                value={data.alumno_dato_extras[datoExtra.PRACTICASCULTURALES].valor.sitios_frecuentados}
                label="Sitios Frecuentados"
                onChange={(event) => onChangeDataExtra(event, datoExtra.PRACTICASCULTURALES, 'sitios_frecuentados')}
                errors={errors}>
            </FormSelect>
        </div>
    </>
}

import FormRadio from "@/Layouts/Admin/Components/Form/FormRadio.jsx";
import FormInput from "@/Layouts/Admin/Components/Form/FormInput.jsx";
import {useFormEvent} from "@/Core/Hooks/useFormEvent.js";

export default function Instituto({ data, setData, errors }) {
    const { onChangeData } = useFormEvent( data, setData );

    return <>
        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="fotocopia_titulo"
                       label="Fotocopia del Título Secundario"
                       checked={data.fotocopia_titulo}
                       onChange={onChangeData}>
            </FormRadio>

            <FormRadio name="constancia_titulo_tramite"
                       label="Constancia de Título en Tramite"
                       checked={data.constancia_titulo_tramite}
                       onChange={onChangeData}>
            </FormRadio>
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="constancia_adeuda_materias"
                       label="Constancia Adeuda Materias"
                       checked={data.constancia_adeuda_materias}
                       onChange={onChangeData}>
            </FormRadio>

            <FormInput
                name="constancia_adeuda_materias" placeholder="¿Cuántas?" type="text"
                onChange={onChangeData()}
                value={data.cantidad_adeuda_materias}
                errors={errors}>
            </FormInput>
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="certificado_aptitud"
                       label="Certificado de Aptitud Psicofísica"
                       checked={data.certificado_aptitud}
                       onChange={onChangeData}>
            </FormRadio>

            <FormRadio name="fotocopia_documento"
                       label="Fotocopia del Documento de Identidad"
                       checked={data.fotocopia_documento}
                       onChange={onChangeData}>
            </FormRadio>
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="foto_carnet"
                       label="Foto Carnet 4x4"
                       checked={data.foto_carnet}
                       onChange={onChangeData}>
            </FormRadio>

            <FormRadio name="fotocopia_partida_nacimiento"
                       label="Fotocopia de la Partida de Nacimiento"
                       checked={data.fotocopia_partida_nacimiento}
                       onChange={onChangeData}>
            </FormRadio>
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormRadio name="vacuna_antihepatitis"
                       label="Vacuna Antihepatitis B"
                       checked={data.vacuna_antihepatitis}
                       onChange={onChangeData}>
            </FormRadio>

            <FormRadio name="vacuna_antitetanica"
                       label="Vacuna Antitetánica"
                       checked={data.vacuna_antitetanica}
                       onChange={onChangeData}>
            </FormRadio>
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormInput
                name="recibo" placeholder="Recibo N°" type="number"
                onChange={onChangeData}
                value={data.recibo}
                errors={errors}>
            </FormInput>

            <FormInput
                name="monto" placeholder="Monto" type="number"
                onChange={onChangeData}
                value={data.monto}
                errors={errors}>
            </FormInput>
        </div>
    </>;
}

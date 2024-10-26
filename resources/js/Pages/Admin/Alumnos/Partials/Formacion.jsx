import FormRadio from "@/Layouts/Admin/Components/Form/FormRadio.jsx";
import FormInput from "@/Layouts/Admin/Components/Form/FormInput.jsx";
import FormSelect from "@/Layouts/Admin/Components/Form/FormSelect/FormSelect.jsx";
import {maximo_nivel_educativo, niveles_educativos} from "@/Core/Jsons";
import {useFormEvent} from "@/Core/Hooks/useFormEvent.js";
import datoExtra from '@/Core/Constants/datoExtra.js';

export default function Formacion({ data, setData, errors }) {
    const { onChangeData, onChangeDataExtra } = useFormEvent( data, setData );

    return <>
        <div className="sm:grid grid-cols-1 gap-2 mt-3">
            <FormRadio name="titulo_secundario" label="¿Posees título secundario?"
                       checked={data.titulo_secundario} onChange={onChangeData}></FormRadio>
        </div>

        {!!data.titulo_secundario === false && <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormInput name="adeuda_materias" placeholder="Cantidad de Materias Adeudadas" type="text"
                       onChange={onChangeData} errors={errors} value={data.adeuda_materias}></FormInput>

            <FormInput name="adeuda_descripcion" placeholder="Descripción de Materias Adeudadas" type="text"
                       onChange={onChangeData} errors={errors} value={data.adeuda_descripcion}></FormInput>
        </div>}

        {!!data.titulo_secundario === true && <>
            <div className="sm:grid grid-cols-2 gap-2 mt-3">
                <FormInput name="titulo" placeholder="Título" type="text"
                           onChange={onChangeData} errors={errors} value={data.titulo}></FormInput>

                <FormInput name="orientacion" placeholder="Orientación" type="text"
                           onChange={onChangeData} errors={errors} value={data.orientacion}></FormInput>
            </div>

            <div className="sm:grid grid-cols-3 gap-2 mt-3">
                <FormInput name="otorgado_por" placeholder="Otorgado Por" type="text"
                           onChange={onChangeData} errors={errors} value={data.otorgado_por}></FormInput>

                <FormInput name="anio_egreso" placeholder="Año de egreso" type="number"
                           onChange={onChangeData} errors={errors} value={data.anio_egreso}></FormInput>

                <FormInput name="promedio" placeholder="Promedio" type="number"
                           onChange={onChangeData} errors={errors} value={data.promedio}></FormInput>
            </div>
        </>}

        <div className="sm:grid grid-cols-1 gap-2 mt-3">
            <FormRadio name="titulo_tramite" label="¿Tienes título en trámite?"
                       checked={data.titulo_tramite} onChange={onChangeData}></FormRadio>
        </div>

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormSelect name="mayor_titulo" items={niveles_educativos} value={data.mayor_titulo}
                        label="¿Posees algún otro título?" placeholder="Seleccione Título"
                        onChange={onChangeData} errors={errors}></FormSelect>
        </div>

        {data.mayor_titulo && <div className="sm:grid grid-cols-3 gap-2 mt-3">
            <FormInput name="mayor_titulo_descripcion" placeholder="Otros títulos" type="text"
                       onChange={onChangeData} errors={errors}
                       value={data.mayor_titulo_descripcion}></FormInput>

            <FormInput name="mayor_titulo_institucion" placeholder="Otorgado Por" type="text"
                       onChange={onChangeData} errors={errors}
                       value={data.mayor_titulo_institucion}></FormInput>

            <FormInput name="mayor_titulo_promedio" placeholder="Promedio" type="number"
                       onChange={onChangeData} errors={errors} value={data.mayor_titulo_promedio}></FormInput>
        </div>}

        <div className="sm:grid grid-cols-2 gap-2 mt-3">
            <FormSelect name="alumno_dato_extras" items={maximo_nivel_educativo}
                        value={data.alumno_dato_extras[ datoExtra.NIVELEDUCATIVOPADRES ].valor.padre}
                        label="Máximo nivel educativo del padre" placeholder="Seleccione Nivel Educativo"
                        onChange={(event) => onChangeDataExtra(event, datoExtra.NIVELEDUCATIVOPADRES, 'padre')}
                        errors={errors}></FormSelect>

            <FormSelect name="alumno_dato_extras" items={maximo_nivel_educativo}
                        value={data.alumno_dato_extras[ datoExtra.NIVELEDUCATIVOPADRES ].valor.madre}
                        label="Máximo nivel educativo del madre" placeholder="Seleccione Nivel Educativo"
                        onChange={(event) => onChangeDataExtra(event, datoExtra.NIVELEDUCATIVOPADRES, 'madre')}
                        errors={errors}></FormSelect>
        </div>
    </>;
}

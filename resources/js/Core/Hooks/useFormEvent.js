export function useFormEvent(data, setData) {
    const onChangeData = async ({target}) => {
        const { id, value } = target;

        const inputValue = value === '' ? null : value;

        setData(id, inputValue);
    }

    const onChangeDataExtra = async (event, index, field) => {
        const datos_extras = {...data.alumno_dato_extras};

        if(event.target.type === 'checkbox' || event.target.type === 'radio') {
            datos_extras[index].valor[field] = event.target.checked;
        } else {
            datos_extras[index].valor[field] = event.target.value;
        }

        onChangeData({ target: { id: 'alumno_dato_extras', value: datos_extras } });
    }

    return {
        onChangeData,
        onChangeDataExtra
    };
}

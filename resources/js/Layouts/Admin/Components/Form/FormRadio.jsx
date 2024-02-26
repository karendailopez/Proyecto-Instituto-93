import FormLabel from "@/Layouts/Admin/Components/Form/FormLabel.jsx";

export default function FormRadio({label, name, multiple, value = null, checked, onChange}) {
    return <>
        <FormLabel name={name} label={label}></FormLabel>
        <div className="mt-2">
            <input
                type="checkbox"
                name={name}
                value={value ?? name}
                checked={checked ?? false}
                className="form-check-switch"
                onChange={() => {
                    const valueRadio = multiple ? value : event.target.checked;

                    if((multiple && event.target.checked) || !multiple) {
                        onChange({ target: { id: name, value: valueRadio } })
                    }
                }}/>
        </div>
    </>
}

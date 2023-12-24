import FormLabel from "@/Layouts/Admin/Components/Form/FormLabel.jsx";

export default function FormSelect({name, label, options, value, onChange}) {
    return <div>
        <FormLabel name={name} label={label}></FormLabel>
        <select className="form-select form-select-lg" id={name} value={value} onChange={onChange}>
            { options && options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>) }
        </select>
    </div>;
}

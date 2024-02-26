import FormLabel from "./FormLabel.jsx";

export default function FormInput({placeholder, name, type, value, errors, onChange}) {
    return <div className="input-form">
        <FormLabel name={name} label={placeholder}></FormLabel>
        <input
            className={`form-control form-control-lg w-full ${(errors && Object.hasOwn(errors, name)) ? 'has-error' : ''}`}
            id={name}
            type={type}
            placeholder={placeholder}
            value={value ?? ''}
            onChange={onChange}/>
        { (errors && Object.hasOwn(errors, name)) && <div className="pristine-error text-primary-3 mt-2">{ errors[name] }</div>}
    </div>;
}

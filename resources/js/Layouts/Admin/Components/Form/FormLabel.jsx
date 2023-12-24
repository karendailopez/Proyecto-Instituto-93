export default function FormLabel({ name, label }) {
    return <label htmlFor={name} className="form-label">{label}</label>
}

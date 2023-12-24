import AdminLayout from '@/Layouts/Admin/AdminLayout.jsx';
import AdminTitle from "@/Layouts/Admin/Components/AdminTitle.jsx";
import Form from '@/Layouts/Admin/Components/Form/Form.jsx';
import {Head, useForm} from "@inertiajs/react";
import FormInput from "@/Layouts/Admin/Components/Form/FormInput.jsx";
import FormSelect from "@/Layouts/Admin/Components/Form/FormSelect.jsx";

export default function Create({roles}) {
    const {setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        rol_id: '',
        password: '',
        password_confirmation: '',
    });

    const onSubmit = (event) => {
        event.preventDefault();
        post(route('admin.users.store'));
    }

    const onReset = () => {
        console.log('onReset');
        reset('name', 'email', 'rol_id', 'password', 'password_confirmation');
    }

    const onChangeData = ({target}) => {
        const { id, value } = target;

        setData(id, value);
    }

    return <AdminLayout>
        <Head title="Agregar Usuario"/>

        <AdminTitle title="Agregar Usuario"/>

        <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="intro-y col-span-12">
                <Form routeName="admin.users.store" onSubmit={onSubmit} onReset={onReset} procesing={processing} >
                    <div className="sm:grid grid-cols-2 gap-2">
                        <FormInput name="name" placeholder="Nombre" type="text" onChange={onChangeData} errors={errors}></FormInput>

                        <FormInput name="email" placeholder="Email" type="email"  onChange={onChangeData} errors={errors}></FormInput>
                    </div>
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormSelect name="rol_id" options={roles} label="Rol" onChange={onChangeData} errors={errors}></FormSelect>
                    </div>
                    <div className="sm:grid grid-cols-2 gap-2 mt-3">
                        <FormInput name="password" placeholder="Contraseña" type="password" onChange={onChangeData} errors={errors}></FormInput>

                        <FormInput name="password_confirmation" placeholder="Repita Contraseña" type="password" onChange={onChangeData} errors={errors}></FormInput>
                    </div>
                </Form>
            </div>
        </div>
    </AdminLayout>;
}

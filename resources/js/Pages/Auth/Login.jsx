import { useEffect } from 'react';
import SesionLayout from '@/Pages/SesionLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <SesionLayout>
            <Head title="Iniciar Sesión"/>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div
                className="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <form action="#" id="login-form" onSubmit={submit}>
                    <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                        Iniciar Sesión
                    </h2>

                    <div id="alert-warning" className="alert alert-warning d-none show mb-2 mt-3" role="alert">-</div>

                    <div className="intro-x mt-8">
                        <input type="email"
                               name="email"
                               id="email"
                               className="intro-x login__input form-control py-3 px-4 border-gray-300 block"
                               placeholder="Email"
                               value={data.email}
                               onChange={(e) => setData('email', e.target.value)}>
                        </input>
                        <input type="password" name="clave" id="clave"
                               className="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                               placeholder="Password"
                               value={data.password}
                               onChange={(e) => setData('password', e.target.value)}>
                        </input>
                    </div>
                    <div className="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4">
                        <div className="flex items-center mr-auto">
                            <input id="remember-me" type="checkbox" className="form-check-input border mr-2"
                                   checked={data.remember}
                                   onChange={(e) => setData('remember', e.target.checked)}>
                            </input>
                            <label className="cursor-pointer select-none" htmlFor="remember-me">Recordarme</label>
                        </div>
                    </div>
                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                        <button type="submit"
                                className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </SesionLayout>
    );
}

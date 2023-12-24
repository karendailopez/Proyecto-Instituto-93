import '../../css/admin.css';
import {useEffect} from "react";

export default function SesionLayout({ user, children }) {
    useEffect(() => {
        document.body.classList.add('login');
    }, []);

    return (
        <div className="container sm:px-10">
            <div className="block xl:grid grid-cols-2 gap-4">
                <div className="hidden xl:flex flex-col min-h-screen">
                    <a href="" className="-intro-x flex items-center pt-5">
                        <img alt="Rubick Tailwind HTML Admin Template" className="w-12" src="/storage/images/logo.png"></img>
                        <span className="text-white text-lg ml-3"> Instituto 93 </span>
                    </a>
                    <div className="my-auto">
                        <img alt="Rubick Tailwind HTML Admin Template" className="-intro-x w-1/2 -mt-16" src="/storage/images/illustration.svg"></img>
                        <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                            <span className="d-block mt-3">Bienvenido a <br/> la comunidad del Instituto 93</span>
                        </div>
                        <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-gray-500">Inicia Sesión para ingresar a tu cuenta</div>
                    </div>
                </div>
                <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                    {children}
                </div>
            </div>
        </div>
    );
}

import AppIcon from "@/Components/Icons/AppIcon.jsx";
import {useEffect, useState } from "react";

export default function DropdownButton({ children }) {
    const [show, setShow] = useState(false);

    const onDocumentClick = ({ target }) => {
        if(!target.classList.contains('dd-menu')) {
            setShow(false);
        }
    }

    useEffect(() => {
         document.addEventListener('click', onDocumentClick);

        return () => {
            document.removeEventListener('click', onDocumentClick);
        }
    }, []);

    return <div className="dropdown dd-menu">
        <button className="dropdown-toggle btn px-2 box text-gray-700 dark:text-gray-300 dd-menu" onClick={ () => setShow(!show) }>
            <span className="w-5 h-5 flex items-center justify-center dd-menu">
                <AppIcon name="plus" className="w-4 h-4 dd-menu"/>
            </span>
        </button>
        <div className={`dropdown-menu w-40 ${ show ? 'show' : '' } dd-menu`} style={ show ? { width: '160px', position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(5px, 40px)' } : {} }>
            <div className="dropdown-menu__content box dark:bg-dark-1 p-2 dd-menu">
                {children}
            </div>
        </div>
    </div>;
}

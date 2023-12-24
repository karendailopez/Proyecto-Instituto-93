import AppIcon from "@/Components/Icons/AppIcon.jsx";
import { useState } from "react";
import {Link} from "@inertiajs/react";

export default function AppMobileMenuItem({title, url, icon, active, children}){
    const [open, setOpen] = useState(active);
    const onClick = function (event) {
        if(children) {
            event.preventDefault();
            setOpen(!open);
        }
    }

   return <li>
        <Link href={route(url)} className={`menu ${ route().current(url) ? 'menu--active' : '' }`} onClick={onClick}>
            <div className="menu__icon"><AppIcon name={icon}></AppIcon></div>
            <div className="menu__title">
                {title}
                {children && (
                    <div className={`menu__sub-icon ${open ? 'transform rotate-180' : ''}`}>
                        <AppIcon name="chevron-down"></AppIcon>
                    </div>
                )}
            </div>
        </Link>
        {children && (
            <ul className={open ? 'menu__sub-open' : ''}>
                {children}
            </ul>
        )}
    </li>;
}

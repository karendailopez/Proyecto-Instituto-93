import AppIcon from "@/Components/Icons/AppIcon.jsx";
import {useState} from "react";
import {Link} from "@inertiajs/react";

export default function AppMenuItem({title, url, icon, iconType, active, children}) {
    const [open, setOpen] = useState(active);

    const onClick = function (event) {
        if(children) {
            event.preventDefault();
            console.log(open);
            setOpen(!open);
        }
    }

    return <li>
        <Link href={route(url)} className={`side-menu ${ route().current(url) ? 'side-menu--active' : '' }`} onClick={onClick}>
            <div className="side-menu__icon"><AppIcon name={icon} type={iconType}></AppIcon></div>
            <div className="side-menu__title">
                {title}
                {children && (
                    <div className={`side-menu__sub-icon ${open ? 'transform rotate-180' : ''}`}>
                        <AppIcon name="chevron-down"></AppIcon>
                    </div>
                )}
            </div>
        </Link>
        {children && (
            <ul className={open ? 'side-menu__sub-open' : ''}>
                {children}
            </ul>
        )}
    </li>;
}

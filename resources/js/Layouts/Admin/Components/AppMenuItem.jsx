import AppIcon from "@/Components/Icons/AppIcon.jsx";
import {useState} from "react";

export default function AppMenuItem({title, url, icon, active, children}) {
    const [open, setOpen] = useState(active);

    const activeClass = active ? 'side-menu--active' : '';

    const onClick = function (event) {
        if(children) {
            event.preventDefault();
            console.log(open);
            setOpen(!open);
        }
    }

    return <li>
        <a href={route(url)} className={`side-menu ${activeClass}`} onClick={onClick}>
            <div className="side-menu__icon"><AppIcon name={icon}></AppIcon></div>
            <div className="side-menu__title">
                {title}
                {children && (
                    <div className={`side-menu__sub-icon ${open ? 'transform rotate-180' : ''}`}>
                        <AppIcon name="chevron-down"></AppIcon>
                    </div>
                )}
            </div>
        </a>
        {children && (
            <ul className={open ? 'side-menu__sub-open' : ''}>
                {children}
            </ul>
        )}
    </li>;
}

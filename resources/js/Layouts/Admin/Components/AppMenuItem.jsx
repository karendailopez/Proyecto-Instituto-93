import AppIcon from "@/Components/Icons/AppIcon.jsx";
import {useState} from "react";
import {Link} from "@inertiajs/react";

export default function AppMenuItem({title, url, icon, iconType, active, children}) {
    const [open, setOpen] = useState(active);

    const onClick = function (event) {
        if(children) {
            event.preventDefault();
            setOpen(!open);
        }
    }

    const content = <>
        <div className="side-menu__icon"><AppIcon name={icon} type={iconType}></AppIcon></div>
        <div className="side-menu__title">
            {title}
            {children && (
                <div className={`side-menu__sub-icon ${open ? 'transform rotate-180' : ''}`}>
                    <AppIcon name="chevron-down"></AppIcon>
                </div>
            )}
        </div>
    </>;

    return <li>
        {!children && (
            <Link href={route(url)} className={`side-menu ${(route().current(url) || active) ? 'side-menu--active' : ''}`}
                  onClick={onClick}>
                { content }
            </Link>
        )}

        {children && (<>
            <a href="#" className={`side-menu ${open ? 'side-menu--active' : ''}`} onClick={onClick}>
                { content }
            </a>
            <ul className={open ? 'side-menu__sub-open' : ''}>
                {children}
            </ul>
        </>)}
    </li>;
}

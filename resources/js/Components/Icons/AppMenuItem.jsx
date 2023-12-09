import AppIcon from "@/Components/Icons/AppIcon.jsx";

export default function AppMenuItem({title, icon}) {

    return <li>
        <a href="#.html" className="side-menu side-menu--active">
            <div className="side-menu__icon"><AppIcon name={icon}></AppIcon></div>
            <div className="side-menu__title">
                {title}
                <div className="side-menu__sub-icon transform rotate-180"><AppIcon name="chevron-down"></AppIcon>
                </div>
            </div>
        </a>
        <ul className="side-menu__sub-open">
            <li>
                <a href="index.html" className="side-menu side-menu--active">
                    <div className="side-menu__icon"><AppIcon name="activity"></AppIcon></div>
                    <div className="side-menu__title"> Overview 1</div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-dashboard-overview-2.html" className="side-menu">
                    <div className="side-menu__icon"><AppIcon name="activity"></AppIcon></div>
                    <div className="side-menu__title"> Overview 2</div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-dashboard-overview-3.html" className="side-menu">
                    <div className="side-menu__icon"><AppIcon name="activity"></AppIcon></div>
                    <div className="side-menu__title"> Overview 3</div>
                </a>
            </li>
        </ul>
    </li>;
}

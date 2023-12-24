import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import AppIcon from "@/Components/Icons/AppIcon.jsx";
import AppMobileMenuItem from "./AppMobileMenuItem.jsx";

export default function AppMobileMenu() {
    return <div className="mobile-menu md:hidden">
        <div className="mobile-menu-bar">
            <a href="" className="flex mr-auto">
                <ApplicationLogo height={30} width={30}></ApplicationLogo>
            </a>
            <a href="#" id="mobile-menu-toggler">
                <AppIcon name="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90"></AppIcon>
            </a>
        </div>
        <ul className="border-t border-theme-29 py-5 hidden">
            <AppMobileMenuItem icon="home" title="Dashboard" url="admin.dashboard.index" />
            <li className="menu__devider my-6"></li>
            <AppMobileMenuItem title="Usuarios" icon="users" url="admin.users.index"/>
        </ul>
    </div>;
}

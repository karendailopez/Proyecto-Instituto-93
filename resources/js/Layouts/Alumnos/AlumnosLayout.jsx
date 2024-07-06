import '../../../css/admin.css';
import AppMenu from "./Components/AppMenu";
import AppMobileMenu from "./Components/AppMobileMenu";
import TopBar from "./Components/TopBar";

export default function AlumnosLayout({ children, breadcrumb }) {
    return <>
        <AppMobileMenu></AppMobileMenu>
        <div className="flex">
            <AppMenu></AppMenu>
            <div className="content">
                <TopBar breadcrumb={ breadcrumb }></TopBar>

                {children}
            </div>
        </div>
    </>;
}

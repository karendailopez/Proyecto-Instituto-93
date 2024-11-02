import '../../../css/admin.css';
import AppMenu from "./Components/AppMenu";
import AppMobileMenu from "./Components/AppMobileMenu";
import TopBar from "./Components/TopBar";
import {useEffect} from "react";

export default function AlumnosLayout({ children, breadcrumb }) {
    useEffect(() => {
        document.body.classList.add('main');
        document.body.classList.remove('login');
        return () => {
            document.body.classList.remove('main');
        }
    }, []);
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

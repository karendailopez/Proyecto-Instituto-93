import '../../../css/admin.css';
import {useEffect} from "react";
import AppMobileMenu from "@/Components/Icons/AppMobileMenu.jsx";
import AppMenu from "@/Components/Icons/AppMenu.jsx";
import TopBar from "./Components/TopBar.jsx";

export default function Admin({ children }) {
    useEffect(() => {
        document.body.classList.add('main');
    }, []);

    return <>
        <AppMobileMenu></AppMobileMenu>
        <div className="flex">
            <AppMenu></AppMenu>
            <div className="content">
                <TopBar></TopBar>
                <div className="grid grid-cols-12 gap-6">
                    {children}
                </div>
            </div>
        </div>
    </>;
}

import '../../../css/admin.css';
import {useEffect, useState} from "react";
import AppMobileMenu from "./Components/AppMobileMenu.jsx";
import AppMenu from "./Components/AppMenu.jsx";
import TopBar from "./Components/TopBar.jsx";
import TopBarUserMenu from './Components/TopBarUserMenu';
import { TopBarNotificationMenu } from './Components/TopBarNotificationMenu';

export default function Admin({ children, breadcrumb }) {
    const [ showMenuUser, setShowMenuUser ] = useState(false);
    const [ showMenuNotification, setShowMenuNotification ] = useState(false);

    useEffect(() => {
        document.body.classList.add('main');

        return () => {
            document.body.classList.remove('main');
        }
    }, []);

    function onMenuOpen(menu) {
        if(menu === 'users') {
            setShowMenuUser( !showMenuUser );
        } else if(menu === 'notifications') {
            setShowMenuNotification( !showMenuNotification );
        }
    }

    return <>
        <AppMobileMenu></AppMobileMenu>
        <div className="flex">
            <AppMenu></AppMenu>
            <div className="content">
                <TopBar breadcrumb={ breadcrumb } onMenuOpen={ onMenuOpen }></TopBar>

                {children}
            </div>

            <TopBarNotificationMenu show={ showMenuNotification } setShow={ setShowMenuNotification }></TopBarNotificationMenu>
            <TopBarUserMenu show={ showMenuUser } setShow={ setShowMenuUser }></TopBarUserMenu>
        </div>
    </>;
}

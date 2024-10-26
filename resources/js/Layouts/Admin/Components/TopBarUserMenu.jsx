import AppIcon from "@/Components/Icons/AppIcon.jsx";
import { useContextMenu } from "@/Core/Hooks/useContextMenu";
import { router, usePage } from "@inertiajs/react";

export default function TopBarUserMenu({ show, setShow }) {

    const { style } = useContextMenu({
        show,
        setShow,
        menuWidth: 224,
        padding: 54,
        top: 71,
        classes: ['user-menu', 'user-btn']
     });

     const user = usePage().props.auth.user;

     function onLogoutClick(event) {
        event.preventDefault();

        router.post( route('logout') );
     }

    return <div className={`dropdown-menu user-menu w-56 ${ show === true ? 'show' : '' }`}  style={style} >
    <div className="dropdown-menu__content box bg-theme-26 dark:bg-dark-6 text-white">
        <div className="p-4 border-b border-theme-27 dark:border-dark-3">
            <div className="font-medium">{ user.name }</div>
            <div className="text-xs text-theme-28 mt-0.5 dark:text-gray-600">{ user.rol.descripcion }</div>
        </div>
        <div className="p-2">
            <a href=""
               className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                <AppIcon name="user" className="w-4 h-4 mr-2"></AppIcon> Profile </a>
            <a href=""
               className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                <AppIcon name="edit" className="w-4 h-4 mr-2"></AppIcon> Add Account </a>
            <a href=""
               className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                <AppIcon name="lock" className="w-4 h-4 mr-2"></AppIcon> Reset Password </a>
            <a href=""
               className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                <AppIcon name="help-circle" className="w-4 h-4 mr-2"></AppIcon> Help </a>
        </div>
        <div className="p-2 border-t border-theme-27 dark:border-dark-3">
            <a onClick={onLogoutClick} href=""
               className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                <AppIcon name="toggle-right" className="w-4 h-4 mr-2"></AppIcon> Logout </a>
        </div>
    </div>
</div>;
}

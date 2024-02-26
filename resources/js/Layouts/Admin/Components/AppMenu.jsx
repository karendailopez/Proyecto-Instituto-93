import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import AppMenuItem from "./AppMenuItem.jsx";

function checkCurrent(routes = []) {
    const currentRoute = route().current();

    const find = routes.find( value => currentRoute.includes(value) );

    return !!find;
}

export default function AppMenu() {
    return <nav className="side-nav">
        <a href="" className="intro-x flex items-center pl-5 pt-4">
            <ApplicationLogo height={30} width={30}></ApplicationLogo>
            <span className="hidden xl:block text-white text-lg ml-3"> Instituto 93 </span>
        </a>
        <div className="side-nav__devider my-6"></div>
        <ul>
            <AppMenuItem title="Dashboard" icon="home" url="admin.dashboard.index"/>
            <li className="side-nav__devider my-6"></li>
            <AppMenuItem title="Alumnos" icon="fa-graduation-cap" iconType="fa-solid" url="admin.alumnos.index" active={ checkCurrent(['admin.alumnos']) }/>

            <AppMenuItem title="Administración" icon="box" active={ checkCurrent(['admin.carreras', 'admin.users']) }>
                <AppMenuItem title="Carreras" icon="fa-graduation-cap" iconType="fa-solid" url="admin.carreras.index" active={ checkCurrent(['admin.carreras']) }/>
                <AppMenuItem title="Usuarios" icon="users" url="admin.users.index" active={ checkCurrent(['admin.users']) } />
            </AppMenuItem>
        </ul>
    </nav>;
}

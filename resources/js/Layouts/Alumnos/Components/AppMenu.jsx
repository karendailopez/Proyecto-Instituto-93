import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import AppMenuItem from "../../Admin/Components/AppMenuItem";

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
            <AppMenuItem title="Dashboard" icon="home" url="alumnos.dashboard.index"/>
            <AppMenuItem title="Mesas" icon="fa-school" iconType="fa-solid" url="alumnos.mesas.index" active={checkCurrent(['alumno.mesas'])}/>
        </ul>
    </nav>;
}

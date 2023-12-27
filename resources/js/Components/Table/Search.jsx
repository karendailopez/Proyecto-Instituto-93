import AppIcon from "@/Components/Icons/AppIcon.jsx";
import {router, usePage} from "@inertiajs/react";
import {useState} from "react";

export default function Search({ path }) {
    const { props } = usePage();

    const [ search, setSearch ] = useState( props.search ?? '' );

    const onBuscarKeyPress = ({keyCode}) => {
        if(keyCode === 13) {
            router.visit( `${path}?search=${search}`);
        }
    }

    return <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
        <div className="w-56 relative text-gray-700 dark:text-gray-300">
            <input type="text"
                   className="form-control w-56 box pr-10 placeholder-theme-13"
                   placeholder="Buscar..."
                   value={ search }
                   onChange={ ({target}) => setSearch(target.value) }
                   onKeyUp={onBuscarKeyPress} />
            <AppIcon name="search" className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"/>
        </div>
    </div>;
}

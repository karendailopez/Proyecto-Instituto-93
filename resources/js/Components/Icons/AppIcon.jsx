import icons from './icons.json';
import {createRef, useEffect} from "react";

export default function AppIcon({name, className, type = null}) {
    const svgRef = createRef();
    const faClases = ['fas', 'far', 'fab', 'fa-solid', 'fa-regular', 'fa-brand'];


    useEffect(() => {
        if (svgRef.current) {
            svgRef.current.innerHTML = icons[name];
        }
    }, [name]);

    if(type && faClases.find((x) => x === type)) {
        return <i className={`${ type } ${name} ${className}`}></i>
    }

    return <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className={`feather feather-${name} ${className}`}>
    </svg>;
}

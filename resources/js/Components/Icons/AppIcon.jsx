import icons from './icons.json';
import {createRef, useEffect} from "react";

export default function AppIcon({name, className}) {
    const svgRef = createRef();

    useEffect(() => {
        if (svgRef.current) {
            svgRef.current.innerHTML = icons[name];
        }
    }, [name]);

    return <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className={`feather feather-${name} ${className}`}>
    </svg>;
}

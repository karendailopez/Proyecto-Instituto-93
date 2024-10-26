import { useState, useEffect } from "react";
import { hasParentClass } from "../functions";

export function useContextMenu({ show, setShow, menuWidth, padding, top, classes }) {
    const [ style, setStyle ] = useState({});
    const [ width, setWidth ] = useState( document.body.clientWidth );

    function onDocumentClick({ target }) {
        if(!hasParentClass(classes, target)) {
            setShow( false );
        }
    }

    function onWindowResize() {
        const value = document.body.clientWidth;
        setWidth( value );

        if(show === true) {
            setStyle({
                width: `${ menuWidth }px`,
                position: 'absolute',
                inset: '0px auto auto 0px',
                margin: '0px',
                transform: `translate(${ value - menuWidth - padding }px, ${top}px)`
            });
        }
    }

    useEffect(() => {
        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    useEffect(() => {
        if(show === true) {
            setStyle({
                width: `${ menuWidth }px`,
                position: 'absolute',
                inset: '0px auto auto 0px',
                margin: '0px',
                transform: `translate(${ width - menuWidth - padding }px, ${top}px)`
            });

            document.addEventListener('click', onDocumentClick);
        } else {
            document.removeEventListener('click', onDocumentClick);
        }
    }, [show]);

    return { style };
}

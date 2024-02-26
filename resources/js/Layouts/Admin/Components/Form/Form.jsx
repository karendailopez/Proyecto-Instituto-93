import AppIcon from "@/Components/Icons/AppIcon.jsx";
import {Link} from "@inertiajs/react";

export  default function Form( { children, procesing, onSubmit, onReset, backHref, showButtons = true } ) {
    return <form className={`intro-y ${ showButtons === true ? 'box' : '' } p-5`} onSubmit={onSubmit} >
        {children}

        { showButtons === true && <div className="text-right mt-5">
            {backHref && <Link href={ backHref } className="btn btn-secondary w-25 mr-1 p-3">
                <AppIcon name="corner-down-left" className="w-5 h-5 mr-2"></AppIcon>
                Volver
            </Link>}

            <button type="button" className="btn btn-outline-secondary w-25 mr-1 p-3" onClick={onReset}>
                <AppIcon name="refresh-cw" className="w-5 h-5 mr-2"></AppIcon>
                Limpiar
            </button>
            <button type="submit" className="btn btn-primary p-3 w-25" disabled={procesing}>
                {procesing && <AppIcon name="tail-spin" size={38} className="w-5 h-5 mr-2"></AppIcon>}
                {!procesing && <AppIcon name="save" className="w-5 h-5 mr-2"></AppIcon>}
                Guardar
            </button>
        </div> }
    </form>;
}

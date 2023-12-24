import AppIcon from "@/Components/Icons/AppIcon.jsx";

export  default function Form( { children, procesing, onSubmit, onReset } ) {

    return <form className="intro-y box p-5" onSubmit={onSubmit} >
        {children}

        <div className="text-right mt-5">
            <button type="button" className="btn btn-outline-secondary w-24 mr-1" onClick={onReset}>Limpiar</button>
            <button type="submit" className="btn btn-primary w-24" disabled={procesing}>
                {procesing && <AppIcon name="refresh-cw" className="mr-2"></AppIcon>}
                Guardar
            </button>
        </div>
    </form>
;
}

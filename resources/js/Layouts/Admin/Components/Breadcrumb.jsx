import {Link} from "@inertiajs/react";
import AppIcon from "@/Components/Icons/AppIcon.jsx";

export default function Breadcrumb({breadcrumb}) {
    return <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
        <Link href={route('admin.dashboard.index')}>
            Dashboard
        </Link>

        {breadcrumb && <>
            <AppIcon name="chevron-right" className="breadcrumb__icon"></AppIcon>

            {breadcrumb.map((x, index) => <div key={index}>
                <Link href={x.href} className={index === (breadcrumb.length - 1) ? 'breadcrumb--active' : ''}>
                    {x.label}
                </Link>

                {index < (breadcrumb.length - 1) && <AppIcon name="chevron-right" className="breadcrumb__icon"></AppIcon>}
             </div>)}
        </>}
    </div>
}

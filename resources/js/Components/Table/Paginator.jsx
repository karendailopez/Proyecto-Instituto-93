import AppIcon from "@/Components/Icons/AppIcon.jsx";
import {Link, router, usePage} from "@inertiajs/react";
import {getUrlPaginate} from "@/Core/functions.js";
import PaginatorCount from "@/Components/Table/PaginatorCount.jsx";

export default function Paginator({ paginator }) {
    const { props } = usePage();

    return <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
        <ul className="pagination">
            <li>
                <Link href={ getUrlPaginate(paginator.first_page_url, props, paginator.per_page) } className="pagination__link">
                    <AppIcon name="chevrons-left" className="w-4 h-4"></AppIcon>
                </Link>
            </li>

            { paginator.links.map((x, index) => <li key={index}>
                <Link className={`pagination__link ${ x.active ? 'pagination__link--active' : '' }`} href={ getUrlPaginate(x.url, props, paginator.per_page) }>
                    { x.label === '&laquo; Previous' ? <AppIcon name="chevron-left" className="w-4 h-4"></AppIcon> :
                      x.label === 'Next &raquo;' ? <AppIcon name="chevron-right" className="w-4 h-4"></AppIcon> :
                      x.label }
                </Link>
            </li>)}

            <li>
                <Link href={getUrlPaginate(paginator.last_page_url, props, paginator.per_page)} className="pagination__link">
                    <AppIcon name="chevrons-right" className="w-4 h-4"></AppIcon>
                </Link>
            </li>
        </ul>

        <PaginatorCount path={paginator.path} per_page={paginator.per_page}></PaginatorCount>
    </div>;
}

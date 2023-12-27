import {router, usePage} from "@inertiajs/react";
import {getUrlPaginate} from "@/Core/functions.js";

export default function PaginatorCount({path, per_page}) {
    const { props } = usePage();

    const onCountChange = ({ target }) => {
        router.visit(getUrlPaginate(path, props, target.value));
    }

    return <select className="w-20 form-select box mt-3 sm:mt-0" value={per_page} onChange={onCountChange}>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={25}>25</option>
        <option value={35}>35</option>
        <option value={50}>50</option>
    </select>;
}

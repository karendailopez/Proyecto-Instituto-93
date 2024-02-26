import {Link, usePage} from "@inertiajs/react";
import {getUrlPaginate} from "@/Core/functions.js";
import AppIcon from "@/Components/Icons/AppIcon.jsx";

export default function TableHead({ head, options, hasAction }) {
    const { props } = usePage();
    const { path, per_page } = options;

    const headHtml = head.map((x, i) => (<th className={`${x.className} whitespace-nowrap`} key={i}>
        <Link href={ getUrlPaginate(path, props, per_page, x.value )} className="block relative w-full h-full">
            {x.label}

            { props.order === x.value &&
                <AppIcon name="triangle"
                         className={`w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0 ${ props.direction === 'desc' ? 'rotate-180' : '' }`}>
                </AppIcon>
            }
        </Link>
    </th>));

    return <thead>
        <tr>
            {headHtml}
            {hasAction && <th className={`whitespace-nowrap`}>Acción</th>}
        </tr>
    </thead>;
}

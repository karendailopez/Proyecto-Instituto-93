import Paginator from "@/Components/Table/Paginator.jsx";

function getData(head, item) {
    const p = head.value.split('.');
    let value = null;

    if(p.length > 0) {
        let actual = item;

        for(let i in p) {
            let key = p[i];

            if(i < (p.length - 1 )) {
                actual = actual[key];
            } else {
                if(actual && actual.hasOwnProperty(key)) {
                    value = actual[key];
                } else {
                    value = '';
                }
            }
        }
    }

    if(head?.render) {
        return head.render(value);
    }

    return value;
}

export default function Table({ head, rows }) {

    const headHtml = head.map((x, i) => (<th className={`${x.className} whitespace-nowrap`} key={i}>{x.label}</th>));

    const rowsHtml = rows?.length > 0 ? rows?.map( (x) => (<tr className="intro-x" key={x.id}>
        {head.map( (y) => (<td key={y.value}><div className={y.classData}> {getData(y, x)} </div></td>))}
        <td></td>
    </tr>)) : (<tr><td colSpan={ head.length + 1 } className="text-center">No hay registros</td></tr>);
    return <>
        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
            <table className="table table-report -mt-2">
                <thead>
                    <tr>
                        {headHtml}
                        <th className={`whitespace-nowrap`}>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {rowsHtml}
                </tbody>
            </table>
        </div>

        <Paginator></Paginator>
    </>;
}

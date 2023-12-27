
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
export default function TableBody({ data, head }) {
    const rowsHtml = data?.length > 0 ? data?.map( (x) => (<tr className="intro-x" key={x.id}>
        {head.map( (y) => (<td key={y.value}><div className={y.classData}> {getData(y, x)} </div></td>))}
        <td></td>
    </tr>)) : (<tr><td colSpan={ head.length + 1 } className="text-center">No hay registros</td></tr>);

    return <tbody>
    {rowsHtml}
    </tbody>
}

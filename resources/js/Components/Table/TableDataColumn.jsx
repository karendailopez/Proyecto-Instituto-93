import AppIcon from "@/Components/Icons/AppIcon.jsx";

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

function getColumn(column, data) {
    if(column instanceof Function) {
        return column(data);
    }

    return column ?? '';
}

export default function TableDataColumn({data, head}) {
    return head.map((y) => (<td key={y.value}>
        <div className={ getColumn( y.className, data ) }>
            {y.icon && <AppIcon name={ getColumn( y.icon, data ) } className={ y.iconClass }></AppIcon>}
            {getData(y, data)}
        </div>
    </td>));
}

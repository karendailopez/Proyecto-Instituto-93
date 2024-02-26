import AppIcon from "@/Components/Icons/AppIcon.jsx";

function onClickAction(event, action, data) {
    event.preventDefault();

    action.action( data );
}

function getData(column, data) {
    if(column instanceof Function) {
        return column(data);
    }

    return column ?? '';
}

function getCondition(condition, data) {
    if(condition instanceof Function) {
        return condition(data);
    }

    if(condition instanceof Boolean) {
        return condition;
    }

    return true;
}

export default function TableActionColumn({actions, data}) {
    return <td className="table-report__action">
        <div className="flex justify-center items-center">
            {actions.map((x, i) => <div key={i} >
                { getCondition( x.condition, data ) && <a href="#" className={'flex items-center mr-3 ' + getData(x.className, data)}
                       onClick={() => onClickAction(event, x, data)}>
                        {x.icon && <AppIcon name={getData(x.icon, data)} className={x.iconClass}></AppIcon>}
                        {getData(x.label, data)}
                    </a>
                }
                </div>
            )}
        </div>
    </td>;
}

export default function FormSelectItem({ item, active, onSelect }) {
    function onClick() {
        if(onSelect instanceof Function) {
            onSelect( item )
        }
    }

    return <div onClick={ onClick } data-selectable className={`option ${ active ? 'active' : '' }`}>
        { item.label }
    </div>
}

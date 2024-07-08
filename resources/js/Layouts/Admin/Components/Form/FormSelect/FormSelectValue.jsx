export default function FormSelectValue({ item, index, showClose, onClose }) {
    function onClick(event) {
        event.preventDefault();

        if(onClose instanceof Function) {
            onClose( item, index );
        }
    }

    return <div className={`item ${ item.value === null ? 'text-gray-600 bg-white' : '' }`}>
        {item.label}
        {showClose && <a onClick={ onClick } href="#" className="remove" tabIndex="-1" title="Quita este item">×</a>}
    </div>
}

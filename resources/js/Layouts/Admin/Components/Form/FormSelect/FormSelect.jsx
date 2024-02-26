import FormLabel from "@/Layouts/Admin/Components/Form/FormLabel.jsx";
import {useEffect, useRef, useState} from "react";
import FormSelectItem from "./FormSelectItem.jsx";

export default function FormSelect({name, label, items, value, placeholder, onChange, errors}) {
    const select = useRef(null);

    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (select.current && !select.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [ select ]);

    return <div ref={ select }>
        <FormLabel name={name} label={label}></FormLabel>

        <div className="ts-control tom-select w-full multi plugin-remove_button" tabIndex="0">
            <div onClick={() => setIsOpen(!isOpen)} className="items ts-input not-full has-items">
                <div data-value="1" className="item">Sport &amp; Outdoor
                    <a href="#" className="remove" tabIndex="-1" title="Remove this item">×</a>
                </div>
                <div data-value="3" className="item">Smartphone &amp; Tablet
                    <a href="#" className="remove" tabIndex="-1" title="Remove this item">×</a></div>
            </div>
            <div className="ts-dropdown multi tom-select w-full plugin-dropdown_input plugin-remove_button"
                 style={{display: isOpen ? 'block' : 'none' }}>
                <div className="dropdown-input-wrap">
                    <input type="select-multiple"
                           autoComplete="off"
                           className="dropdown-input"
                           placeholder="Select your favorite actors" />
                </div>
                <div className="ts-dropdown-content">
                    { items.map((x, index) => <FormSelectItem item={ x } key={ x.value } active={ index === 0 }></FormSelectItem> ) }
                </div>
            </div>
        </div>

        {(errors && Object.hasOwn(errors, name)) &&
            <div className="pristine-error text-primary-3 mt-2">{errors[name]}</div>}
    </div>;
}

import FormLabel from "@/Layouts/Admin/Components/Form/FormLabel.jsx";
import {useEffect, useRef, useState} from "react";
import FormSelectItem from "./FormSelectItem.jsx";
import FormSelectValue from "./FormSelectValue.jsx";

function getValue( items, value, multiple ) {
    if(multiple === true) {
        if(!value) {
            return [];
        }

        return items.filter((x) => value.includes( x.value )) ?? [];
    } else {
        return items.find((x) => x.value === value);
    }
}

export default function FormSelect({name, label, items, value, multiple, placeholder, onChange, errors}) {
    const selectRef = useRef(null);
    const searchRef = useRef(null);

    const [ isOpen, setIsOpen ] = useState(false);
    const [ selectedItem, setSelectedItem ] = useState( getValue( items, value, multiple ) );
    const [ selectedIndex, setSelectedIndex ] = useState( 0 );
    const [ filteredItems, setFilteredItems ] = useState( items );
    const [ searchValue, setSearchValue ] = useState( '' );
    const [ isClicked, setIsClicked ] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
                onSearchChange({ target: { value: '' } });
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setSelectedItem(getValue( items, value, multiple ));
    }, [ value ]);

    useEffect(() => {
        setFilteredItems(items);
        setSelectedIndex(0);
        setSelectedItem(getValue( items, value, multiple ));
        setSearchValue('' );
    }, [items]);

    function onMouseEvent(event) {
        if(event.target.className === 'remove') {
            return;
        }

        if(event.type === 'mousedown') {
            setIsClicked(true);
        } else {
            setIsOpen(!isOpen);

            setTimeout(() => {
                searchRef.current.focus();
            }, 10);

            setIsClicked(false);
        }
    }

    function onSelectItem(item, index) {
        setIsOpen(false);

        if(multiple === true) {
            const multiValue = item.unique === true ? [ item ] : [ ...selectedItem, item ];

            setSelectedItem( multiValue );

            onChange( { target: { id: name ?? label, value: multiValue.map((x) => x.value) } } );

            setSelectedIndex( 0 );
        } else {
            setSelectedItem( item );

            onChange( { target: { id: name ?? label, value: item.value } } );

            setSelectedIndex( index );
        }

        onSearchChange({ target: { value: '' } });
    }

    function onSearchChange({ target }) {
        setSearchValue(target.value);
        let filtered = [];

        if (target.value === '') {
            filtered = items;
        } else {
            filtered = items.filter((x) => x.label.toLowerCase().includes(target.value.toLowerCase()));
        }

        setFilteredItems(filtered);

        if(filtered.length > 0) {
            let index = !selectedItem ? 0 : filtered
                .map((x) => x.value.toString())
                .indexOf(selectedItem.value?.toString());

            if(index < 0) {
                index = 0;
            }

            setSelectedIndex( index );
        }
    }

    function onSearchKeyUp({ code }) {
        if(code === 'ArrowDown' || code === 'ArrowUp'){
            if(code === 'ArrowDown') {
                if(selectedIndex < (filteredItems.length - 1)) {
                    setSelectedIndex( selectedIndex + 1 );
                }
            } else {
                if(selectedIndex > 0) {
                    setSelectedIndex(selectedIndex - 1);
                }
            }
        } else if(code === 'Enter') {
            const item = filteredItems[ selectedIndex ];

            if(item) {
                setSelectedItem( item );
                onChange( { target: { id: name ?? label, value: item.value } } );
                setIsOpen( false );
            }
        }
    }

    function onSelectFocus(event) {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            if(!isClicked) {
                setIsOpen(true);
                if(!isOpen && event.relatedTarget !== searchRef.current) {
                    setTimeout(() => {
                        searchRef.current.focus();
                    }, 10);
                }
            }
        }
    }

    function onSelectBlur(event) {
        if(!isClicked && event.relatedTarget) {
            setIsOpen( false );
        }
    }

    function onCloseItem(item, index) {
        const multiValue = [ ...selectedItem ];

        multiValue.splice( index, 1 );

        setSelectedItem( multiValue );

        onChange( { target: { id: name ?? label, value: multiValue.map((x) => x.value) } } );

        setSelectedIndex( 0 );
    }

    function canShowItem(item) {
        if(!multiple || multiple === false) {
            return true;
        }

        if(selectedItem.find((si) => si.unique === true)) {
            return false;
        }

        return !selectedItem.find((si) => si.value === item.value);

    }

    return <div ref={ selectRef }>
        <FormLabel name={name} label={label}></FormLabel>

        <div onMouseDown={ onMouseEvent } onMouseUp={ onMouseEvent } onFocus={ onSelectFocus }
             className={`ts-control tom-select w-full ${multiple ? 'multi plugin-remove_button' : 'single plugin-dropdown_input'}`} tabIndex="0">
            <div
                 className={`items ts-input not-full has-items ${ isOpen ? 'focus input-active dropdown-active' : '' }`}>
                { multiple === true && selectedItem && selectedItem.map((x, i) => <FormSelectValue key={ 'si-' + x.value } onClose={ onCloseItem } item={ x } index={ i } showClose={ true } ></FormSelectValue> ) }
                { !multiple && selectedItem && <FormSelectValue item={ selectedItem } ></FormSelectValue> }
                { (!selectedItem || (multiple === true && selectedItem.length === 0 ) ) && <FormSelectValue item={{ value: null, label: placeholder ?? `Seleccione ${ label }` }} ></FormSelectValue> }
            </div>
            <div className="ts-dropdown multi tom-select w-full plugin-dropdown_input plugin-remove_button"
                 style={{display: isOpen ? 'block' : 'none' }}>
                <div className="dropdown-input-wrap">
                    <input ref={ searchRef }
                           onChange={ onSearchChange }
                           onKeyUp={ onSearchKeyUp }
                           onFocus={ (event) => event.stopPropagation() }
                           onBlur={ onSelectBlur }
                           value={ searchValue }
                           type="select-multiple"
                           autoComplete="off"
                           className="dropdown-input"
                           placeholder={ placeholder ?? `Seleccione ${ label }` } />
                </div>
                <div className="ts-dropdown-content">
                    { filteredItems.map((x, index) => <div key={ 'item-' + x.value  }>
                        { canShowItem(x) && <FormSelectItem
                            item={ x }
                            active={ selectedIndex === index }
                            onSelect={ (item) => onSelectItem(item, index) }>
                        </FormSelectItem>}
                    </div>)}
                </div>
            </div>
        </div>

        {(errors && Object.hasOwn(errors, name)) &&
            <div className="pristine-error text-primary-3 mt-2">{errors[name]}</div>}
    </div>;
}

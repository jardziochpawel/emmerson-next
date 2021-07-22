import React, {useEffect, useState} from 'react';
import { SelectInput } from "../components";

export default function SelectInputContainer({ label, value, onChange, options, name, ...restProps }) {
    const [toSearch, setToSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    let valueFromClient = '';

    const selectRef =  React.createRef();

    useEffect(() => {
            function loading() {
                 valueFromClient = value.label
            }

            loading();
        },[]
    );

    const toggling = () => {

        setIsOpen(!isOpen);

        if(!isOpen){
            selectRef.current.focus();
        }
        else{
            selectRef.current.blur();
        }
    };

    const handleChange = (item) => {
        setToSearch(item);
    }

    let optionsFilter = options.filter(e => e.label.toLowerCase().includes(toSearch.toLowerCase()));
    console.log(value.label);
    return (
        <>
            <SelectInput {...restProps}>
                <SelectInput.Label>{label}</SelectInput.Label>
                <SelectInput.Header name={name}
                                    selectRef={selectRef}
                                    isOpen={isOpen}
                                    onClick={toggling}
                                    hiddenValue={value}
                                    value={toSearch}
                                    onChange={handleChange}
                                    onBlur={ ()  =>  setTimeout(() => {
                                        setIsOpen(false);
                                    }, 200) }
                >
                    { value.label }
                </SelectInput.Header>
                <SelectInput.ListContainer isOpen={isOpen}>
                    <SelectInput.List>
                        {optionsFilter.map(item =>
                            <SelectInput.ListItem isActive={item === value} key={item.value} onClick={()=> {
                                onChange(item)
                                setToSearch('');
                                toggling();
                            }}>
                                {item.label}
                            </SelectInput.ListItem>
                        )}
                    </SelectInput.List>
                </SelectInput.ListContainer>
            </SelectInput>
        </>
    );
}
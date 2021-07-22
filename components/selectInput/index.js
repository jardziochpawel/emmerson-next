import React from 'react';
import {
    Container,
    Input,
    InputHidden,
    InputGroup,
    ListContainer,
    List,
    ListItem,
    Label,
    Anchor
} from './styles/selectInput';

export default function SelectInput({children, ...restProps}){
    return(<Container {...restProps}>{children}</Container>);
}

SelectInput.Header = function SelectInputHeader({children, name, selectRef, isOpen, value, onChange, hiddenValue, setHiddenValue, ...restProps}){

    return(
        <InputGroup {...restProps}>
            <Input type='text'
                   name={'search-'+name}
                   placeholder={children}
                   value={value}
                   onChange={({target})=>onChange(target.value)}
                   ref={selectRef}
                   />
            <InputHidden type='hidden' name={name} value={hiddenValue} />
            <InputAnchor isOpen={isOpen} />
        </InputGroup>
    );
}

SelectInput.Label = function SelectInputLabel({children, ...restProps}){
    return(<Label {...restProps}>{children}</Label>);
}

SelectInput.ListContainer = function SelectInputListContainer({children, ...restProps}){
    return(<ListContainer {...restProps}>{children}</ListContainer>);
}

SelectInput.List = function SelectInputList({children, ...restProps}){
    return(<List {...restProps}>{children}</List>);
}

SelectInput.ListItem = function SelectInputListItem({children,  ...restProps}){
    return(<ListItem {...restProps}>{children}</ListItem>);
}

const InputAnchor = function InputAnchor({...restProps}){
    return(
        <Anchor {...restProps} >
            <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="anchor">
                <path
                    d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"/>
            </svg>
        </Anchor>
    )
}
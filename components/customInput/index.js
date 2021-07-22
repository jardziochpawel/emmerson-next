import { Container, InputGroup, Input, Label } from "./styles/customInput";

export default function CustomInput({ children, ...restProps}){

    return(
        <Container {...restProps}>{ children }</Container>
    );
}

CustomInput.InputGroup = function CustomInputInputGroup({ children, ...restProps}){

    return(
        <InputGroup {...restProps}>{ children }</InputGroup>
    );
}

CustomInput.Input = function CustomInputInput({ ...restProps}){

    return(
        <Input {...restProps} />
    );
}

CustomInput.Label = function CustomInputLabel({ children, ...restProps}){

    return(
        <Label {...restProps}>{ children }</Label>
    );
}
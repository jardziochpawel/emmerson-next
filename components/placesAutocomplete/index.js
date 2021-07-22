
import {
    Container,
    DropDownContainer,
    DropDownItem,
    DropDownText,
    InputGroup,
    Input,
    Label,
    Loading,
    LastSearchContainer,
    LastSearchItem,
    TitleDropdown
} from "./styles/placesAutocomplete";

export default function PlaceAutocomplete({children, ...restProps}){

    return(
        <Container {...restProps}>{children}</Container>
    );
}

PlaceAutocomplete.Input = function PlaceAutocompleteInput({ selfRef, ...restProps }){

    return(<Input ref={selfRef} {...restProps} />);
}

PlaceAutocomplete.InputGroup = function PlaceAutocompleteInputGroup({children, ...restProps}){

    return(
        <InputGroup {...restProps}>{children}</InputGroup>
    );
}

PlaceAutocomplete.DropDownContainer = function PlaceAutocompleteDropDownContainer({children, ...restProps}){

    return(
        <DropDownContainer {...restProps}>{children}</DropDownContainer>
    );
}

PlaceAutocomplete.DropDownItem = function PlaceAutocompleteDropDownItem({children, ...restProps}){

    return(
        <DropDownItem {...restProps}>{children}</DropDownItem>
    );
}

PlaceAutocomplete.DropDownText = function PlaceAutocompleteDropDownText({children, ...restProps}){

    return(
        <DropDownText {...restProps}>{children}</DropDownText>
    );
}

PlaceAutocomplete.Loading = function PlaceAutocompleteLoading({children, ...restProps}){

    return(
        <Loading {...restProps}>{children}</Loading>
    );
}

PlaceAutocomplete.Label = function PlaceAutocompleteLabel({children, ...restProps}){

    return(
        <Label {...restProps}>{children}</Label>
    );
}

PlaceAutocomplete.LastSearchContainer = function PlaceAutocompleteLastSearchContainer({children, ...restProps}){
    return(
        <LastSearchContainer {...restProps}>{children}</LastSearchContainer>
    )
}

PlaceAutocomplete.LastSearchItem = function PlaceAutocompleteLastSearchItem({children, ...restProps}){

    return(
        <LastSearchItem {...restProps}>{children}</LastSearchItem>
    );
}

PlaceAutocomplete.TitleDropdown = function PlaceAutocompleteTitleDropdown({children, ...restProps}){

    return(
        <TitleDropdown {...restProps}>{children}</TitleDropdown>
    );
}
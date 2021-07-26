import { Column, Container, List, ListItem, Name, Value } from "./styles/oferDetails";

export default function OfferDetails({children, ...restProps}){

    return(
        <Container {...restProps}>{children}</Container>
    )
}

OfferDetails.Column = function ODColumn({children, ...restProps}){

    return(
        <Column {...restProps}>{children}</Column>
    )
}

OfferDetails.List = function ODList({children, ...restProps}){

    return(
        <List {...restProps}>{children}</List>
    )
}

OfferDetails.Item = function ODItem({children, ...restProps}){

    return(
        <ListItem {...restProps}>{children}</ListItem>
    )
}

OfferDetails.Name = function ODName({children, ...restProps}){

    return(
        <Name {...restProps}>{children}</Name>
    )
}

OfferDetails.Value = function ODValue({children, ...restProps}){

    return(
        <Value {...restProps}>{children}</Value>
    )
}
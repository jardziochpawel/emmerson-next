import {Column, Container, List, ListItem, Name, Title, Value} from "./styles/oferDetails";

export default function OfferDetails({children, ...restProps}){

    return(
        <Container {...restProps}>{children}</Container>
    )
}

OfferDetails.Title = function ODTitle({children, ...restProps}){

    return(
        <Title {...restProps}>{children}</Title>
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
        <Name title={children} {...restProps}>{children}</Name>
    )
}

OfferDetails.Value = function ODValue({children, ...restProps}){

    return(
        <Value title={children} {...restProps}>{children}</Value>
    )
}
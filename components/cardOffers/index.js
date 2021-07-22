import {
    CardBody,
    CardContainer,
    CardImage,
    CardLocalisation,
    CardLocalisationIcon,
    CardTitle,
    Container,
    CardListContainer,
    CardListItem,
    ListParam,
    ListValue,
    CardPrice,
    CardText, Mask, ImageContainer
} from "./styles/cardOffers";

export default function CardOffers({children, ...restProps}){

    return(
        <Container {...restProps}>{children}</Container>
    );
}

CardOffers.Container = function CardOffersContainer({children, ...restProps}){

    return(
        <CardContainer {...restProps}>{children}</CardContainer>
    );
}

CardOffers.Image = function CardOffersImage({image, ...restProps}){

    return(
        <ImageContainer>
            <Mask><span {...restProps}>Zobacz</span></Mask>
            <CardImage src={image} wrapperClassName='card-image' lazyLoad isResponsive />
        </ImageContainer>
    );
}

CardOffers.Body = function CardOffersBody({children, ...restProps}){

    return(
        <CardBody {...restProps}>{children}</CardBody>
    );
}

CardOffers.Title = function CardOffersTitle({children, ...restProps}){

    return(
        <CardTitle {...restProps}>{children}</CardTitle>
    );
}

CardOffers.Localisation = function CardOffersLocalisation({children, ...restProps}){

    return(
        <CardLocalisation {...restProps}>{children}</CardLocalisation>
    );
}

CardOffers.LocalisationIcon = function CardOffersLocalisationIcon({ ...restProps }){

    return(
        <CardLocalisationIcon {...restProps}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 384 512">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
            </svg>
        </CardLocalisationIcon>
    );
}

CardOffers.ListContainer = function CardOffersListContainer({children, ...restProps}){

    return(
        <CardListContainer {...restProps}>{children}</CardListContainer>
    );
}

CardOffers.ListItem = function CardOffersListItem({children, ...restProps}){

    return(
        <CardListItem {...restProps}>{children}</CardListItem>
    );
}

CardOffers.ListParam = function CardOffersListParam({children, ...restProps}){

    return(
        <ListParam {...restProps}>{children}</ListParam>
    );
}

CardOffers.ListValue = function CardOffersListValue({children, ...restProps}){

    return(
        <ListValue {...restProps}>{children}</ListValue>
    );
}

CardOffers.CardText = function CardOffersCardText({children, ...restProps}){

    return(
        <CardText {...restProps}>{children}</CardText>
    );
}

CardOffers.CardPrice = function CardOffersCardPrice({children, ...restProps}){

    return(
        <CardPrice {...restProps}>{children}</CardPrice>
    );
}



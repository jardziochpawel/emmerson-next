
import {
    Container,
    CardContainer,
    Title,
    CardImage,
    Price,
    Localisation,
    CardText,
    CardBody, OfferCount, CardBoxImage, Text, LocationIcon, CardHeader
} from "./style/offers";

export default function Offers({children, restProps}){
    return <Container {...restProps}>{children}</Container>
}

Offers.CardContainer = function OffersCardContainer({ children, restProps }){

    return <CardContainer {...restProps}>{children}</CardContainer>
}

Offers.CardBody = function OffersCardBody({ children, restProps }){

    return <CardBody {...restProps}>{children}</CardBody>
}

Offers.Title = function OffersTitle ({ children, onClick, restProps }){

    return <Title onClick={onClick} {...restProps}>{children}</Title>
}

Offers.Localisation = function OffersLocalisation({ children, onClick, restProps }){

    return <Localisation onClick={onClick} {...restProps}>{children}</Localisation>
}

Offers.CardHeader = function OffersCardHeader({ children, restProps }){

    return <CardHeader {...restProps}>{children}</CardHeader>
}

Offers.LocationIcon = function OffersLocationIcon({ restProps }){

    return <LocationIcon {...restProps} />
}

Offers.CardImage = function OffersCardImage({imageJpeg, imageWebp, webp,  onClick, restProps }){

    return (
        <CardBoxImage onClick={onClick}>
            <CardImage image={webp? imageWebp : imageJpeg} {...restProps} />
        </CardBoxImage>
    )
}

Offers.Price = function OffersPrice({ children, restProps }){

    return <Price {...restProps}>{children}</Price>
}

Offers.CardText = function OffersCardText({ children, restProps }){

    return <CardText {...restProps}>{children}</CardText>
}

Offers.Text = function OffersText({ children, restProps }){

    return <Text {...restProps}>{children}</Text>
}

Offers.OfferCount = function OffersOfferCount({ children, restProps }){

    return <OfferCount {...restProps}>{children}</OfferCount>
}
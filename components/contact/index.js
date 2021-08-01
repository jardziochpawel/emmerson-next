import {
    Container,
    CardContainer,
    CardBody,
    CardHeader,
    Address,
    Title,
    LocationIcon,
    MapContainer,
    LinkButton, List, ListItem, SubTitle, TextBold, ShowOnMap
} from "./styles/contact";

export default function Contact({children, ...restProps}){

    return(<Container {...restProps}>{children}</Container>);
}

Contact.Card = function ContactCardContainer({children, ...restProps}) {

    return(<CardContainer {...restProps}>{children}</CardContainer>)
}

Contact.CardHeader = function ContactCardHeader({children, ...restProps}) {

    return(<CardHeader {...restProps}>{children}</CardHeader>)
}

Contact.CardBody = function ContactCardBody({children, ...restProps}) {

    return(<CardBody {...restProps}>{children}</CardBody>)
}

Contact.Title = function ContactTitle({children, ...restProps}) {

    return(<Title {...restProps}>{children}</Title>)
}

Contact.SubTitle = function ContactSubTitle({children, ...restProps}) {

    return(<SubTitle {...restProps}>{children}</SubTitle>)
}

Contact.Address = function ContactAddress({children, ...restProps}) {

    return(<Address {...restProps}>{children}</Address>)
}

Contact.Link = function ContactLink({children, href, ...restProps}) {

    return(<LinkButton href={href} {...restProps}>{children}</LinkButton>)
}

Contact.Map = function ContactMap({children, ...restProps}) {

    return(<MapContainer {...restProps}>{children}</MapContainer>)
}

Contact.CardList = function ContactCardList({children, ...restProps}) {

    return(<List {...restProps}>{children}</List>)
}

Contact.CardListItem = function ContactCardListItem({children, ...restProps}) {

    return(<ListItem {...restProps}>{children}</ListItem>)
}

Contact.CardTextBold = function ContactCardTextBold({children, ...restProps}) {

    return(<TextBold {...restProps}>{children}</TextBold>)
}

Contact.ShowOnMap = function ContactShowOnMap({children, onClick, ...restProps}) {

    return(<ShowOnMap onClick={onClick} {...restProps}><LocationIcon />{children}</ShowOnMap>)
}
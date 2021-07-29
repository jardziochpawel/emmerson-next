import {
    Container,
    LocalisationIcon,
    OfferContainerDescription,
    OfferDescription,
    OfferHeader,
    OfferLocalisation,
    OfferTitle,
    OfferTitleAndLocation,
    Localisation,
    OfferContainer,
    MainContainer,
    Contact,
    ContainerWithMap,
    OfferDetails,
    TitleDetails,
    ListDetails,
    ItemList,
    OfferDetailsContainer, Mask, Button
} from "./styles/offer";
import ReactHtmlParser from 'react-html-parser';

export default function OfferComponent({children, restProps}){

    return(<Container {...restProps}>{children}</Container>);
}

OfferComponent.MainContainer = function Main({children, restProps}){

    return(<MainContainer {...restProps}>{children}</MainContainer>);
}

OfferComponent.OfferContainer = function Offer({children, restProps}){

    return(<OfferContainer {...restProps}>{children}</OfferContainer>);
}

OfferComponent.Header = function Header({children, restProps}){

    return(<OfferHeader {...restProps}>{children}</OfferHeader>);
}

OfferComponent.TitleAndLocation = function OfferComponentTitleAndLocation({children, restProps}){

    return(<OfferTitleAndLocation {...restProps}>{children}</OfferTitleAndLocation>);
}

OfferComponent.Title = function OfferComponentTitle({children, restProps}){

    return(<OfferTitle {...restProps}>{children}</OfferTitle>);
}

OfferComponent.Localisation = function OfferComponentLocalisation({children, onClick, restProps}){

    return(<OfferLocalisation{...restProps}><Localisation  onClick={onClick}><LocalisationIcon />{children}</Localisation></OfferLocalisation>);
}

OfferComponent.Contact = function OfferContact({children, restProps}){

    return(<Contact {...restProps}>{children}</Contact>);
}

OfferComponent.Map = function OfferContact({children, ...restProps}){

    return(
        <ContainerWithMap {...restProps}>{children}</ContainerWithMap>
    );
}

OfferComponent.Description = function OfferComponentDescription({children, hide, onClick, restProps}){

    return(
        <OfferContainerDescription>
            <OfferDescription {...restProps} hide={hide}>
                { ReactHtmlParser(children) }
            </OfferDescription>
            <Mask hide={hide}/>
            <OfferComponent.ButtonDetails type='button' hide={hide} onClick={onClick} />
        </OfferContainerDescription>
    )
}

OfferComponent.ButtonDetails = function OfferComponentButtonDetails({ hide, onClick,...restProps}){

    return(<Button onClick={()=>onClick(!hide)} hide={hide} {...restProps}>{!hide ? 'Pokaż więcej' : 'Pokaż mniej'}</Button>)
}

OfferComponent.DetailsContainer = function OfferDetailsContainerComponent({children, ...restProps}){
    return(<OfferDetailsContainer {...restProps}>{children}</OfferDetailsContainer>)
}

OfferComponent.Details = function OfferDetailsComponent({children, ...restProps}){
    return(<OfferDetails {...restProps}>{children}</OfferDetails>)
}

OfferComponent.DetailsTitle = function OfferDetailsTitleComponent({children, ...restProps}){
    return(<TitleDetails {...restProps}>{children}</TitleDetails>)
}

OfferComponent.DetailsList = function OfferDetailsListComponent({children, ...restProps}){
    return(<ListDetails {...restProps}>{children}</ListDetails>)
}

OfferComponent.DetailsListItem = function OfferDetailsListItemComponent({children, ...restProps}){
    return(<ItemList {...restProps}>{children}</ItemList>)
}
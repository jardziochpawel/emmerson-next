import {
    Container, LocalisationIcon,
    OfferContainerDescription,
    OfferDescription,
    OfferHeader, OfferLocalisation,
    OfferTitle,
    OfferTitleAndLocation,
    Localisation, OfferContainer, MainContainer, Contact, ContainerWithMap
} from "./styles/offer";
import ReactHtmlParser from 'react-html-parser';
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../mapComponent"), {
    ssr: false
});

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

OfferComponent.Map = function OfferContact({position, marker, ...restProps}){

    return(
        <ContainerWithMap {...restProps}>
            <MapWithNoSSR position={position} marker={marker}/>
        </ContainerWithMap>
    );
}

OfferComponent.Description = function OfferComponentDescription({children, restProps}){
    return(
        <OfferContainerDescription>
            <OfferDescription {...restProps} >
                { ReactHtmlParser(children) }
            </OfferDescription>
        </OfferContainerDescription>
    )
}
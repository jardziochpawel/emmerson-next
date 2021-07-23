import { Container, FeatureButton, FeatureText, FeatureTitle, FeatureLink } from "./styles/headerFeature";
import React from "react";

export default function HeaderFeature({children, ...restProps}){
    return(
        <Container {...restProps}>
            <HeaderFeature.Title>
                Sprzedamy lub wynajmiemy<br/>
                Twoją nieruchomość
            </HeaderFeature.Title>
            <HeaderFeature.Text>
                Dla naszego wspólnego bezpieczeństwa
                zmodyfikowaliśmy nasze procedury i
                dostosowaliśmy je do nowej sytuacji.
                <HeaderFeature.Link link='#'>Jak działamy?</HeaderFeature.Link>
            </HeaderFeature.Text>
            <HeaderFeature.Button>Więcej</HeaderFeature.Button>
        </Container>
    );
}

HeaderFeature.Title = function FeTitle({children, ...restProps}){
    return(<FeatureTitle {...restProps}>{ children }</FeatureTitle>);
}

HeaderFeature.Text = function FeText({children, ...restProps}){
    return(<FeatureText {...restProps}>{ children }</FeatureText>);
}

HeaderFeature.Link = function FeLink({children, link,  ...restProps}){
    return(<FeatureLink href={link} passhref {...restProps}>{ children }</FeatureLink>);
}

HeaderFeature.Button = function FeButton({children, ...restProps}){
    return(<FeatureButton {...restProps}>{ children }</FeatureButton>);
}
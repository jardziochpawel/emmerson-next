import React from 'react';
import { FeatureButton, Container, FeatureText, FeatureTitle, FeatureLink } from "./styles/feature";
import Link from "next/link";

export default function Feature({children, ...restProps}){
    return(
        <Container {...restProps}>
            <Feature.Title>
                Sprzedamy lub wynajmiemy<br/>
                Twoją nieruchomość
            </Feature.Title>
            <Feature.Text>
                Dla naszego wspólnego bezpieczeństwa
                zmodyfikowaliśmy nasze procedury i
                dostosowaliśmy je do nowej sytuacji.
                <Feature.Link link='#'>Jak działamy?</Feature.Link>
            </Feature.Text>
            <Feature.Button>Więcej</Feature.Button>
        </Container>
    );
}

Feature.Title = function FeTitle({children, ...restProps}){
    return(<FeatureTitle {...restProps}>{ children }</FeatureTitle>);
}

Feature.Text = function FeText({children, ...restProps}){
    return(<FeatureText {...restProps}>{ children }</FeatureText>);
}

Feature.Link = function FeLink({children, link,  ...restProps}){
    return(
        <Link href={link} passHref prefetch={false}>
            <FeatureLink {...restProps}>{ children }</FeatureLink>
        </Link>
    );
}

Feature.Button = function FeButton({children, ...restProps}){
    return(<FeatureButton {...restProps}>{ children }</FeatureButton>);
}
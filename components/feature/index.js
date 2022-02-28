import React from 'react';
import { FeatureButton, Container, FeatureText, FeatureTitle, FeatureLink, Card } from "./styles/feature";
import Link from "next/link";

export default function Feature({children, ...restProps}){
    return(
        <Container {...restProps}>
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
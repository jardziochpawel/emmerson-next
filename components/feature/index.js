import React from 'react';
import {Button, Container, Text, Title, Link} from "./styles/feature";

export default function Feature({children, ...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
    )
}

Feature.Title = function FeatureTitle({children, ...restProps}){
    return(<Title {...restProps}>{children}</Title>)
}

Feature.Text = function FeatureText({children, ...restProps}){
    return(<Text {...restProps}>{children}</Text>);
}

Feature.Link = function FeatureLink({children, ...restProps}){
    return(<Link {...restProps}>{children}</Link>);
}

Feature.Button = function FeatureButton({children, ...restProps}){
    return(<Button {...restProps}>{children}</Button>);
}


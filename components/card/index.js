import {CardContainer, Container, Header3, Paragraph} from "./styles/card";

export default function Card({children, ...restProps}){

    return(<Container {...restProps}>{children}</Container>);
}

Card.Container = function cardContainer({children, ...restProps}){

    return(<CardContainer {...restProps}>{children}</CardContainer>);
}


Card.Title = function cardTitle({children, ...restProps}){

    return(<Header3 {...restProps}>{children}</Header3>);
}

Card.Paragraph = function cardTitle({children, ...restProps}){

    return(<Paragraph {...restProps}>{children}</Paragraph>);
}
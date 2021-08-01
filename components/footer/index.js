import {Column, Container, DiagonalContainer, List, ListItem, Tag} from "./styles/footer";

export default function Footer({children, diagonal, ...restProps}){

    return(
        <DiagonalContainer diagonal={diagonal} {...restProps}>{children}</DiagonalContainer>
    );
}

Footer.Container = function FooterContainer({children, ...restProps}){

    return(<Container {...restProps}>{children}</Container>)
}

Footer.Column = function FooterColumn({children, ...restProps}){

    return(<Column {...restProps}>{children}</Column>)
}

Footer.List = function FooterList({children, ...restProps}){

    return(<List {...restProps}>{children}</List>)
}

Footer.ListItem = function FooterListItem({children, ...restProps}){

    return(<ListItem {...restProps}>{children}</ListItem>)
}

Footer.Tag = function FooterTag({children, ...restProps}){

    return(<Tag {...restProps}>{children}</Tag>)
}
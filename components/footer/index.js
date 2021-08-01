import { Container, DiagonalContainer } from "./styles/footer";

export default function Footer({children, diagonal, ...restProps}){

    return(
        <DiagonalContainer diagonal={diagonal} {...restProps}>{children}</DiagonalContainer>
    );
}

Footer.Container = function FooterContainer({children, ...restProps}){

    return(<Container {...restProps}>{children}</Container>)
}
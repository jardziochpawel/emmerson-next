import Link from 'next/link';

import {
    Background,
    Container,
    Hamburger,
    Logo,
    Nav,
    ButtonLink,
    ShadowBox, BackgroundColor
} from './styles/header';

export default function Header({ bg = true, src = false, children, color = false, ...restProps }) {

    return bg ? (
        <Background src={src ? `/images/misc/${src}.jpeg`: `/images/misc/bg-homepage.jpeg`} lazyLoad isResponsive wrapperClassName='test' {...restProps}>
            {children}
        </Background>
    ) : (
        <BackgroundColor color={color}>{children}</BackgroundColor>
    );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {

    return(
        <Container {...restProps}>
            <ShadowBox>{children}</ShadowBox>
        </Container>
    );
};

Header.Hamburger = function HeaderHamburger({ open, setOpen }) {

    return (
        <Hamburger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </Hamburger>
    )
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {

    return (
        <Link href={to} passHref>
            <Logo {...restProps} />
        </Link>
    );
};

Header.Nav = function HeaderNav({ children, ...restProps }) {

    return (
        <Nav {...restProps}>
            {children}
        </Nav>
    );
}

Header.ButtonLink = function HeaderButtonLink({ children, to, ...restProps }) {

    return(
        <Link href={to} passHref>
            <ButtonLink {...restProps}>
                {children}
            </ButtonLink>
        </Link>
    );
}
import Link from 'next/link';
import {
    Background,
    Container,
    Hamburger,
    Logo,
    Nav,
    ButtonLink,
    ShadowBox, BackgroundColor, ButtonLogo
} from './styles/header';

export default function Header({smallView = false, webp, bg = true, src = false, children, color = false, ...restProps }) {

    return bg ? webp ? (
        <Background src={src ? `/images/misc/${src}.webp`: `/images/misc/bg-homepage.webp`} small={smallView.toString()} isResponsive wrapperClassName='test'  {...restProps}>
            {children}
        </Background>
    ) : (
        <Background src={src ? `/images/misc/${src}.jpeg`: `/images/misc/bg-homepage.jpeg`} small={smallView.toString()} isResponsive wrapperClassName='test' {...restProps}>
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
        <ButtonLogo href={to} passHref prefetch={false}>
            <Logo {...restProps} width={200} height={87} alt='Emmerson Zarządzanie Sp z o.o.'/>
        </ButtonLogo>
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
        <Link href={to} passHref prefetch={false}>
            <ButtonLink {...restProps}>
                {children}
            </ButtonLink>
        </Link>
    );
}
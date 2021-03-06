import Link from 'next/link';
import {
    Background,
    Container,
    Hamburger,
    Logo,
    Nav,
    ButtonLink,
    ShadowBox, BackgroundColor, ButtonLogo, SidebarContainer, SidebarItem, SidebarNav, HamburgerContainer, DropdownButton
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
        <HamburgerContainer open={open}>
            <Hamburger open={open} onClick={() => setOpen(!open)} aria-label='Hamburger'>
                <div />
                <div />
                <div />
            </Hamburger>
        </HamburgerContainer>
    )
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {

    return (
        <ButtonLogo href={to} passHref aria-label='Logo Button'>
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

Header.Sidebar = function HeaderSidebar({ children, ...restProps }) {

    return (
        <SidebarContainer {...restProps}>
            {children}
        </SidebarContainer>
    );
}

Header.SidebarNav = function HeaderSidebarNav({ children, to, ...restProps }) {

    return(
        <SidebarNav href={to} passHref {...restProps}>
            {children}
        </SidebarNav>
    );
}

Header.SidebarItem = function HeaderSidebarItem({ children, to, ...restProps }) {

    return(
        <SidebarItem href={to} passHref {...restProps}>
            {children}
        </SidebarItem>
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

Header.ButtonDropdown = function headerButtonDropdown({children, ...restProps}){

    return(<DropdownButton {...restProps}>{children}</DropdownButton>)
}
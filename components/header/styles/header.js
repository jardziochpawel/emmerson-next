import styled, {css} from 'styled-components';
import { BackgroundImage } from "react-image-and-background-image-fade";
import Link from "next/link";

export const Background = styled(BackgroundImage)`
  @media (max-width: 800px) {
    ${({ small }) => small && css`background: none;`}
  }
  
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100%!important;
  background: center / cover no-repeat;
  ${({height}) => height ? css`min-height: ${height};` : css`min-height: 100vh;`};
`;

export const BackgroundColor = styled.div`
  ${({color}) => color && css`background-color: ${color};`}
`;

export const ShadowBox = styled.div`
  background-clip: content-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 17px 54px -15px rgb(0 0 0 / 60%);
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  margin: 0;
  height: 87px;
  background-color: #e00000;
  color: white;
  background-clip: content-box;
  padding: 0 6.1rem;
  width: 100%;
  overflow: hidden;
  
  a {
    display: flex;
  }
  
  @media (max-width: 1150px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 1000px) {
    padding: 0;
  }
`;

export const HamburgerContainer = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
  
  ${({ open }) => open ? css`position: fixed;` :  css`position: relative;`};
  
  width: 2rem;
  height: 2rem;
  z-index: 999999;
  right: 50px;
  min-width: 2rem;
  min-height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
`;

export const Hamburger = styled.button`
  @media (min-width: 1000px) {
    display: none;
  }
  
  top: 5%;
  margin: 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 999999;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const Logo = styled.img`
  height: auto;
  &:hover{
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-content: space-between;
  flex-wrap: nowrap;
  
  a {
    text-decoration: none;
  }
  
  @media (max-width: 999px) {
    display: none;
  }
`;

export const ButtonLink = styled.li`
  background-color: inherit;
  padding: 1.1rem 1.3rem;
  width: 100%;
  cursor: pointer;
  border: 0;
  color: white;
  font-size: 16px;
  font-weight: 350;
  list-style: none;
  white-space: nowrap;
  
  &:hover {
    background-color: #d0001a;
  }
  &:last-of-type {
    margin-right: 10px;
  }
`;

export const ButtonLogo = styled(Link)`
  &:hover{
    cursor: pointer;
  }
`;

export const SidebarContainer = styled.div`
  @media (min-width: 999px) {
    display: none;
  }
  transition: transform .2s linear;
  transform: translate3d(300px, 0, 0);
  position: fixed;
  top: 0;
  background: #e00009;
  right: 0;
  display: block;
  height: auto;
  bottom: 0;
  margin: 0;
  z-index: 9999;
  border: none;
  width: 300px;
  overflow: auto;
  
  ${({open})=>open && css`
    transform: translate3d(0, 0, 0);
  `}
`;

export const SidebarNav = styled.nav`
  padding: 20px;
  margin-top: 40px;
  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 350;
    padding: 1.1rem 1.3rem;
    margin-top: 5px;
    &:hover{
      color: #eaeaea;
      cursor: pointer;
      background-color: #d0001a;
    }
  }
`;

export const SidebarItem = styled(Link)``;

export const DropdownButton = styled.button``;
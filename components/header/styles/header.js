import styled, {css} from 'styled-components';
import {BackgroundImage} from "react-image-and-background-image-fade";
import Link from "next/link";

export const Background = styled(BackgroundImage)`    
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100%!important;
  background: center / cover no-repeat;
  ${({height}) => height ? css`min-height: ${height};` : css`min-height: 100vh;`};

  @media (max-width: 800px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && css`background: none;`}
  }
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
  display: flex;
  margin: 0;
  height: 87px;
  background-color: #e00000;
  color: white;
  background-clip: content-box;
  padding: 0 6.1rem;
  width: 100%;
  
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

export const Hamburger = styled.button`
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
    background: ${({ theme }) => theme.primaryLight};
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
  
  @media (min-width: 1000px) {
    display: none;
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
import styled, { css }  from "styled-components";
import { PhotoLibrary } from '@styled-icons/material';
import Lightbox from 'react-image-lightbox';
import {BackgroundImage} from "react-image-and-background-image-fade";

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 0;
  height: 100%;
  position: relative;
  
  @media(max-width: 1000px){
    width: 100%;
    padding: 0;
  }
`;

export const SliderSlide = styled.div`
  display: flex;
  flex: 1 0 auto;
  opacity: ${({active})  => active ? 1 : 0};
  transition: all 0.5s ease;
  width: 100%;
`;

export const SliderSlides = styled.div`
  display: flex;
  height: 100%;
  max-height: 100%;
  ${({currentSlide}) =>
    currentSlide &&
    css`
      transform: translateX(-${currentSlide * 100 }%);
    `};
  transition: all 0.5s ease;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  
  @media(max-width: 1000px){
    flex-basis: 100%;
  }
`;

export const SliderImage = styled(BackgroundImage)`
  background: center / 100% 100% no-repeat;
  position: relative;  
  padding-top: calc(300 / 400 * 100%);
  width: 100%;
  overflow: hidden;
  padding-left: 0;
  padding-right: 0;
`;

export const SliderContainer = styled.div`
  display: flex;
  position: relative;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 100%;

  @media(max-width: 1000px){
    flex-basis: 100%;
  }
`;

export const SliderButton = styled.button`
  position: absolute;
  height: 100%;
  background: transparent;
  border: none;
  right: 10px;
  outline: none;
  z-index: 999;
  
  ${( { right } ) => !right && css`
    left: 10px;
  `}
  
  svg{
    width: 70px;
    height: 70px;
    fill: white;
  }
  
  &:hover{
    cursor: pointer;
    svg{
      fill: #e0001a;
    }
  }
`;

export const SliderIcon = styled(PhotoLibrary)`
  margin-left: 10px;
  width: 24px;
`;

export const SliderImageCount = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
  width: 120px;
  background-color: rgba(0,0,0,0.4);
  color: white;
  font-size: 24px;
  padding: 5px;
`;

export const SliderCount = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
  white-space: nowrap;
  width: 50px;
`;

export const LightBoxContainer = styled(Lightbox)`

`;
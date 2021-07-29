import styled, { css }  from "styled-components";

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 56%;
  overflow: hidden;
  padding: 0 2rem;
  height: 100%;
  
  @media(max-width: 1000px){
    width: 100%;
  }
`;

export const CarouselSlide = styled.div`
  display: flex;
  flex: 1 0 auto;
  opacity: ${({active})  => active ? 1 : 0};
  transition: all 0.5s ease;
  width: 100%;
`;

export const CarouselSlides = styled.div`
  display: flex;
  max-height: calc(100vh - 100px);
  ${({currentSlide}) =>
          currentSlide &&
          css`
      transform: translateX(-${currentSlide * 100 }%);
    `};
  transition: all 0.5s ease;
  
  @media(max-width: 1000px){
    max-height: 1000px;
    height: auto;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  height: 100%;
  
  @media(max-width: 1000px){
    flex-basis: 100%;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 100%;

  @media(max-width: 1000px){
    margin: 0;
    flex-flow: row wrap;
    flex-basis: 100%;
  }
`;

export const CarouselButton = styled.button`
  border: 1px solid rgba(128,128,128,.2);
  border-radius: 50%;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 5rem;
  
  ${( { right } ) => !right && css`
    transform: rotate(180deg);
  `}
  outline: none;
  background-color: white;
  
  @media(max-width: 1000px){
    &:first-child{
      order: 2;
    }
    &:last-child{
      order: 3;
    }
  }

  svg{
    width: 2.5rem;
    height: 2.5rem;
    fill: #e0001a;
    background-color: inherit;
  }
  
  &:hover{
    background-color: #e0001a;
    cursor: pointer;
    svg{
      fill: white;
    }
  }
`;
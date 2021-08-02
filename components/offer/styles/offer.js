import styled, {css} from 'styled-components';
import { LocationOn } from "@styled-icons/material";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background-color: white;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  
  @media(max-width: 1400px){
    max-width: 100vw;
    margin: 0;
    padding: 0;
  }
`;

export const OfferContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  max-width: 850px;
  width: calc(100vw * 0.6);
  
  @media(max-width: 1000px){
    width: 100%;
    margin-bottom: 50px;
  }
`;


export const OfferHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: calc(75vw * 0.7);
  width: 100%;
  margin: 0 auto 0 auto;
  max-width: 1400px;
  max-height: 700px;

  @media(max-width: 1000px){
    height: calc(100vw * 0.7);
    padding: 0 25px;
    flex-flow: row wrap;
    margin: 0;
  }

  @media(max-width: 600px){
    height: calc(100vw);
    padding: 0 10px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  padding: 0 20px;

  @media(max-width: 1000px){
    width: 100%;
    max-width: 100%;
    margin-bottom: 50px;
  }

  @media(max-width: 600px){
    padding: 0 10px;
  }

  @media(max-width: 400px){
    padding: 0 5px;
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 25px;
  left: 25px;
  z-index: 9999;
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #e00009;
  margin: 20px;
  
  ${({hide}) =>  hide && css`
    position: initial; 

  `
  }
  
  &:hover{
    cursor: pointer;
    color: #900009;
  }
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  
  ${({hide}) => hide ? css`` : css`
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0.23153011204481788) 40%, rgba(255,255,255,1) 80%);
  `};
`;

export const OfferContainerDescription = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: calc(100% + 50px);
  max-width: 1400px;
  margin: 25px auto 0 auto;
  padding: 25px;
  
  @media(max-width: 1000px){
    flex-basis: 100%;
    width: 100%;
    margin: 25px 0 0 0;
    padding: 0;
  }
`;

export const OfferDescription = styled.div`
  display: flex;
  position: relative;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  width: 100%;
  overflow: hidden;
  min-height: 300px;
  
  ${({hide}) => hide ? css`height: calc(100% + 50px)` : css`
    height: 300px
  `};
  
  @media(max-width: 1000px){
    width: 100%;
    flex-basis: 100%;
    padding: 0 50px;
  }

  @media(max-width: 600px){
    padding: 0 10px;
  }
`;

export const OfferTitleAndLocation = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto 0 auto;
  padding: 50px 50px 50px 50px;
`;

export const OfferTitle = styled.h1`
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const OfferLocalisation = styled.h4`
  font-family: "Arial", sans-serif;
  font-weight: bold;
  color: #d25760;
  font-size: 20px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row;
  align-items: center;
`;

export const Localisation = styled.div`
  width: auto;
  height: 20px;
  &:hover{
    cursor: pointer;
    color: #e00009;
  }
`;

export const LocalisationIcon = styled(LocationOn)`
  color: #d25760;
  width: 20px;
  height: 20px;
`;

export const ContainerWithMap = styled.div`
  width: 100%;
  max-width: 1400px;  
  margin: 50px auto 0 auto;
  padding: 25px;
  height: calc(50vw * 0.7);
  
  @media(max-width: 1000px){
    padding: 10px;
    width: 90vw;
    height: calc(100vw * 0.56);
  }

  @media(max-width: 600px){
    padding: 0 10px;
    width: 100%;
    margin: 50px 0 0 0;
  }
`;

export const OfferDescriptionTitle = styled.h4`
  width: 100%;
`;

export const OfferDetailsContainer = styled.div`
  width: 100%;

  div:last-child{
    border-bottom: 1px solid rgba(0,0,0,0.4);
  }
`;

export const OfferDetails = styled.div`
  width: 100%;
  padding: 25px;
  border-top: 1px solid rgba(0,0,0,0.4);
`;

export const TitleDetails = styled.h4`
  margin-left: 0;
  padding-left: 0;
`;

export const ListDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0 0 0 17px;
  list-style: disc;
`;

export const ItemList = styled.li`
  @media(min-width: 1000px){
    width: calc(100% / 3);
  }
  
  width: 50%;
`;
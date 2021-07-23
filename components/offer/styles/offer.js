import styled from 'styled-components';
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
  max-width: 1400px;
  margin: auto;
`;

export const OfferContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
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
`;

export const OfferContainerDescription = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 50px auto 0 auto;
  padding: 50px 50px 0 50px;
  
  @media(max-width: 1000px){
    flex-basis: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const OfferDescription = styled.div`
  display: flex;
  position: relative;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  width: 50vw;
  height: 100%;
  
  @media(max-width: 1000px){
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
  color: #d25760;
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

export const Localisation = styled.span`
  width: auto;

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
  padding: 50px;
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
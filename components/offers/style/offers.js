import styled, { css } from "styled-components";
import {LocationOn} from "@styled-icons/material";
import {BackgroundImage} from "react-image-and-background-image-fade";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  background-color: whitesmoke;
  width: 100%;
  padding-top: 10rem;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 1100px){
    padding-top: 20rem;
  }
`;

export const CardContainer = styled.div`
  background-color: white;
  margin: 5px auto;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-start;
  max-height: 600px;
  width: 65%;

  @media(max-width: 1200px){
    width: 95%;
    
  }

  @media(max-width: 850px){
    flex-wrap: wrap;
  }
  
  @media(max-width: 1100px){
    margin: 5px 50px 0 50px;
    width: 100%;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 50px;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  min-height: 300px;
  padding: 0 50px 50px 50px;

  @media(max-width: 850px){
    margin: auto;
  }
`;

export const Title = styled.h1`
  margin: 10px 0 0 0;
  padding: 0;
  width: 100%;
  
  &:hover{
    cursor: pointer;
  }
`;

export const Localisation = styled.div`
  color: #d25760;
  font-size: 14px;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  &:hover{
    cursor: pointer;
  }
`;

export const CardHeader = styled.div`
  
`;

export const LocationIcon = styled(LocationOn)`
  color: #d25760;
  width: 24px;
  height: 24px;
`;

export const CardBoxImage = styled.div`
  min-width: 400px;
  width: 400px;
  height: 100%;
  margin: 0;
  padding: 0;


  @media(max-width: 850px){
    width: 50%;
    margin: auto;
    height: 300px;
  }
`;

export const CardImage = styled(BackgroundImage)`
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-top: 75%;
  padding-left: 0;
  padding-right: 0;
  background:  center / 100% 100% no-repeat;
  
  &:hover{
    cursor: pointer;
  }
`;

export const Price = styled.h2`

`;

export const CardText = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: baseline;
  margin: 0;
  padding: 0;
  
  @media(max-width: 600px){
    flex-wrap: wrap;
  }
`;

export const Text = styled.span`
  font-size: 18px;
  white-space: nowrap;
  
  @media(max-width: 600px){
    width: 100%;
  }
`;

export const OfferCount = styled.h3`
  float: left;
  margin: 30px auto;
  width: 65%;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(0,0,0,0.4);
  
  @media(max-width: 1100px){  
    width: 100%;
  }
`;
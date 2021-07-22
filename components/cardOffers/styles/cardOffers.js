import styled from "styled-components";
import { BackgroundImage } from 'react-image-and-background-image-fade';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  padding: 0 5rem;
  width: 100%;
  
  @media(max-width: 1200px){
    padding: 0 3rem;
  }
  
  @media(max-width: 1000px){
    padding: 0 1rem;
  }
`;

export const CardContainer = styled.div`
  width: calc((100vw * 0.80) / 3);
  max-width: calc( 1200px / 3 );
  margin-top: 50px;
  
  @media(max-width: 1200px){
    width: calc((100vw * 0.69) / 2);
  }
  
  @media(max-width: 1000px){
    width: 100%;
    padding: 0;
  }
`;

export const CardImage = styled(BackgroundImage)`
  background: center / 100% 100% no-repeat;
  padding-top: calc(300 / 400 * 100%);
  margin: auto;
  border: 1px solid rgba(128,128,128,.2);
  width: 100%;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 20px;
  min-height: 340px;
  height: auto;
`;

export const CardTitle = styled.div`
  font-family: 'Anton', sans-serif;
  font-weight: 100;
  margin: 0;
  padding: 0 0 10px 0;
  font-size: 18px;
`;

export const CardLocalisation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 20px;
  line-height: 1.5rem;
  font-size: 16px;
  font-weight: 300;
  color: #999999;
  margin-bottom: 20px;

  @media(max-width: 1000px){
    align-items: flex-start;
  }
`;

export const CardLocalisationIcon = styled.div`
  margin-top: 5px;
  svg{
    fill: #999999;
    margin-right: 10px;
  }
`;

export const CardListContainer = styled.ul`
  list-style-type: none;
  margin: 20px 0;
  padding: 0;
`;

export const CardListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  line-height: 1.5rem;
  white-space: nowrap;

`;

export const ListParam = styled.span`
  color: #999999;
`;

export const ListValue = styled.span`
  color: black;
`;

export const CardPrice = styled.div`
  color: #e0001a;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  padding: 0;
`;

export const CardText = styled.div`
  font-family: 'Open Sans', sans-serif;
  line-height: 1.2;
  font-size: 14px;
`;
import styled from "styled-components";
import {css} from "styled-components";

export const DiagonalContainer = styled.div`
  position: relative;
  height: 100%;
  width: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  padding-top: 100px;
  ${({diagonal})=> diagonal && css`transform: skewY(-5deg);`}

  ${({color}) => color && css`background-image: linear-gradient(45deg, ${color.first}, ${color.second});`}
  
  
  ${({first})=>first && css`@media(max-width: 1000px){
    margin-top: 200px;
  }`}
`;


export const Container = styled.div`
  ${({diagonal}) => diagonal && css`transform: skewY(5deg);`};
  background-color: inherit;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
`;

export const Title = styled.h1`
  font-family: 'Anton', sans-serif;
  margin: 0;
  padding: 0;
  font-size: 27px;
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 300;
  color: #808080;
`;


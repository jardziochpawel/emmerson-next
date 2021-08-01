import styled from "styled-components";
import {css} from "styled-components";

export const DiagonalContainer = styled.div`
  
  position: relative;
  height: 100%;
  min-height: 400px;
  width: auto;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #464b53;
  
  ${({diagonal}) => diagonal && css`
    clip-path: polygon(0 calc(100vw * 0.09), 100% 0%, 100% 100%, 0% 100%);
    padding-top: 150px;
  `}
`;

export const Container = styled.div`

  background-color: inherit;
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  padding: 100px 50px 100px 50px;
  margin: auto;
;
  div{
    color: white;
    width: calc(100% / 3);
    
    @media(max-width: 1000px){
      width: 50%;
    }
    
    @media(max-width: 1000px){
      width: 100%;
    }
  }
`;
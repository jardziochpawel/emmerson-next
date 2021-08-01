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

  .tag{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const Column = styled.div`
  color: white;
  width: calc(100% / 3);
  
  @media(max-width: 1000px){
    width: 50%;
  }

  @media(max-width: 1000px){
    width: 100%;
  }
`;

export const List = styled.ul`
  line-height: 25px;
  margin: 0.75em 0;
  padding: 0 1em;
  list-style: none;
  
  li::before {
    content: "";
    border-color: transparent #ddd;
    border-style: solid;
    border-width: 0.35em 0 0.35em 0.45em;
    display: block;
    line-height: 25px;
    height: 0;
    width: 0;
    left: -1em;
    top: 1em;
    position: relative;
  }
`;

export const ListItem = styled.li`
  a{
    color: white;
    text-decoration: none;
    
    &:hover{
      color: #bbb;
    }
  }
`;

export const Tag = styled.div`
  padding: 10px 20px;
  margin-top: 5px;
  margin-left: 5px;
  border: 1px solid white;
  border-radius: 5px;
  width: auto;
  color: white;
`;
import styled from "styled-components";

export const Container = styled.div`
  ${ ({plusToMinus}) => plusToMinus ? 'display: flex;': 'display: none;' };
  position: absolute;
  top:86px;
  left: 0;
  width: 100%;
  height: auto;
  flex-direction: column;
  background-color: white;
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 300ms;
  border-left: 1px solid rgba(128,128,128,.2);

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @media(max-width: 1000px){
    top: calc(91px * 2 + 92px)
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 87px;
  width: 100%;
  flex-grow: 1;
  flex-basis: 33%;
  color: black;
  border-bottom: 1px solid rgba(128,128,128,.2);
  border-right: 1px solid rgba(128,128,128,.2);
  
  &:first-child{
    border-right:none;
  }
  
  @media(max-width: 1000px){
    flex-basis: 50%;
    &:first-child{
      border-right:none;
      border-bottom:none;
    }
  }
  
  @media(max-width: 600px){
    flex-basis: 100%;
    &:first-child{
      border-right:none;
      border-bottom:none;
    }
  }
`;

export const ClearButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  background-color: white;
  border: 0;
  border-bottom: 1px solid rgba(128,128,128,.2);
  border-right: 1px solid rgba(128,128,128,.2);
  
  &:hover{
    cursor: pointer;
    background-color: whitesmoke;
  }
  
  &:focus{
    box-shadow: none;
    outline: none;    
  }
`;
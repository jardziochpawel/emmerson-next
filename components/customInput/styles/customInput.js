import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.4rem 0;

  &:focus-within {
    animation-name: fadeInBackground;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 300ms;
    background-color: #e0001a;
    color: white;

    @keyframes fadeInBackground {
      0% {
        background-color: white;
        color: black;
      }
      100% {
        background-color: #e0001a;
        color: white;
      }
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
`;

export const Label = styled.div`
  padding: 0.6rem 1.8rem;
  font-weight: 300;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  box-shadow: none;
  padding: 0.4rem 2rem;
  margin: 0 0.2rem;
  font-size: 16px;
  font-weight: 500;
  
  &::placeholder{
    color: black;
  }
  &:focus{
    box-shadow: none;
    border: none;
    outline: none;
  }
`;
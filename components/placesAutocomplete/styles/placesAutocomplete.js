import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  position: relative;
`;

export const DropDownContainer = styled.div`
  background-color: #e0001a;
  position: absolute;
  width: 100%;
  z-index: 9999;
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 300ms;

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

export const LastSearchContainer = styled.div`
  ${({focused}) => focused ? css`display: block;` : css`display: none;`}
  background-color: #e0001a;
  position: relative;
  width: 100%;
  z-index: 9999;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: 500;
  padding: 0 0.2rem;
`;

export const DropDownItem = styled.div`
  width: 100%;
  padding: 0.4rem 1rem;
  color: white;
  cursor: pointer;
  
  &:first-child{
    margin-top: 6px;
  }
  &:last-child{
    margin-bottom: 6px;
  }
  &:hover{
    background-color: #a0001a;
  }
`;

export const LastSearchItem = styled.div`
  width: 100%;
  padding: 0.4rem 1rem;
  color: white;
  cursor: pointer;
  
  &:first-child{
    margin-top: 6px;
  }
  &:last-child{
    margin-bottom: 6px;
  }
  &:hover{
    background-color: #a0001a;
  }
`;

export const DropDownText = styled.div`
  
`;

export const Loading = styled.div`
  
`;

export const Label = styled.div`
  padding: 0 1.4rem 0.6rem;
  margin-bottom: 0.2rem;
  font-weight: 300;
  font-size: 14px;
  white-space: nowrap;
`;

export const Input = styled.input`
  color: black;
  font-size: 16px;
  font-weight: 500;
  border-radius: 0;
  border: inherit;
  width: 100%;
  padding: 0.4rem 0 0.4rem 1.8rem;

  &::placeholder{
    color: black;
  }
  &:focus{
    box-shadow: none;
    border: none;
    outline: none;
  }
`;

export const TitleDropdown = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-decoration: underline;
  padding: 0.4rem 1rem;
`;
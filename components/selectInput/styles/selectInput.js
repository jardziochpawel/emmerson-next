import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  position: relative;
  border-right: 1px solid rgba(128,128,128,.2);
  
  @media (max-width: 1000px){
    border-bottom: 1px solid rgba(128,128,128,.2);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  font-weight: 500;
  padding: 0.2rem 0 0.2rem 1.8rem;
  margin: 0 0.2rem;
  color: black;
  background: #ffffff;
  position: relative;
  z-index: 999;
`;

export const Input = styled.input`
  color: black;
  font-size: 16px;
  font-weight: 500;
  border-radius: 0;
  border: inherit;
  width: 100%;
  padding: 0.2rem 0.4rem;
  
  &::placeholder{
    color: black;
  }
  &:focus{
    box-shadow: none;
    border: none;
    outline: none;
  }
`;

export const InputHidden = styled.input`
  
`;

export const Label = styled.div`
  padding: 0.1rem 2rem 0.4rem;
  margin-bottom: 0.2rem;
  font-weight: 300;
  font-size: 14px;
  white-space: nowrap;
`;

export const Anchor = styled.i`
    background-color: white;
    height: 100%;
    
   .anchor{
    transform: ${({ isOpen }) => isOpen ? css`rotate(0)` : css`rotate(180deg)`};
   }
`;

export const ListContainer = styled.div`
  ${({ isOpen }) => !isOpen ? css`display: none;` : css`display: inline;`};
  text-align: left;
  width: 100%;
  margin: 0;
  padding: 2rem 0;
  position: absolute;
  top: 2.6rem;
  left: 0;
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
  }
`;

export const List = styled.ul` 
  width: 100%;
  margin: 0;
  padding: 0.4rem 0;
  background: #e0001a;
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 0.4rem 1rem;
  ${({isActive})=>isActive && css`background-color: #a0001a;`}
  
  &:hover{
    background-color: #a0001a;
  }
`;
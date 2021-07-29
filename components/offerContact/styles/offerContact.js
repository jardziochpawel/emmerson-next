import styled from "styled-components";
import {Person} from '@styled-icons/material';

export const Container = styled.div`
  font-family: 'Arial',sans-serif;
  width: 100%;
  height: auto;
  max-width: 350px;
  max-height: 700px;
  padding: 20px;
  background-color:  ${({theme}) => theme.colors.white};
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  color: ${({theme}) => theme.colors.darkgray};
  border: 1px solid rgba(0,0,0,0.2);
  -webkit-box-shadow: 2px 7px 17px -5px #000000;
  box-shadow: 2px 7px 17px -5px #000000;
  
  @media(max-width: 1000px){
    width: 100%;
    max-width: 100%;
    flex-flow: row wrap;
    flex-grow: 1;
  }
  @media(max-width: 600px){
    margin: 0;
    padding: 0;
  }
`;

export const ContactData = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 10px;
  width: calc(100% - 60px);
  font-size: 1.2rem;
  
  @media(max-width: 600px){
    margin: 0;
  }
`;

export const ContactDataHeader = styled.div`
  display: flex;
  flex-flow: row;
  font-size: 1.2rem;
  padding-bottom: 10px;
  align-items: center;
`;

export const IconAgent = styled(Person)`
  width: 50px;
  height: 50px;
  min-height: 50px;
  min-width: 50px;
  max-width: 50px;
  max-height: 50px;
  color: ${({theme}) => theme.colors.darkgray};
  
  border: 1px solid ${({theme}) => theme.colors.darkgray};
  border-radius: 25px;
  padding: 10px;
`;

export const Name = styled.div`
  margin-left: 10px;
`;

export const Number = styled.div``;

export const Mail = styled.div`
  font-size: 1rem;
  
  @media(max-width: 1000px){
    font-size: 1.2rem;
  }
  
  @media(max-width: 600px){
    font-size: 1rem;
  }

  @media(max-width: 280px){
    font-size: 0.8rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 16px;
  color: ${({theme}) => theme.colors.darkgray};
  width: 100%;
  margin-top: 10px;
  
  
  &:first-child{
    margin-top: 20px;
  }
`;

export const TextAreaInput = styled.textarea`
  font-family: inherit;
  width: 100%;
  height: 150px;
  border: 0;
  border-bottom: 2px solid ${({theme}) => theme.colors.darkgray};
  outline: 0;
  font-size: 18px;
  color: ${({theme}) => theme.colors.darkgray};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  margin-top: 15px;
  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 18px;
    cursor: text;
    top: 10px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: -10px;
      display: block;
      transition: 0.2s;
      font-size: 16px;
      color: ${({theme}) => theme.colors.primary};
      font-weight:700;
    }
    padding-bottom: 6px;
    font-weight: 400;
    border-width: 3px;
    border-image: linear-gradient(to right, ${({theme}) => theme.colors.primary},${({theme}) => theme.colors.secondary});
    border-image-slice: 1;
  }

  &:required,&:invalid { box-shadow:none; }
`;

export const Input = styled.input`

  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${({theme}) => theme.colors.darkgray};
  outline: 0;
  font-size: 18px;
  color: ${({theme}) => theme.colors.darkgray};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  margin-top: 10px;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 18px;
    cursor: text;
    top: 10px;
  }
  
  &:focus {
    ~ .form__label {
      position: absolute;
      top: -10px;
      display: block;
      transition: 0.2s;
      font-size: 16px;
      color: ${({theme}) => theme.colors.primary};
      font-weight:700;
    }
    padding-bottom: 6px;
    font-weight: 400;
    border-width: 3px;
    border-image: linear-gradient(to right, ${({theme}) => theme.colors.primary},${({theme}) => theme.colors.secondary});
    border-image-slice: 1;
  }

  &:required,&:invalid { box-shadow:none; }
`;

export const InputGroup = styled.div`
  width: 100%;
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  
  sup{
    color: ${({theme}) => theme.colors.primary};
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const ButtonSubmit = styled.button`
  --width: 100%;
  --height: 60px;
  --btn-bg: #da0000;
  --bg: #f22c3a;
  border: 0;
  position: relative;
  min-width: var(--width);
  min-height: var(--height);
  border-radius: var(--height);
  color: #fff;
  font-family: 'Arial',sans-serif;
  font-weight: bold;
  font-size: 20px;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 1rem;

  .text,
  .icon-container {
    position: relative;
    z-index: 2;
  }

  .icon-container {
    --icon-size: 25px;
    position: relative;
    width: var(--icon-size);
    height: var(--icon-size);
    margin-left: 15px;
    transition: transform 500ms ease;

    .icon {
      position: absolute;
      left: 0;
      top: 0;
      width: var(--icon-size);
      height: var(--icon-size);
      transition: transform 500ms ease, opacity 250ms ease;

      &--left {
        transform: translateX(-300%);
        opacity: 0;
      }

      svg {
        width: 100%;
        height: 100%;
        fill: #fff;
      }
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--btn-bg);
    border-radius: var(--height);
    z-index: 1;
    transition: transform 500ms ease;
  }

  &:hover {
    &::after {
      transform: translateX(78%);
    }

    .icon-container {
      transform: translateX(280%);

      .icon {
        &--left {
          transform: translateX(0);
          opacity: 1;
        }

        &--right {
          transform: translateX(280%);
          opacity: 0;
        }
      }
    }
  }
  
  
  @media(max-width: 1000px){
    &:hover {
      &::after {
        transform: translateX(calc(100vw - 150px));
      }

      .icon-container {
        transform: translateX(calc(50vw - 100px));

        .icon {
          &--left {
            transform: translateX(0);
            opacity: 1;
          }

          &--right {
            transform: translateX(calc(50vw - 100px));
            opacity: 0;
          }
        }
      }
    }
  }

`;
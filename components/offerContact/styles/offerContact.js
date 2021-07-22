import styled from "styled-components";
import {Person} from '@styled-icons/material';

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  min-height: 600px;
  padding: 20px;
  background-color: whitesmoke;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  
  @media(max-width: 1000px){
    width: 100%;
    max-width: 100%;
    flex-flow: row wrap;
    flex-grow: 1;
  }
`;

export const IconAgent = styled(Person)`
  width: 50px;
  color: black;
  
  border: 1px solid black;
  border-radius: 25px;
  padding: 10px;
`;

export const Name = styled.div``;

export const Number = styled.div``;

export const Mail = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const TextInput = styled.textarea`
  width: 100%;
  height: calc((50vw * 0.56) / 3);
`;

export const NameInput = styled.input``;

export const NumberInput = styled.input``;

export const MailInput = styled.input``;

export const ButtonSubmit = styled.button``;
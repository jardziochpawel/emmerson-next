import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 100%;
  padding: 0 8rem;
  color: black;
  @media(max-width: 1000px){
    padding: 0 4rem;
  }
  
  @media(max-width: 600px){
    padding: 0 10px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #fefefe;
  width: 450px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 2em;
  box-shadow: rgba(0,0,0,0.3) 12px 12px 15px;

  @media(max-width: 1000px){
    width: 650px;
  }

  @media(max-width: 600px){
    width: 100%;
  }
`;

export const FeatureTitle = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 34px;
  line-height: 1.4;
  font-weight: 300;
  margin-bottom: 0;
  padding-top: 100px;
  padding-bottom: 0;
`;

export const FeatureText = styled.p`
  font-weight: 300;
  width: 100%;
  max-width: 450px;
`;

export const FeatureLink = styled.span`

  text-decoration: none;
  color: #e0001a;
  cursor: pointer;
  
  a:hover {
    text-decoration: underline;
  }
`;

export const FeatureButton = styled.button`
  border: 1px solid #e0001a;
  background-color: inherit;
  cursor: pointer;
  color: #e0001a;
  font-size: 16px;
  padding: 1rem 2.2rem;
  
  &:hover {
    background-color: #e0001a;
    color: white;
  }
`;
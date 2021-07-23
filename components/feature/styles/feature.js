import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 100%;
  padding: 0 8rem;
  
  @media(max-width: 1000px){
    padding: 0 4rem;
  }
  
  @media(max-width: 600px){
    padding: 0 10px;
  }
`;

export const FeatureTitle = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 25px;
  line-height: 1.4;
  font-weight: 300;
`;

export const FeatureText = styled.p`
  color: #232323;
  font-weight: 300;
  padding: 2rem;
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
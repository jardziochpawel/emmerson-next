import styled from "styled-components";
import { BackgroundImage } from 'react-image-and-background-image-fade';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const CardContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: auto;
  
  @media(max-width: 1000px){
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: 'Anton', sans-serif;
  margin: 0;
  padding: 0 0 0 0;
  font-size: 27px;
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 300;
  color: #808080;
`;

export const Box = styled.div`
  position: relative;
  z-index: 99999;
  top: -100px;
  border: 1px solid rgba(128,128,128,.2);
  background-color: white;
  padding: 2rem;
  width: 80%;
  margin: auto;
  height: auto;
  max-height: 270px;

  @media(max-width: 1000px){
    width: 100%;
    top: 0;
  }
  
  @media(max-width: 800px){
    width: 100%;
    top: 0;
  }
`;

export const DescriptionTitle = styled.div`
  font-family: 'Anton', sans-serif;
  font-weight: 100;
  margin: 0;
  padding: 0 0 10px 0;
  font-size: 18px;
`;

export const LocalisationTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: auto;
  line-height: 1.5rem;
  font-size: 16px;
  font-weight: 300;
  color: #999999;

  @media(max-width: 1000px){
    align-items: flex-start;
  }
  
  svg{
    fill: #999999;
    margin-right: 10px;
    
    @media(max-width: 1000px){
      margin-top: 5px;
    }
  }
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  margin: 20px 0;
  padding: 0;
`;

export const List = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  font-size: 14px;
  line-height: 1.5rem;

  @media(max-width: 1000px){
    width: 100%;
  }
`;

export const Param = styled.span`
  color: #999999;
`;

export const Value = styled.span`
  margin-left: 40px;
  color: black;
`;

export const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  line-height: 1.2;
  font-size: 14px;
`;

export const Price = styled.p`
  color: #e0001a;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  padding: 0;
`;

export const Img = styled(BackgroundImage)`
  background: center / cover no-repeat;
  margin: auto;
  border: 1px solid rgba(128,128,128,.2);
  width: 100%;
  padding-top: calc(300 / 400 * 100%);
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const Mask = styled.div`
  position: absolute;
  z-index: 8888;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: transparent;
  
  &:hover {
    color: white;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(224, 0, 9, 0.55);
    span{
      border: 1px solid white;
      padding: 15px 20px;
      &:hover{
        cursor: pointer;
        color: lightgray;
        border-color: lightgray;
      }
    }
  }
`;
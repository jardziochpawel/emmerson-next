import styled from "styled-components";
import { LocationOn } from "@styled-icons/material";
import Link from 'next/link';

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-flow: row;
  padding: 100px 50px;
  justify-content: space-around;
  
  @media(max-width: 1000px){
    flex-flow: row wrap;
    padding: 50px;
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  width: auto;
  min-width: 550px;
  @media(max-width: 1000px){
    min-width: 100%;
    width: 100%;
  }
`;

export const CardHeader = styled.div``;

export const CardBody = styled.div``;

export const LocationIcon = styled(LocationOn)`
  width: 20px;
  height: 20px;
`;

export const Title = styled.h1``;

export const Address = styled.h4`
  a{
    text-decoration: none;
    color: #e00009;
    &:hover{
      color: #a00009;
    }
  }
`;

export const LinkButton = styled(Link)`

`;

export const MapContainer = styled.div`
  width: 100%;
  height: 450px;

`;

export const List = styled.ul`
  padding-left: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-top: 30px;
  &:first-child{
    margin-top: 0;
  }
  :before{
    content: '|||';
    font-weight: bold;
    font-size: 24px;
    word-spacing: 0;
    color: #e00009;
    margin-right: 10px;
  }
`;

export const SubTitle = styled.h2`
  margin-top: 50px;
`;

export const TextBold = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const ShowOnMap = styled.button`
  width: 100%;
  font-size: 20px;
  font-weight: 350;
  padding: 10px;
  border: none;
  background-color: transparent;
  color: #e00009;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: baseline;
  
  &:hover{
    cursor: pointer;
    color: #900009;
  }
`;

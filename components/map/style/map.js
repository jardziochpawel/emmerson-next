import styled from "styled-components";
import { Clear } from '@styled-icons/material';
import {Map} from "react-leaflet-universal";

export const Container = styled.div`
  width: 60%;
  height: calc(60vh + 25px);
  position: fixed;
  z-index: 99990;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  left: calc(-50vw + 50%);
  right: calc(-50vw + 50%);
  top: calc(-50vh + 50%);
  bottom: calc(-50vh + 50%);
`;

export const ContainerWithMap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  z-index: 99999;
`;
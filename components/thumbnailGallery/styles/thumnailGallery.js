import styled, {css} from 'styled-components';
import {BackgroundImage} from "react-image-and-background-image-fade";

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  overflow: hidden;
  justify-content: flex-start;
  align-items: flex-start;
  height: 150px;
`;

export const ThumbnailImageBox = styled.div`
  position: relative;
  min-width: 120px;
  min-height: 70px;
  padding-left: 0;
  padding-right: 0;
  margin-top: 20px;
  z-index: 999;
  margin-left: 10px;
  
  &:first-child{
    margin-left: 0;
  }

  
  &:hover{
    cursor: pointer;
    border: 1px solid black;
  }
`;

export const ThumbnailImage = styled(BackgroundImage)`
  background: center / cover no-repeat;
  min-width: 120px;
  min-height: 70px;
`;
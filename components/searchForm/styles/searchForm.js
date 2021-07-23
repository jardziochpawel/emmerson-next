import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 0 6.1rem;
  background-clip: content-box;
  position: absolute;
  z-index: 9999;
  
  ${({height}) => height ? css`top: calc(${height} - 40px)` : css`top: calc(100vh - 40px)`};
  
  @media (max-width: 1200px){
    padding: 0 3rem;
  }
  
  @media (max-width: 1000px){
    ${({height}) => height ? css`top: calc(${height} + 200px)` : css`top: calc(100vh + 188px)`};
    padding:0;
  } 
`;

export const SectionFilters = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 87px;
  width: 100%;
  flex-basis: 100%;
  background-color: white;
  border: 1px solid rgba(128,128,128,.2);
  border-right: none;
  
  @media (max-width: 1000px) {
    border: 1px solid rgba(128,128,128,.2);
    height: auto;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-basis: 50%;
  }

  @media(max-width: 600px) {
    border: 1px solid rgba(128,128,128,.2);
    flex-basis: 100%;
    height: auto;
    flex-wrap: wrap;
    flex-grow: 1;
  }
`;

export const SectionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 87px;
  width: auto;
  background-color: white;

  @media (max-width: 1000px){
    width: 100%;
  }
`;

export const Bar = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  height: 87px;
  width: 100%;
  background-color: white;
  
  @media (max-width: 1000px){
    flex-wrap: wrap-reverse;
    flex-basis: 50%;
    flex-grow: 1;
  }
`;

export const ShadowBox = styled.div`
  background-clip: content-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 17px 54px -15px rgb(0 0 0 / 60%);
`;

export const ArrowBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  margin: 10px auto;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 12rem;
  
  svg {
    padding-bottom: 5px;
    width: 44px;
  }
  
  @media (max-width: 1000px){
    display: none;
  }
`;

export const MoreButton = styled.button`
 width: 87px;
 min-width: 87px;
 height: 100%;
 border: #c0001a;
 color: white;
 font-size: 16px;
 font-weight: bold;
 background-color: #c0001a;
 cursor: pointer;
 
  &:focus {
    box-shadow: none;
    outline: none;
  }
  &:hover{
    background-color: #a0001a;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 22px;
  width: 10rem;
  min-width: 10rem;
  height: 100%;
  background-color: #e0001a;
  border: #e0001a;
  color: white;
  font-size: 22px;
  font-weight: 300;
  cursor: pointer;
  
  &:focus {
    box-shadow: none;
    outline: none;
  }
  &:hover{
    background-color: #a0001a;
  }

  @media (max-width: 1000px){
    width: 100%;
  }
`;

export const Icon = styled.i`
  .icon-search-plus{
    fill:none;
    stroke: #fff;
    stroke-linejoin:round;
    stroke-width:2px;
  }
  .icon-search{
    width: 20px;
    height: 20px;
  }
  
  ${({plusToMinus})=>plusToMinus && css`
    .icon-search-minus {
        display: none;
    }
  `}
`;
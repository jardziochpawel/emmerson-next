import styled, {css} from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  z-index: 99997;
  ${({isOpenPopup}) => !isOpenPopup && css`display: none;`}
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  flex-flow: column;
  z-index: 99998;
`;

export const Box = styled.div`
  background: #000 url(${({background}) => background ?? background }) center / contain no-repeat;
  width: 100%;
  max-width: 750px;
  height: 0;
  top: 25%;
  padding-top: 31.74%;
  margin: auto;
  overflow: hidden;
  z-index: 999999;
  position: relative;
`;
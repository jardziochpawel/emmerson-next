import styled from "styled-components";
import { Loop } from '@styled-icons/material/Loop';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 150px;
  width: 100%;
`;

export const IconSpinner = styled(Loop)`
  color: black;
  width: 100px;
  height: 100px;
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform:rotate(360deg);
    }
    to {
      transform:rotate(0deg);
    }
  }
`;
import styled from "styled-components";
import {Clear} from "@styled-icons/material";
import {MapContainer} from "react-leaflet";

export const CloseIcon = styled(Clear)`
  color: black;
  height: 25px;
  width: 25px;
  margin-top: 10px;
  margin-right: 10px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 99999;
  border: 2px solid rgba(0,0,0,0.3);
  border-radius: 4px;
`;

export const StyledMap = styled(MapContainer)`
  width: 100%;
  height: 100%;
  border: 3px solid white;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;
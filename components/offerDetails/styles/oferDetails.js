import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 25px;
  border-bottom: 1px solid rgba(0,0,0,0.4);
  border-top: 1px solid rgba(0,0,0,0.4);
`;

export const Title = styled.h3`
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 50px;
`;

export const Column = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
`;

export const List = styled.ul`
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  
  li {
    display: inline;
  }
  
  li:first-child{
    margin-left: 0;
  }
  
  li:nth-child(4) {
    clear: left;
    margin-left: 0;
  }
`;

export const ListItem = styled.li`
  width: 33%;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 20px;
`;

export const Name = styled.div`
  color: dimgray;
  width: 40%;
  white-space: nowrap;
`;

export const Value = styled.div`
  font-weight: 700;
  width: 60%;
  white-space: nowrap;
`;
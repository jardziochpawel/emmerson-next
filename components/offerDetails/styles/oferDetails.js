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
  margin-bottom: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

export const List = styled.div`

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.div`

  @media(min-width: 1400px){
    flex: 1 1 33%;
    max-width: 33%;
  }
  font-size: 15px;
  display: grid;
  grid-column-gap: 6px;
  grid-template-areas: 'title desc';
  grid-template-columns: min-content 1fr;
  flex: 1 1 50%;
  min-height: 30px;
`;

export const Name = styled.div`
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media(max-width: 280px){
    font-size: 0.8rem;
  }
`;

export const Value = styled.div`
  grid-area: desc;
  overflow: initial;
  font-weight: 700;
  text-overflow: initial;
  white-space: initial;

  @media(max-width: 800px){
    white-space: normal;
  }

  @media(max-width: 600px){
    padding-left: 0;
  }

  @media(max-width: 280px){
    font-size: 0.8rem;
  }
`;
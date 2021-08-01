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
  flex-flow: row;
  width: 100%;
`;

export const List = styled.ul`

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0 0 0 10px;
  list-style: none;
  
  @media(min-width: 1400px){
    li:nth-child(3n){
      padding-left: 50px;
    }
  }
`;

export const ListItem = styled.li`
  
  @media(min-width: 1400px){
    width: calc(100% / 3);
  }
  
  width: 50%;
  height: 25px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 15px;
  
  @media(max-width: 800px){
    flex-flow: row;
    align-items: flex-start;
    height: 40px;
  }
  
  @media(max-width: 600px){
    flex-flow: row wrap;
    height: 45px;
  }

`;

export const Name = styled.span`
  color: dimgray;
  white-space: nowrap;

  @media(max-width: 280px){
    font-size: 0.8rem;
  }
`;

export const Value = styled.span`
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-weight: 700;
  white-space: nowrap;

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
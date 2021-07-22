import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  padding: 0 1.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;

  .pagination {
    color: #e00000;
    display: flex;
    flex-flow: row;
    list-style: none;
  }
  
  .pagination > li > a{
    padding: 15px;
    width: 60px;
    height: 60px;
    min-width: 60px;
    border: 1px solid #e00008;
    background: #e00009;
  }
    
  .pagination > li > a {
    font-size: 18px;
    color: white;
    
    &:hover {
      background: #7c0005;
      cursor: pointer;
      border-color: #7c0005;
    }
  }

  .break-me {
    cursor: default;
  }

  .pagination > .active > a {
    border-color: #7c0005;
    background-color: #7c0005;
    color: white;
  }
`;

export const ChoiceButton = styled.select`
  padding: 10px 20px;
  font-size: 18px;
  margin-left: 5vw;
`;

export const ChoiceItem = styled.option`

`;
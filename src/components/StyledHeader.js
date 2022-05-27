import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 90%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  div {
    display: flex;
    align-items: center;
  }

  h2 {
    margin-right: 20px;
    font-size: 16px;

    b {
      margin-left: 10px;
      border-bottom: 3px solid #ffc400;
    }
  }
  
`;

export const StyledTotal = styled.button`
  :hover {
    background-color: white !important;
    border: 2px solid #c62828 !important;
    color: #c62828 !important;
  }
`;

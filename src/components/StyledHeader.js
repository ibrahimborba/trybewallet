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
      border-bottom: 3px solid ${(props) => props.theme.accent};
    }
  }
  
`;

export const StyledTotal = styled.button`
  :hover {
    color: ${(props) => props.theme.attention} !important;
    background-color: ${(props) => props.theme.mainColor} !important;
    border: 2px solid ${(props) => props.theme.attention} !important;
  }
`;

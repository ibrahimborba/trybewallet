import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.secondaryColor};
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

export const StyledToogle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    padding: 4px;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.secondaryColor};
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.secondaryColor};
    transition: .4s;
  }
`;

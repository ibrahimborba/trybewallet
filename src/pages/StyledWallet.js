import styled from 'styled-components';

export const StyledSection = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.secondaryColor};
`;

export const StyledWalletForm = styled.form`
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-top: 30px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x:auto;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-weight: 500;
  }

  input {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.secondaryColor};
    height: 26px;
    outline: 0;
    border-width: 0 0 2px;
    border-color: ${(props) => props.theme.secondaryColor};
    margin-right: 20px;

    ::placeholder {
      color: ${(props) => props.theme.secondaryColor};
      }
    
  }

  select {
    height: 26px;
    outline: 0;
    background-color: ${(props) => props.theme.mainColor};
    border-width: 0 0 2px;
    border-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.secondaryColor};
    margin-right: 20px;
  }

  button {
    height: auto;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.secondaryColor};
    border: 2px solid ${(props) => props.theme.secondaryColor};
    border-radius: 5px;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    transition: 0.2s;
    display: flex;
    align-items: center;
  }

  button:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.mainColor};
  }

  ::-webkit-scrollbar{
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: lightgray;
  }

  ::-webkit-scrollbar-thumb {
    background: gray;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: black;
  }
`;

export const StyledWalletTable = styled.table`
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.secondaryColor};
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  padding: 10px;
  text-align: left;

  th, td {
    height: 18px;
    padding: 5px;
    text-align: left;
    font-size: 14px;
  }

  button {
    margin-top: 5px;
    width: 70px;
    height: 30px;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.secondaryColor};
    border: 2px solid ${(props) => props.theme.secondaryColor};
    border-radius: 5px;
    padding: 5px;
    font-size: 14px;
    font-weight: 600;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.mainColor};
  }
`;

export const StyledDelete = styled.button`
  :hover {
    background-color: ${(props) => props.theme.mainColor} !important;
    border: 2px solid ${(props) => props.theme.attention} !important;
    color: ${(props) => props.theme.attention} !important;
  }
`;

export const StyledEditExpense = styled.tr`
  input {
    width: 100px;
  }
  
  input, select {
    height: 26px;
    outline: 0;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.secondaryColor};
    border-width: 0 0 2px;
    border-color: ${(props) => props.theme.secondaryColor};
  }
`;

import styled from 'styled-components';

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
    height: 26px;
    outline: 0;
    border-width: 0 0 2px;
    border-color: black;
    margin-right: 20px;
  }

  select {
    height: 26px;
    outline: 0;
    background-color: white;
    border-width: 0 0 2px;
    border-color: black;
    margin-right: 20px;
  }

  button {
    height: auto;
    background-color: white;
    border: 2px solid black;
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
    background-color: black;
    color: white;
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
    background-color: white;
    border: 2px solid black;
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
    background-color: black;
    color: white;
  }
`;

export const StyledDelete = styled.button`
  :hover {
    background-color: white !important;
    border: 2px solid #c62828 !important;
    color: #c62828 !important;
  }
`;

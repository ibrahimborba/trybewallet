import styled from 'styled-components';

const StyledLogin = styled.form`
  width: 300px;
  height: auto;
  margin: 0 auto;
  margin-top: 5%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 30px;

  h1 {
    margin: 40px;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  input {
    height: 30px;
    outline: 0;
    border-width: 0 0 2px;
    border-color: black;
  }

  button {
    width: 50%;
    height: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: white;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    transition: 0.2s;
  }

  button:hover:enabled {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

export default StyledLogin;

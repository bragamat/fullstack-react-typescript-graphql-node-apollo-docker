import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Form = styled.form`
  max-width: 50vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input[type="submit"] {
    padding: 0;
    height: 28px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #1eaedb;
    color: white;
  }
  p {
    color: red;
  }
`;

export const Input = styled.input`
  height: 42px;
  font-size: 20px;
  font-weight: lighter;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0 2px;
  margin: 8px 0;
`;

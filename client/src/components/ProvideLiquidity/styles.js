import styled from "styled-components";

export const PLContainer = styled.div`
  width: 100%;
  display: flex;
  // justifyContent:center;
  margin-top: 70px;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 500px;
  height: 400px;
  border: 2px solid black;
  border-radius: 20px;
  position: relative;
  padding: 10px;
`;
export const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  bottom: 25px;
  left: 0px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  cursor: pointer;
  border: 2px solid black;
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

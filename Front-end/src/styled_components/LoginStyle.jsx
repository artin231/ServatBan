import { styled } from "styled-components";

export const LoginForm = styled.form`
  width: 550px;
  height: 625px;
  background-color: #0f0d18;
  border-radius: 30px;
  margin: 2%;
  border: 2px solid #25213d;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 1%;
  transition: all 400ms ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 30px #25213d;
  }
`;

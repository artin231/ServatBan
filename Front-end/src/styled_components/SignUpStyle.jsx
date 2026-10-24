import { styled } from "styled-components";

export const MainDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #070510 url("/src/assets/G76jm.png");
  background-size: cover;
`;

export const SignUpForm = styled.div`
  width: 550px;
  height: 725px;
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

export const ImgFormLogo = styled.img`
  width: 150px;
`;

export const TitleText = styled.h1`
  font-size: 50px;
  margin-top: -3%;
  color: white;
`;

export const InputListDiv = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const InputListDivItem = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

export const InputListDivItemTitile = styled.p`
  margin-right: 7%;
  font-size: 20px;
  color: white;
  align-self: flex-end;
  font-weight: lighter;
`;

export const InputListDivItemInput = styled.input`
  width: 85%;
  align-self: center;
  height: 50px;
  background-color: #13111c;
  border-radius: 10px;
  border: 2px solid #201e29;
  outline: none;
  direction: rtl;
  color: white;
  font-size: 20px;
`;

export const ButtonSubmitFormSignUp = styled.button`
  width: 85%;
  height: 50px;
  background: linear-gradient(90deg, #371782, #612ac5);
  border-radius: 10px;
  outline: none;
  direction: rtl;
  color: white;
  font-size: 20px;
  border: none;
  justify-self: center;
  align-self: center;
`;

export const LinkToLogin = styled.a`
  display: flex;
  direction: rtl;
  text-decoration: none;
  margin-top: -5%;
  color: #6a40a1;
`;

export const InputDivSignUp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InputIconImage = styled.img`
  width: 40px;
  position: absolute;
  left: 10%;
  cursor: pointer;
`;

import { Link } from "react-router-dom";
import {
  MainDiv,
  SignUpForm,
  ImgFormLogo,
  TitleText,
  InputListDiv,
  InputListDivItem,
  InputListDivItemTitile,
  InputListDivItemInput,
  ButtonSubmitFormSignUp,
  LinkToLogin,
  InputDivSignUp,
  InputIconImage,
} from "../styled_components/SignUpStyle.jsx";
import { useState } from "react";
import BaseForm from "../components/Login/BaseLoginForm.jsx";

let LoginPage = () => {
  return (
    <>
      <MainDiv>
        <BaseForm />
      </MainDiv>
    </>
  );
};

export default LoginPage;

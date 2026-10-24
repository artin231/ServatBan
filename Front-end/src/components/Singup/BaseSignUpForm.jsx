import { SignUpForm, ImgFormLogo, TitleText } from "../../styled_components/SignUpStyle";
import ListInputs from "./ListInputSignUp";

const BaseForm = () => {
  return (
    <>
      <SignUpForm>
        <ImgFormLogo src="/src/assets/Gemini_Generated_Image_buugkwbuugkwbuug-removebg-preview.png" />
        <TitleText>ثبت نام</TitleText>
        <ListInputs />
      </SignUpForm>
    </>
  );
};

export default BaseForm;

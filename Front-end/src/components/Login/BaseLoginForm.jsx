import { SignUpForm, ImgFormLogo, TitleText } from "../../styled_components/SignUpStyle";
import { LoginForm } from "../../styled_components/LoginStyle";
import ListInputs from "./ListInputLogin";

const BaseForm = () => {
  return (
    <>
      <LoginForm>
        <ImgFormLogo src="/src/assets/Gemini_Generated_Image_buugkwbuugkwbuug-removebg-preview.png" />
        <TitleText>ورود</TitleText>
        <ListInputs />
      </LoginForm>
    </>
  );
};

export default BaseForm;

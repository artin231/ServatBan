import { useContext } from "react";
import {
  ButtonSubmitFormSignUp,
  InputListDivItem,
  LinkToLogin,
  InputListDiv,
} from "../../styled_components/SignUpStyle";
import ItemInputList from "./ItemInputSignUp";
import { MoneyContext } from "../../context/MoneyContext";

const ListInputs = () => {
  let data = useContext(MoneyContext);
  return (
    <InputListDiv>
      <ItemInputList id="NameInputSignUp" title="نام" type="text" />
      <ItemInputList id="EmailInputSignUp" title="ایمیل" type="email" />
      <ItemInputList id="PasswordInputSignUp" title="رمز عبور" type="password" />

      <InputListDivItem>
        <ButtonSubmitFormSignUp
          onClick={() => {
            data.SignUpHandler();
          }}
          type="button"
          id="ButtonSubmitSignUp"
        >
          ثبت اطلاعات
        </ButtonSubmitFormSignUp>
      </InputListDivItem>
      <LinkToLogin href="/login">
        حساب کاربری داری؟
        <p style={{ color: "white" }}>ورود</p>
      </LinkToLogin>
    </InputListDiv>
  );
};

export default ListInputs;

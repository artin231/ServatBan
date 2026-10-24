import { useContext } from "react";
import {
  ButtonSubmitFormSignUp,
  InputListDivItem,
  LinkToLogin,
  InputListDiv,
} from "../../styled_components/SignUpStyle";
import ItemInputList from "./ItemInputLogin";
import { MoneyContext } from "../../context/MoneyContext";

const ListInputs = () => {
  let data = useContext(MoneyContext);
  return (
    <InputListDiv>
      <ItemInputList id="EmailInputLogin" title="ایمیل" type="email" />
      <ItemInputList id="PasswordInputLogin" title="رمز عبور" type="password" />

      <InputListDivItem>
        <ButtonSubmitFormSignUp
          onClick={() => {
            data.LoginHandler();
          }}
          type="button"
          id="ButtonSubmitLogin"
        >
          ثبت اطلاعات
        </ButtonSubmitFormSignUp>
      </InputListDivItem>
      <LinkToLogin href="/signup">
        حساب نداری؟
        <p style={{ color: "white" }}>ثبت نام</p>
      </LinkToLogin>
    </InputListDiv>
  );
};

export default ListInputs;

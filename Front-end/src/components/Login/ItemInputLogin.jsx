import { useContext } from "react";
import { MoneyContext } from "../../context/MoneyContext";
import {
  InputDivSignUp,
  InputListDivItem,
  InputListDivItemInput,
  InputListDivItemTitile,
  InputIconImage,
} from "../../styled_components/SignUpStyle";

const ItemInputList = ({ id, type, title }) => {
  let data = useContext(MoneyContext);
  if (id == "PasswordInputLogin") {
    return (
      <InputListDivItem>
        <InputListDivItemTitile>{title}</InputListDivItemTitile>
        <InputDivSignUp>
          <InputIconImage
            src={data.show_pass ? "/src/assets/eye_off.svg" : "/src/assets/eye_show.svg"}
            onClick={() => {
              data.PasswordShowHandler();
            }}
          />
          <InputListDivItemInput id={id} type={data.show_pass ? "text" : "password"} />
        </InputDivSignUp>
      </InputListDivItem>
    );
  } else {
    return (
      <InputListDivItem>
        <InputListDivItemTitile>{title}</InputListDivItemTitile>
        <InputListDivItemInput id={id} type={type} />
      </InputListDivItem>
    );
  }
};

export default ItemInputList;

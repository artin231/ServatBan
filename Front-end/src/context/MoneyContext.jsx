import { createContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link, Navigate } from "react-router";

export let MoneyContext = createContext();

export function FuncProvider({ children }) {
  let [show_pass, change_show_pass] = useState(false);

  const PasswordShowHandler = () => {
    change_show_pass(!show_pass);
  };

  const SignUpHandler = async () => {
    let name = document.getElementById("NameInputSignUp");
    let email = document.getElementById("EmailInputSignUp");
    let password = document.getElementById("PasswordInputSignUp");
    let btn_submit = document.getElementById("ButtonSubmitSignUp");

    try {
      let res = await fetch("http://localhost:5500/api/user/signup", {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.value, email: email.value, password: password.value }),
        method: "POST",
      });
      let data = await res.json();
      console.log(data);
      if (data.error) {
        btn_submit.style.background = "red";
        if (data.error == '\"name\" is not allowed to be empty') {
          btn_submit.innerHTML = "نام نمیتواند خالی باشد";
        } else if (data.error == '\"email\" is not allowed to be empty') {
          btn_submit.innerHTML = "ایمیل نمیتواند خالی باشد";
        } else if (data.error == '\"email\" must be a valid email') {
          btn_submit.innerHTML = "ایمیل درست نیست";
        } else if (data.error == '\"password\" is not allowed to be empty') {
          btn_submit.innerHTML = "رمز عبور نمیتواند خالی باشد";
        } else if (data.error == '\"password\" length must be at least 3 characters long') {
          btn_submit.innerHTML = "رمز عبور باید بالای ۳ حرف باشد";
        } else if (data.error == '\"name\" length must be at least 3 characters long') {
          btn_submit.innerHTML = "نام نمیتواند زیر ۳ حرف باشد";
        } else if (
          data.error == '\"name\" length must be less than or equal to 200 characters long'
        ) {
          btn_submit.innerHTML = "نام نمیتواند بیشتر از ۲۰۰ حرف باشد";
        } else if (
          data.error == '\"password\" length must be less than or equal to 400 characters long'
        ) {
          btn_submit.innerHTML = "رمز عبور نمیتواند بیشتر از ۴۰۰ حرف باشد";
        } else if (data.error == "the email is not unique") {
          btn_submit.innerHTML = "ایمیل تکراری است.";
        } else if (data.error == "there was a error") {
          btn_submit.innerHTML = "مشکلی پیش آمد";
        } else {
          btn_submit.innerHTML = data.error.replace('"', "");
        }
      } else if (data.status == "succses") {
        btn_submit.style.background = "linear-gradient(90deg, rgb(55, 23, 130), rgb(97, 42, 197))";
        btn_submit.innerHTML = "ثبت اطلاعات";
        withReactContent(Swal).fire({
          title: <p>عملیات با موفقیت انجام شد</p>,
          icon: "success",
          html: <a href="/login">رفتن به صفحه ورود</a>,
        });
      }
    } catch (err) {
      btn_submit.style.background = "red";
      btn_submit.innerHTML = "مشکلی پیش آمد";
      console.log(err);
    }
  };

  const LoginHandler = async () => {
    let email = document.getElementById("EmailInputLogin");
    let password = document.getElementById("PasswordInputLogin");
    let btn_submit = document.getElementById("ButtonSubmitLogin");

    try {
      let res = await fetch("http://localhost:5500/api/user/login", {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.value, password: password.value }),
        method: "POST",
      });
      let data = await res.json();
      if (data.error) {
        btn_submit.style.background = "red";
        if (data.error == '\"email\" is not allowed to be empty') {
          btn_submit.innerHTML = "ایمیل نمیتواند خالی باشد";
        } else if (data.error == '\"email\" must be a valid email') {
          btn_submit.innerHTML = "ایمیل درست نیست";
        } else if (data.error == '\"password\" is not allowed to be empty') {
          btn_submit.innerHTML = "رمز عبور نمیتواند خالی باشد";
        } else if (data.error == '\"password\" length must be at least 3 characters long') {
          btn_submit.innerHTML = "رمز عبور باید بالای ۳ حرف باشد";
        } else if (
          data.error == '\"password\" length must be less than or equal to 400 characters long'
        ) {
          btn_submit.innerHTML = "رمز عبور نمیتواند بیشتر از ۴۰۰ حرف باشد";
        } else if (data.error == "the email is not unique") {
          btn_submit.innerHTML = "ایمیل تکراری است.";
        } else if (data.error == "there was a error") {
          btn_submit.innerHTML = "مشکلی پیش آمد";
        } else if (data.error == "the email or password is not correct") {
          btn_submit.innerHTML = "ایمیل یا رمز عبور اشتیاه است";
        } else {
          btn_submit.innerHTML = data.error.replaceAll('"', "");
        }
      } else if (data.status == "succses") {
        btn_submit.style.background = "linear-gradient(90deg, rgb(55, 23, 130), rgb(97, 42, 197))";
        btn_submit.innerHTML = "ثبت اطلاعات";
        withReactContent(Swal).fire({
          title: <p>عملیات با موفقیت انجام شد</p>,
          icon: "success",
          html: <a href="/">رفتن به صفحه اصلی</a>,
        });
      }
    } catch (err) {
      btn_submit.style.background = "red";
      btn_submit.innerHTML = "مشکلی پیش آمد";
      console.log(err);
    }
  };

  return (
    <MoneyContext.Provider
      value={{ PasswordShowHandler, show_pass, change_show_pass, SignUpHandler, LoginHandler }}
    >
      {children}
    </MoneyContext.Provider>
  );
}

import { useEffect, useState } from "react";
import {
  HeaderList,
  HeaderListItem,
  HeaderListItemIcon,
  HeaderLogoSite,
  HeaderMainDiv,
  MainDiv,
  TitleWaletDiv,
  WaletAddBoxIcon,
  WaletAddInnerModal,
  WaletAddInnerModalButton,
  WaletAddInnerModalCross,
  WaletAddOuterModal,
  WaletAssInnerModalInput,
  WaletDiv,
  WaletList,
  WaletListItem,
  WaletListItemIcon,
} from "../../styled_components/main_page.jsx";
import { Link } from "react-router-dom";

const MainComponent = () => {
  let [fetch_data, change_data] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5500/api/walet/get_walets", {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        change_data(data);
      }, [])
      .catch((err) => {
        change_data({ error: "there was a error" });
        console.log(err);
      });
  }, []);
  const ModalAddHandler = () => {
    let modalOuter = document.getElementById("modalAdd");
    modalOuter.style.display = "flex";
    modalOuter.style.alignItems = "center";
  };
  const CloseModalAdd = () => {
    let modalOuter = document.getElementById("modalAdd");
    modalOuter.style.display = "none";
  };
  const SubmitModalAddManager = async () => {
    let value = document.getElementById("ValueModalInputAdd");
    let btn = document.getElementById("BtnSubmitModalAdd");
    try {
      let res = await fetch("http://localhost:5500/api/walet/insertWalet", {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: value.value }),
      });
      let data = await res.json();
      if (data.status == "sucsses") {
        window.location.reload();
      } else if (data.error) {
        btn.style.backgroundColor = "red";
        btn.style.width = "90%";
        if (data.error == "there was a error") {
          btn.innerHTML = "مشکلی پیش آمد";
        } else if (data.error == '\"value\" must be a number') {
          btn.innerHTML = "مقدار وارد شده صحیح نیست";
        } else {
          btn.innerHTML = data.error;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (!fetch_data) {
    return <h1>loading...</h1>;
  } else if (fetch_data.error) {
    return <h1>there was a error</h1>;
  } else {
    return (
      <>
        <MainDiv>
          <WaletAddOuterModal id="modalAdd">
            <WaletAddInnerModal>
              <WaletAddInnerModalCross
                src="/src/assets/cross.svg"
                onClick={() => {
                  CloseModalAdd();
                }}
                alt=""
              />
              <p>اضافه کردن حساب</p>
              <WaletAssInnerModalInput
                type="number"
                id="ValueModalInputAdd"
                name=""
                placeholder="مقدار پول اولیه"
              />
              <WaletAddInnerModalButton
                type="button"
                onClick={() => {
                  SubmitModalAddManager();
                }}
                id="BtnSubmitModalAdd"
              >
                submit
              </WaletAddInnerModalButton>
            </WaletAddInnerModal>
          </WaletAddOuterModal>
          <HeaderMainDiv>
            <HeaderLogoSite src="/src/assets/Gemini_Generated_Image_buugkwbuugkwbuug-removebg-preview.png" />
            <HeaderList>
              <HeaderListItem>
                <h1>صفحه اصلی</h1>
                <HeaderListItemIcon src="/src/assets/home.svg" />
              </HeaderListItem>
              {fetch_data.map((i, index) => {
                return (
                  <HeaderListItem>
                    <h1>حساب {index + 1}</h1>
                    <HeaderListItemIcon src="/src/assets/money.svg" />
                  </HeaderListItem>
                );
              })}
            </HeaderList>
          </HeaderMainDiv>
          <WaletDiv>
            <TitleWaletDiv>حساب ها</TitleWaletDiv>
            <WaletAddBoxIcon
              onClick={() => {
                ModalAddHandler();
              }}
            >
              +
            </WaletAddBoxIcon>
            <WaletList>
              {fetch_data.map((i, index) => {
                return (
                  <>
                    <a href="/login" style={{ textDecoration: "none" }} target="_blank">
                      <WaletListItem>
                        <WaletListItemIcon src="/src/assets/money.svg" />
                        <h1>حساب {index + 1}</h1>
                        <p>مقدار پول : {i.value} ریال</p>
                      </WaletListItem>
                    </a>
                  </>
                );
              })}
            </WaletList>
          </WaletDiv>
        </MainDiv>
      </>
    );
  }
};

export default MainComponent;

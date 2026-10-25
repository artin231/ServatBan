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
  if (!fetch_data) {
    return <h1>loading...</h1>;
  } else if (fetch_data.error) {
    return <h1>there was a error</h1>;
  } else {
    return (
      <>
        <MainDiv>
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
            <WaletAddBoxIcon>+</WaletAddBoxIcon>
            <WaletList>
              {fetch_data.map((i, index) => {
                return (
                  <>
                    <a href="/login" style={{ textDecoration: "none" }} target="_blank">
                      <WaletListItem>
                        <WaletListItemIcon src="/src/assets/money.svg" />
                        <h1>حساب {index + 1}</h1>
                        <p>مقدار پول : {i.value}</p>
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

import { useEffect, useState } from "react";
import {
  HeaderMainDiv,
  MainDiv,
  TitleWaletDiv,
  WaletAddBoxIcon,
  WaletDiv,
  WaletList,
  WaletListItem,
} from "../../styled_components/main_page.jsx";

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
          <HeaderMainDiv></HeaderMainDiv>
          <WaletDiv>
            <TitleWaletDiv>حساب ها</TitleWaletDiv>
            <WaletAddBoxIcon>+</WaletAddBoxIcon>
            <WaletList>
              {fetch_data.map((i, index) => {
                return (
                  <>
                    <WaletListItem>
                      <h1>walet {index}</h1>
                      <p>value:{i.value}</p>
                    </WaletListItem>
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

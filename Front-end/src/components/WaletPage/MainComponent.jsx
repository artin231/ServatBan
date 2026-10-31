import {
  HeaderList,
  HeaderListItem,
  HeaderListItemIcon,
  HeaderLogoSite,
  HeaderMainDiv,
  MainDiv,
  WaletDiv,
} from "../../styled_components/main_page";

const MainComponentWalet = () => {
  return (
    <>
      <MainDiv>
        <HeaderMainDiv>
          <HeaderLogoSite src="/src/assets/Gemini_Generated_Image_buugkwbuugkwbuug-removebg-preview.png" />
          <HeaderList>
            <HeaderListItem>
              <a style={{ fontSize: "30px", color: "unset", textDecoration: "none" }} href="/">
                بازگشت
              </a>
              <HeaderListItemIcon src="/src/assets/home.svg" />
            </HeaderListItem>
            <HeaderListItem>
              <a style={{ fontSize: "30px", color: "unset", textDecoration: "none" }} href="/">
                تغییرات حساب
              </a>
              <HeaderListItemIcon src="/src/assets/money.svg" />
            </HeaderListItem>
          </HeaderList>
        </HeaderMainDiv>
        <WaletDiv></WaletDiv>
      </MainDiv>
    </>
  );
};

export default MainComponentWalet;

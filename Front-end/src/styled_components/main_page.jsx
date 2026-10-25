import styled from "styled-components";

export const MainDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background: #070510;
  align-items: center;
  padding: 1%;
  gap: 20px;
`;

export const WaletDiv = styled.div`
  overflow: auto;
  width: 75%;
  height: 97%;
  background-color: #0f0d18;
  display: flex;
  border: 2px solid #25213d;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  justify-content: flex-start;
  padding-top: 5%;
  transition: all 400ms ease;
  &:hover {
    transform: scale(1.001);
    box-shadow: 0px 0px 30px #25213d;
  }
`;

export const HeaderMainDiv = styled.div`
  width: 24%;
  height: 97%;
  background-color: #0f0d18;
  border: 2px solid #25213d;
  border-radius: 20px;
  transition: all 400ms ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: auto;
  gap: 40px;
  padding-top: 2%;
  &:hover {
    transform: scale(1.001);
    box-shadow: 0px 0px 30px #25213d;
  }
`;

export const HeaderLogoSite = styled.img`
  width: 30%;
`;

export const HeaderList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const HeaderListItem = styled.div`
  width: 90%;
  height: 80px;
  background: #221e34;
  border-radius: 20px;
  transition: all 400ms ease;
  color: #9080d7;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15%;
  cursor: pointer;
  gap: 10%;
  &:hover {
    transform: translateY(-2%);
    box-shadow: 0px 0px 30px #221e34;
  }
`;

export const HeaderListItemIcon = styled.img`
  width: 50px;
`;

export const TitleWaletDiv = styled.h1`
  font-size: 60px;
  color: #9080d7;
`;

export const WaletList = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
`;

export const WaletListItem = styled.div`
  width: 400px;
  height: 400px;
  cursor: pointer;
  background: #221e34;
  border-radius: 30px;
  transition: all 400ms ease;
  color: #9080d7;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  &:hover {
    transform: translateY(-2%);
    box-shadow: 0px 0px 30px #221e34;
  }
`;
export const WaletAddBoxIcon = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #221e34;
  cursor: pointer;
  border-radius: 20px;
  font-size: 70px;
  transition: all 400ms ease;
  color: #9080d7;
  &:hover {
    transform: translateY(-2%);
    box-shadow: 0px 0px 30px #221e34;
  }
`;
export const WaletListItemIcon = styled.img`
  width: 200px;
`;

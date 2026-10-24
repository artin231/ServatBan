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
  width: 75%;
  height: 97%;
  background-color: #0f0d18;
  display: flex;
  border: 2px solid #25213d;
  border-radius: 20px;
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
  &:hover {
    transform: scale(1.001);
    box-shadow: 0px 0px 30px #25213d;
  }
`;

import { useContext, useEffect, useState } from "react";
import { MoneyContext } from "../context/MoneyContext";
import { Navigate } from "react-router-dom";
import MainComponent from "../components/MainPage/MainComponent";

let MainPage = () => {
  let [dt_fetch, change_dt] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5500/api/user/profile", {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        change_dt(data);
      });
  }, []);
  if (!dt_fetch) {
    return <h1>loading...</h1>;
  } else if (dt_fetch.error) {
    return <Navigate to="/signup" />;
  } else {
    return <MainComponent />;
  }
};

export default MainPage;

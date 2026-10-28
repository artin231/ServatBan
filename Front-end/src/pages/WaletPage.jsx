import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const WaletPage = () => {
  let { waletId } = useParams();
  let [fetch_data, change_data] = useState("null");
  useEffect(() => {
    fetch("http://localhost:5500/api/walet/get_walet", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ walet_id: waletId }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        change_data(data);
        console.log(data);
      });
  }, [waletId]);

  if (fetch_data === "null") {
    console.log(fetch_data);
    return <h1>loading...</h1>;
  } else if (!fetch_data[0]) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        <h1>{waletId}</h1>
      </>
    );
  }
};

export default WaletPage;

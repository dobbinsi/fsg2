import React from "react";

const style = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

function Loader() {
  return (
    <div style={style}>
      <h1>LOADING...</h1>
    </div>
  );
}

export default Loader;

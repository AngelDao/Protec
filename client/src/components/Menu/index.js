import React from "react";

const Menu = () => {
  return (
    <div
      style={{
        width: "350px",
        height: "40px",
        border: "2px solid black",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "20px", marginRight: "20px" }}>Hedge</span>
      <span style={{ fontSize: "20px" }}>Provide Liquidity</span>
    </div>
  );
};

export default Menu;

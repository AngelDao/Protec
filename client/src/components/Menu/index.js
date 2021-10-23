import React from "react";
import { MenuItem } from "./styles";
import { withRouter } from "react-router-dom";

const Menu = ({ history, location }) => {
  const changeRoute = (route) => {
    history.push(route);
  };

  const isHedge = location.pathname === "/hedge";
  const isPL = location.pathname === "/provide-liquidity";
  const isPositions = location.pathname === "/positions";

  return (
    <div
      style={{
        width: "400px",
        height: "40px",
        border: "2px solid black",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MenuItem
        selected={isHedge}
        onClick={() => changeRoute("/hedge")}
        style={{ marginRight: "20px" }}
      >
        Hedge
      </MenuItem>
      <MenuItem
        selected={isPL}
        onClick={() => changeRoute("/provide-liquidity")}
        style={{ marginRight: "20px" }}
      >
        Provide Liquidity
      </MenuItem>
      <MenuItem
        selected={isPositions}
        onClick={() => changeRoute("/positions")}
      >
        Positions
      </MenuItem>
    </div>
  );
};

export default withRouter(Menu);

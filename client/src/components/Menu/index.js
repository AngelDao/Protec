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
        width: "500px",
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
        onClick={() => window.location="https://app.pods.finance/pool/0xA9ebb45e94853426905ceF187cD7ae41C7cFC34d#add"}
        style={{ marginRight: "20px" }}
      >
        Manage Liquidity ↗
      </MenuItem>
      <MenuItem
        selected={isPositions}
        onClick={() => window.location="https://komodo.redstone.finance/#/token-sponsor/CSC=F"}
      >
        Mint Commodities ↗
      </MenuItem>
    </div>
  );
};

export default withRouter(Menu);

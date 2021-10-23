import React, { useContext } from "react";
import CredentialsContext from "../../context/credentialsContext";
import Hedge from "../../components/Hedge";
import ProvideLiquidity from "../../components/ProvideLiquidity";
import { withRouter } from "react-router";
import Positions from "../../components/Positions";

const Content = ({ history, location }) => {
  const { account, handleConnectWallet } = useContext(CredentialsContext);
  const isHedge = location.pathname === "/hedge";
  const isPL = location.pathname === "/provide-liquidity";
  return (
    <div>
      {isHedge ? <Hedge /> : isPL ? <ProvideLiquidity /> : <Positions />}
    </div>
  );
};

export default withRouter(Content);

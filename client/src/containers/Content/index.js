import React, { useContext } from "react";
import CredentialsContext from "../../context/credentialsContext";
import Hedge from "../../components/Hedge";
import ProvideLiquidity from "../../components/ProvideLiquidity";
import { withRouter } from "react-router";

const Content = ({ history, location }) => {
  const { account, handleConnectWallet } = useContext(CredentialsContext);
  const isHedge = location.pathname === "/hedge";
  return <div>{isHedge ? <Hedge /> : <ProvideLiquidity />}</div>;
};

export default withRouter(Content);

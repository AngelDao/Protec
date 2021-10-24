import React, { useContext, useEffect } from "react";
import CredentialsContext from "../../context/credentialsContext";
import {
  Button,
  FormContainer,
  HedgeContainer,
  ButtonContainer,
} from "./styles";
import Dropdown from "../Dropdown";
import optionsMetaData from "../../utils/optionsMetaData";

const Positions = () => {
  const { account, handleConnectWallet, switchModal, optionContracts } =
    useContext(CredentialsContext);

  const underlying = {
    CORN: "CORN",
    CHEESE: "CHEESE",
    MILK: "MILK",
    GAS: "GAS",
    CATTLE: "CATTLE",
  };

  const strikeAndExpiry = [];

  optionsMetaData.options.forEach((e) => {
    const obj = { expiry: e.expiration, strikePrice: e.strikePrice / 10 ** 6 };
    strikeAndExpiry.push(obj);
  });


  useEffect(() => {
    const ops = [];
    for (const optionContract of optionContracts) {
      optionContract.methods.balanceOf(account).call().then(bal => {
        optionContract.methods.name().call().then(name => {
          ops.push({name: name, bal: bal})
        })
      })
    }
    const provisions = getProvisions()
  })

  return (
    <div>
      <HedgeContainer>
        <div style={{ width: "460px", marginBottom: "10px" }}>
          <span style={{ fontSize: "20px" }}>Options</span>
        </div>
        <FormContainer style={{ height: "225px" }}></FormContainer>
      </HedgeContainer>
      <HedgeContainer style={{ marginTop: "30px" }}>
        <div style={{ width: "460px", marginBottom: "10px" }}>
          <span style={{ fontSize: "20px" }}>Liquidity Provisions</span>
        </div>
        <FormContainer style={{ height: "225px" }}></FormContainer>
      </HedgeContainer>
    </div>
  );
};

export default Positions;

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
import  getErc20Contract  from "../helpers/getContract";

const Positions = () => {
  const { account, handleConnectWallet, switchModal } =
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
    const opts = getOption()

    const provisions = async() => {
      let userProvisions =[];
      for(let i=0; i < optionAMMPoolcontracts.length; i++) {
        let tempDepositSnapshot = await optionAMMPoolcontracts[i].getUserDepositSnapshot();
        if(tempDepositSnapshot[0] != 0 && tempDepositSnapshot[1] !=0 ) {
          let assetAaddress = await optionAMMPoolcontracts[i].tokenA();
          let assetA = await getErc20Contract(assetAaddress, account);
          let assetAName = await assetA.name();
          userProvisions.push({
            optionName:`Option AMM Pool ${assetAName}`,
            optionABal:tempDepositSnapshot[0],
            optionBBal:tempDepositSnapshot[1],

          });
        }
        if(userProvisions.length >0) {
          return userProvisions;
        } else {
          return 0;
        }
        
      }

    };
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

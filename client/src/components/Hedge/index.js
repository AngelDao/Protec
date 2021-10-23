import React, { useContext } from "react";
import CredentialsContext from "../../context/credentialsContext";
import {
  Button,
  FormContainer,
  HedgeContainer,
  ButtonContainer,
} from "./styles";
import Dropdown from "../Dropdown";
const Hedge = () => {
  const { account, handleConnectWallet } = useContext(CredentialsContext);

  const underlying = {
    CORN: "CORN",
    CHEESE: "CHEESE",
    MILK: "MILK",
    GAS: "GAS",
    CATTLE: "CATTLE",
  };

  return (
    <HedgeContainer>
      <div style={{ width: "460px", marginBottom: "10px" }}>
        <span style={{ fontSize: "20px" }}>Hedge With Calls</span>
      </div>
      <FormContainer>
        <div>
          <span style={{ marginLeft: "20px", marginBottom: "20px" }}>
            Underlying
          </span>
          <Dropdown options={underlying} />
          <span style={{ marginLeft: "20px", marginBottom: "20px" }}>
            Strike Price & Expiry
          </span>
          <Dropdown options={{}} />
          <span style={{ marginLeft: "20px", marginBottom: "20px" }}>
            Amount of Underlying to buy in USDC
          </span>
          <div
            style={{
              width: "100%",
              border: "2px solid black",
              height: "50px",
              borderRadius: "20px",
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              style={{
                outline: "none",
                fontSize: "18px",
                width: "80%",
                marginLeft: "20px",
                background: "",
                height: "45px",
              }}
            />
            <div
              style={{
                width: "13%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span>USDC</span>
            </div>
          </div>
        </div>
        <ButtonContainer>
          <Button onClick={() => !account.address && handleConnectWallet()}>
            {account.address ? <span>Hedge</span> : <span>Connect Wallet</span>}
          </Button>
        </ButtonContainer>
      </FormContainer>
    </HedgeContainer>
  );
};

export default Hedge;

import React, { useContext } from "react";
import CredentialsContext from "../../context/credentialsContext";
import {
  Button,
  FormContainer,
  HedgeContainer,
  ButtonContainer,
} from "./styles";
import Dropdown from "../Dropdown";
import optionsMetaData from "../../utils/optionsMetaData";
import optionsResults from "../../utils/optionsResults";

const Hedge = () => {
  const {
    account,
    handleConnectWallet,
    switchModal,
    setModalContent,
    setAmount,
  } = useContext(CredentialsContext);

  // const underlying = optionsResults.map((e) => {
  //   return e["Underlying asset"];
  // });

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
          <Dropdown
            page={"hedge"}
            component={"underlying"}
            options={underlying}
            initial={"CHEESE"}
          />
          <span style={{ marginLeft: "20px", marginBottom: "20px" }}>
            Strike Price & Expiry
          </span>
          <Dropdown
            page={"hedge"}
            component={"strikePrice"}
            options={strikeAndExpiry}
            initial={false}
            type={"expiry"}
            initialIndex={0}
          />
          <span style={{ marginLeft: "20px", marginBottom: "20px" }}>
            Amount of Option in USDC
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
              onChange={(e) => {
                console.log(e.target.value);
                setAmount(e.target.value);
              }}
              style={{
                outline: "none",
                fontSize: "18px",
                width: "80%",
                marginLeft: "20px",
                background: "",
                height: "45px",
              }}
              type="number"
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
          <Button
            onClick={() => {
              if (!account.address) {
                handleConnectWallet();
              } else {
                switchModal(true);
                setModalContent({
                  title: "Hedge",
                  content:
                    "You are buying a call option that will go up if the underlying asset price goes up and will go down if the underlying asset price goes down.",
                });
              }
            }}
          >
            {account.address ? <span>Hedge</span> : <span>Connect Wallet</span>}
          </Button>
        </ButtonContainer>
      </FormContainer>
    </HedgeContainer>
  );
};

export default Hedge;

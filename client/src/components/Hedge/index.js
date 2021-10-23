import React, { useContext } from "react";
import CredentialsContext from "../../context/credentialsContext";
import {
  Button,
  FormContainer,
  HedgeContainer,
  ButtonContainer,
} from "./styles";
const Hedge = () => {
  const { account, handleConnectWallet } = useContext(CredentialsContext);
  return (
    <HedgeContainer>
      <div style={{ width: "460px", marginBottom: "10px" }}>
        <span style={{ fontSize: "20px" }}>Hedge With Calls</span>
      </div>
      <FormContainer>
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

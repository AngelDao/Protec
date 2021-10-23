import React, { useContext } from "react";
import CredentialsContext from "../../context/credentialsContext";
import { Button, FormContainer, PLContainer, ButtonContainer } from "./styles";
const ProvideLiquidity = () => {
  const { account, handleConnectWallet } = useContext(CredentialsContext);
  return (
    <PLContainer>
      <div style={{ width: "460px", marginBottom: "10px" }}>
        <span style={{ fontSize: "20px" }}>Provide Liquidity</span>
      </div>
      <FormContainer>
        <ButtonContainer>
          <Button onClick={() => !account.address && handleConnectWallet()}>
            {account.address ? <span>Hedge</span> : <span>Connect Wallet</span>}
          </Button>
        </ButtonContainer>
      </FormContainer>
    </PLContainer>
  );
};

export default ProvideLiquidity;

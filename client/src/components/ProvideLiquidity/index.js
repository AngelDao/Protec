import React, { useContext, useState } from "react";
import CredentialsContext from "../../context/credentialsContext";
import { Button, FormContainer, PLContainer, ButtonContainer } from "./styles";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react"

const ProvideLiquidity = () => {
  const { account, handleConnectWallet } = useContext(CredentialsContext);

  const [percentToRemove, setPercentToRemove] = useState(0);
  return (
    <PLContainer>
      <div style={{ width: "460px", marginBottom: "10px" }}>
        <span style={{ fontSize: "20px" }}>Provide Liquidity</span>
      </div>
      <FormContainer>

      <p>Your Position:</p>

      <p>Select the percentage you want to remove:</p>
              <Slider aria-label="slider-ex-1" defaultValue={0} onChangeEnd={(val) => setPercentToRemove(val)}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
<p>{percentToRemove}%</p>
<br/><br/>
        <ButtonContainer>
          <Button onClick={() => !account.address && handleConnectWallet()}>
            {account.address ? <span>Provide Liquidity</span> : <span>Connect Wallet</span>}
          </Button>
        </ButtonContainer>
      </FormContainer>
    </PLContainer>
  );
};

export default ProvideLiquidity;

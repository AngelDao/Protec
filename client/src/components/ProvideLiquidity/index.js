import React, { useContext, useState } from "react";
import CredentialsContext from "../../context/credentialsContext";
import { Button, FormContainer, PLContainer, ButtonContainer } from "./styles";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react"
import Dropdown from "../Dropdown";
import { MenuItem } from "./styles";

const ProvideLiquidity = () => {
  const { account, handleConnectWallet } = useContext(CredentialsContext);

  const [percentToRemove, setPercentToRemove] = useState(0);
  const [display, setDisplay] = useState("Add");
  return (
    <PLContainer>
      <div style={{ width: "460px", marginBottom: "10px" }}>
        {display=="Add" ? 
          <span style={{ fontSize: "20px" }}>Add Liquidity</span>
          :
          <span style={{ fontSize: "20px" }}>Remove Liquidity</span>
        }
      </div>
      <FormContainer>
          <div
            style={{
              width: "350px",
              height: "40px",
              border: "2px solid black",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"0 auto"
            }}
          >
            <MenuItem
              onClick={() => setDisplay("Add")}
              style={{ marginRight: "20px" }}
            >
              Add
            </MenuItem>
            <MenuItem 
            onClick={() => setDisplay("Remove")}
            >
              Remove
            </MenuItem>

          </div>
          {display=="Add" ? (
            <>
              <p>Select Underlying:</p>
              <Dropdown />
              <ButtonContainer>
                <Button onClick={() => !account.address && handleConnectWallet()}>
                  {account.address ? <span>Add Liquidity</span> : <span>Connect Wallet</span>}
                </Button>
              </ButtonContainer>
            </>
          ) : (
            <>
              <p>Select Underlying:</p>
              <Dropdown />
              <br/>
              <p>Your Position:</p>

              <br/>
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
                    {account.address ? <span>Remove Liquidity</span> : <span>Connect Wallet</span>}
                  </Button>
                </ButtonContainer>
            </>
          )}
      </FormContainer>
    </PLContainer>
  );
};

export default ProvideLiquidity;

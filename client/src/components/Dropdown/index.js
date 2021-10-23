import React, { useContext, useState } from "react";
import {
  InputContainer,
  CurrencyContainer,
  SelectedCollateral,
  OptionContainer,
  Container,
  OptionText,
  CurrencyImg,
  CurrencyTitle,
} from "./styles";
import Corn from "../../assets/corn.png";
import Cheese from "../../assets/cheese.png";
import Gas from "../../assets/gasoline.png";
import Milk from "../../assets/milk.png";
import Cattle from "../../assets/cattle.png";
import ArrowDown from "../../assets/arrow-down.svg";
import CredentialsContext from "../../context/credentialsContext";

const Dropdown = ({ isEnter, isExit }) => {
  const { handleCollDropdownSwitch, dropDownOpen } =
    useContext(CredentialsContext);
  const [styleState, setStyleState] = useState({
    collateral: "CORN",
    hovered: null,
  });

  const handleHover = (val) => {
    setStyleState({ ...styleState, hovered: val });
  };

  const handleSelect = (value) => {
    setStyleState({ ...styleState, collateral: value });
    handleCollDropdownSwitch();
  };

  const switchState = () => {
    handleCollDropdownSwitch();
  };

  const collateral = {
    CORN: "CORN",
    CHEESE: "CHEESE",
    MILK: "MILK",
    GAS: "GAS",
    CATTLE: "CATTLE",
  };

  const iconMap = {
    CORN: Corn,
    CHEESE: Cheese,
    MILK: Milk,
    GAS: Gas,
    CATTLE: Cattle,
  };

  return (
    <InputContainer isEnter={isEnter} isExit={isExit}>
      <div style={{ position: "relative", width: "100%" }}>
        <CurrencyContainer
          isEnter={isEnter}
          isExit={isExit}
          onClick={() => switchState()}
          style={{ position: "relative", cursor: "pointer", zIndex: 4 }}
        >
          <SelectedCollateral
            src={iconMap[styleState.collateral]}
            alt="antlogo"
          />
          <CurrencyTitle>{collateral[styleState.collateral]}</CurrencyTitle>
          <img
            alt="down"
            style={{ position: "absolute", right: "12px" }}
            src={ArrowDown}
          />
        </CurrencyContainer>
        <OptionContainer style={{ display: !dropDownOpen && "none" }}>
          {Object.entries(collateral).map(([key, value]) => (
            <Container
              onMouseEnter={() => handleHover(key)}
              onMouseLeave={() => handleHover(null)}
              onClick={() => handleSelect(key)}
              opt={key}
              styleState={styleState}
            >
              <CurrencyImg src={iconMap[key]} />
              <OptionText>{value}</OptionText>
            </Container>
          ))}
        </OptionContainer>
      </div>
    </InputContainer>
  );
};

export default Dropdown;

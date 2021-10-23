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
import moment from "moment";

const Dropdown = ({
  options,
  page,
  component,
  initial,
  type,
  initialIndex,
}) => {
  const { handleCollDropdownSwitch, dropDownState } =
    useContext(CredentialsContext);
  console.log(options);
  const [styleState, setStyleState] = useState({
    collateral:
      initialIndex || typeof initialIndex === "number"
        ? `${options[initialIndex].strikePrice} USDC - ${moment
            .unix(options[initialIndex].expiry)
            .format()}`
        : initial,
    hovered: null,
  });

  const [index, setIndex] = useState(initialIndex);

  const handleHover = (val) => {
    setStyleState({ ...styleState, hovered: val });
  };

  const handleSelect = (value) => {
    setStyleState({ ...styleState, collateral: value });
    handleCollDropdownSwitch(page, component);
  };

  const switchState = () => {
    handleCollDropdownSwitch(page, component);
  };

  const iconMap = {
    CORN: Corn,
    CHEESE: Cheese,
    MILK: Milk,
    GAS: Gas,
    CATTLE: Cattle,
  };

  return (
    <InputContainer>
      <div style={{ position: "relative", width: "100%" }}>
        <CurrencyContainer
          onClick={() => switchState()}
          style={{ position: "relative", cursor: "pointer", zIndex: 4 }}
        >
          {initial && (
            <SelectedCollateral
              src={iconMap[styleState.collateral]}
              alt="antlogo"
            />
          )}
          <CurrencyTitle>
            {initialIndex || typeof initialIndex === "number"
              ? `${options[index].strikePrice} USDC - ${moment
                  .unix(options[index].expiry)
                  .format()}`
              : options[styleState.collateral]}
          </CurrencyTitle>
          <img
            alt="down"
            style={{ position: "absolute", right: "12px" }}
            src={ArrowDown}
          />
        </CurrencyContainer>
        <OptionContainer
          style={{ display: !dropDownState[page][component] && "none" }}
        >
          {type === "expiry"
            ? options.map((v, i) => (
                <Container
                  onMouseEnter={() =>
                    handleHover(`${v.expiry}-${v.strikePrice}`)
                  }
                  onMouseLeave={() => handleHover(null)}
                  onClick={() => {
                    handleSelect(`${v.expiry}-${v.strikePrice}`);
                    setIndex(i);
                  }}
                  opt={`${v.expiry}-${v.strikePrice}`}
                  styleState={styleState}
                >
                  <OptionText>{`${v.strikePrice} USDC - ${moment
                    .unix(v.expiry)
                    .format()}`}</OptionText>
                </Container>
              ))
            : Object.entries(options).map(([key, value]) => (
                <Container
                  onMouseEnter={() => handleHover(key)}
                  onMouseLeave={() => handleHover(null)}
                  onClick={() => handleSelect(key)}
                  opt={key}
                  styleState={styleState}
                >
                  {iconMap[key] && <CurrencyImg src={iconMap[key]} />}
                  <OptionText>{value}</OptionText>
                </Container>
              ))}
        </OptionContainer>
      </div>
    </InputContainer>
  );
};

export default Dropdown;

import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 50px;
  background: white;
  border-radius: 20px;
  border: 2px solid;
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const CurrencyContainer = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  // z-index: 10;
`;

export const SelectedCollateral = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  position: absolute;
  left: 12px;
`;

export const OptionContainer = styled.div`
  position: absolute;
  width: 410px;
  height: 130px;
  bottom: -130px;
  left: 15px;
  border-bottom: 2px solid black;
  background: rgba(19, 12, 82, 1);
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const Container = styled.div`
  height: 41px;
  outline: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  borderbottom: 0px;
  border-radius: 7px;
  background: ${({ opt, styleState }) => {
    return opt === styleState.collateral || styleState.hovered === opt
      ? "grey"
      : "black";
  }};
  cursor: pointer;
  width: 100%;
`;

export const OptionText = styled.span`
  color: white;
`;

export const CurrencyImg = styled.img`
  width: 15px;
  height: auto;
  left: 12px;
  position: absolute;
`;

export const CurrencyTitle = styled.span`
  color: black;
`;

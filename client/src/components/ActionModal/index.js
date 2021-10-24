import React, { useContext } from "react";
import Close from "../../assets/close.png";
import fixed from "../../utils/fixed";
import OptionAMMPool from "../../abis/OptionAMMPool.json";
import ERC20 from "../../abis/ERC20.json";
import { ethers } from "ethers";
import CredentialsContext from "../../context/credentialsContext";
import { buyOption } from "../../helpers/useAMM";

const ActionModal = ({
  visible,
  handleClose,
  title,
  content,
  send,
  amount,
}) => {
  // console.log(visible);
  const { account } = useContext(CredentialsContext);
  if (!visible) {
    return null;
  }
  const connect = () => {
    return [
      new ethers.Contract(
        fixed["Pool Address (Kovan)"],
        OptionAMMPool,
        account.signer
      ),
      new ethers.Contract(fixed.usdcAddress, ERC20, account.signer),
    ];
  };

  const isApproved = async (usdc) => {
    console.log(usdc);
  };

  const handleSend = async () => {
    const [ctrct, usdc] = connect();
    await isApproved(usdc);
    await buyOption(account.address, ctrct, (amount * 10 ** 6).toString());
    console.log(ctrct);
    // send();
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          zIndex: "8",
          width: "600px",
          height: "400px",
          background: "white",
          borderRadius: "20px",
          padding: "30px",
          position: "relative",
        }}
      >
        <img
          onClick={() => handleClose()}
          style={{
            width: "15px",
            position: "absolute",
            right: "20px",
            top: "35px",
            cursor: "pointer",
          }}
          src={Close}
          alt="x"
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "25px" }}>{title}</span>
          <span style={{ marginTop: "50px", textAlign: "center" }}>
            {content}
          </span>
          <div
            style={{
              width: "100%",
              position: "absolute",
              bottom: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => handleSend()}
              style={{
                width: "90%",
                marginTop: "80px",
                border: "2px solid black",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                cursor: "pointer",
              }}
            >
              <span>Execute Transaction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;

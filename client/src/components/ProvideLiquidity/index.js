import React, { useContext } from "react";
import CredentialsContext from "../../context/credentialsContext";

const ProvideLiquidity = () => {
  const { account, handleConnectWallet } = useContext(CredentialsContext);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        // justifyContent: "center",
        marginTop: "70px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "460px", marginBottom: "10px" }}>
        <span style={{ fontSize: "20px" }}>Provide Liquidity</span>
      </div>
      <div
        style={{
          width: "500px",
          height: "400px",
          border: "2px solid black",
          borderRadius: "20px",
          position: "relative",
          padding: "10px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "30px",
            bottom: "25px",
            left: "0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            onClick={() => !account.address && handleConnectWallet()}
            style={{
              cursor: "pointer",
              border: "2px solid black",
              width: "300px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            {account.address ? <span>Hedge</span> : <span>Connect Wallet</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvideLiquidity;

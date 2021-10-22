import React, { useContext } from "react";
import CredentialsContext from "../../context/credentialsContext";
import { Box } from "@chakra-ui/react";
import Logo from "../../assets/swole-doge.png";

const Layout = () => {
  const { handleConnectWallet } = useContext(CredentialsContext);
  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          width: "100%",
          //   height: "200px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            left: "0px",
          }}
        >
          <span style={{ fontSize: "30px", marginRight: "10px" }}>Protec</span>
          <img style={{ width: "50px" }} src={Logo} />
        </div>
        <div
          style={{
            width: "350px",
            height: "40px",
            border: "2px solid black",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "20px", marginRight: "20px" }}>Hedge</span>
          <span style={{ fontSize: "20px" }}>Provide Liquidity</span>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            right: "10px",
            width: "200px",
          }}
        >
          <span>Wallet</span>
          <div
            style={{
              width: "0px",
              outline: "0.5px solid black",
              margin: "0px 10px",
            }}
          />
          <span>Not Connected</span>
        </div>
      </div>
    </div>
  );
};

export default Layout;

import React, { useContext } from "react";
import CredentialsContext from "../../context/credentialsContext";
import { Box } from "@chakra-ui/react";
import Logo from "../../assets/swole-doge.png";
import Menu from "../../components/Menu";
import {
  HeaderContainer,
  LogoContainer,
  WalletContainer,
  Divider,
} from "./styles";

const Layout = () => {
  const { handleConnectWallet } = useContext(CredentialsContext);
  return (
    <div style={{ padding: "30px" }}>
      <HeaderContainer>
        <LogoContainer>
          <span style={{ fontSize: "30px", marginRight: "10px" }}>Protec</span>
          <img style={{ width: "50px" }} src={Logo} />
        </LogoContainer>
        <Menu />
        <WalletContainer>
          <span>Wallet</span>
          <Divider />
          <span>Not Connected</span>
        </WalletContainer>
      </HeaderContainer>
    </div>
  );
};

export default Layout;

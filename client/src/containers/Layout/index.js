import React, { useContext } from "react";
import CredentialsContext from "../../context/credentialsContext";
import { Box } from "@chakra-ui/react";
import Logo from "../../assets/swole-doge.png";
import Menu from "../../components/Menu";
import Content from "../Content";
import {
  HeaderContainer,
  LogoContainer,
  WalletContainer,
  Divider,
} from "./styles";
import truncateAddress from "../../helpers/truncateAddress";

const Layout = () => {
  const { account, handleConnectWallet } = useContext(CredentialsContext);
  return (
    <div style={{ padding: "30px" }}>
      <HeaderContainer>
        <LogoContainer>
          <span style={{ fontSize: "30px", marginRight: "10px" }}>Protec</span>
          <img style={{ width: "50px" }} src={Logo} />
        </LogoContainer>
        <Menu />
        <WalletContainer>
          <span style={{ fontSize: "20px" }}>Wallet</span>
          <Divider />
          <span
            style={{ fontSize: "20px" }}
            onClick={() => (account.address ? null : handleConnectWallet())}
          >
            {account.address
              ? truncateAddress(account.address)
              : "Connect Wallet"}
          </span>
        </WalletContainer>
      </HeaderContainer>
      <Content />
    </div>
  );
};

export default Layout;

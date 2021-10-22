import React, { useContext } from "react";
import CredentialsContext from "../../context/credentialsContext";

const Layout = () => {
  const { handleConnectWallet } = useContext(CredentialsContext);
  return (
    <div>
      test
      <button onClick={() => handleConnectWallet()}>Connect Wallet</button>
    </div>
  );
};

export default Layout;

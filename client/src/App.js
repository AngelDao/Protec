import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./containers/Layout";
import { CredentialsProvider } from "./context/credentialsContext";
import connectProvider from "./helpers/connectProvider";
import connectWallet from "./helpers/connectWallet";

const App = () => {
  const [account, setAccount] = useState({});

  const handleConnectWallet = async () => {
    const res = await connectWallet(account.metamaskProvider);
    console.log(res);
    setAccount({ ...account, ...res });
  };

  useEffect(() => {
    (async () => {
      if (!account.metamaskProvider) {
        const provider = connectProvider();
        setAccount({ ...account, metamaskProvider: provider });
      }
    })();
  }, [account]);

  const credentials = { handleConnectWallet };

  return (
    <CredentialsProvider value={credentials}>
      <ChakraProvider>
        <Layout />
      </ChakraProvider>
    </CredentialsProvider>
  );
};

export default App;

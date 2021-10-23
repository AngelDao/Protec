import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./containers/Layout";
import { CredentialsProvider } from "./context/credentialsContext";
import connectProvider from "./helpers/connectProvider";
import connectWallet from "./helpers/connectWallet";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./utils/history";

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
        setAccount({ metamaskProvider: provider });
      }
    })();
  }, [account]);

  const credentials = { handleConnectWallet, account };

  return (
    <Router history={history}>
      <CredentialsProvider value={credentials}>
        <ChakraProvider>
          <Switch>
            <Route
              exact
              path={["/hedge", "/provide-liquidity"]}
              component={Layout}
            />
            <Route>
              <Redirect to="/hedge" />
            </Route>
          </Switch>
        </ChakraProvider>
      </CredentialsProvider>
    </Router>
  );
};

export default App;

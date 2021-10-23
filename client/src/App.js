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
  const [dropDownOpen, setDropDown] = useState(false);

  const handleConnectWallet = async () => {
    const res = await connectWallet(account.metamaskProvider);
    console.log(res);
    setAccount({ ...account, ...res });
  };

  const handleCollDropdownSwitch = () => {
    console.log("entered");
    setDropDown(!dropDownOpen);
  };

  useEffect(() => {
    (async () => {
      if (!account.metamaskProvider) {
        const provider = connectProvider();
        setAccount({ metamaskProvider: provider });
      }
    })();
  }, [account]);

  const credentials = {
    handleCollDropdownSwitch,
    handleConnectWallet,
    account,
    dropDownOpen,
  };

  return (
    <Router history={history}>
      <CredentialsProvider value={credentials}>
        <ChakraProvider>
          <div>
            <div
              onClick={() => handleCollDropdownSwitch()}
              style={{
                position: "absolute",
                zIndex: "3",
                width: "100%",
                height: "100%",
                display: !dropDownOpen && "none",
              }}
            />
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
          </div>
        </ChakraProvider>
      </CredentialsProvider>
    </Router>
  );
};

export default App;

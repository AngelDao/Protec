import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./containers/Layout";
import { CredentialsProvider } from "./context/credentialsContext";
import connectProvider from "./helpers/connectProvider";
import connectWallet from "./helpers/connectWallet";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./utils/history";
import ActionModal from "./components/ActionModal";

const App = () => {
  const [account, setAccount] = useState({});
  const [dropDownState, setDropDown] = useState({
    hedge: {
      underlying: false,
      strikePrice: false,
    },
    provideLiquidity: {
      some: false,
      thing: false,
    },
  });
  const [visibleModal, setVisibleModal] = useState(false);

  const handleConnectWallet = async () => {
    const res = await connectWallet(account.metamaskProvider);
    console.log(res);
    setAccount({ ...account, ...res });
  };

  const switchModal = () => {
    setVisibleModal(!visibleModal);
  };

  const handleCollDropdownSwitch = (page, component) => {
    console.log("entered");
    setDropDown({
      ...dropDownState,
      [page]: {
        [component]: !dropDownState[page][component],
      },
    });
  };

  const closeAll = () => {
    setDropDown({
      hedge: {
        underlying: false,
        strikePrice: false,
      },
      provideLiquidity: {
        some: false,
        thing: false,
      },
    });
  };

  const anyOpen = () => {
    if (
      Object.entries(dropDownState.hedge).find((v) => v[1]) ||
      Object.entries(dropDownState.hedge).find((v) => v[1])
    ) {
      return true;
    }
    return false;
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
    dropDownState,
    anyOpen,
    switchModal,
  };

  return (
    <Router history={history}>
      <CredentialsProvider value={credentials}>
        <ChakraProvider>
          <div style={{ width: "100%", height: "100vh", position: "relative" }}>
            <ActionModal visible={visibleModal} handleClose={switchModal} />
            <div
              onClick={() => closeAll()}
              style={{
                position: "absolute",
                zIndex: "3",
                width: "100%",
                height: "100%",
                display: !anyOpen() && "none",
              }}
            />
            <Switch>
              <Route
                exact
                path={["/hedge", "/provide-liquidity", "/positions"]}
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

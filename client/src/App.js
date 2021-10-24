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
import connectContracts from "./helpers/connectContracts";
import { getOptions }  from "./helpers/getOptions";
import { getPools } from "./helpers/getPools";

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
  const [modalContent, setModalContent] = useState({
    title: "",
    content: "",
  });
  const [markets, setMarkets] = useState([]);

  const handleConnectWallet = async () => {
    const res = await connectWallet(account.metamaskProvider);
    const contracts = await connectContracts(res);

    const optionsContracts = [];
    const poolContracs = [];
    contracts.forEach((e) => {
      optionsContracts.push(e.optionToken);
      poolContracs.push(e.optionAMM);
    })


    const options = getOptions(res, optionsContracts)
    // const pools = getPools(res, poolContracs)
    setMarkets(contracts);
    setAccount({ ...account, ...res, ...options });
  };

  const switchModal = () => {
    setVisibleModal(!visibleModal);
  };

  const closeModal = () => {
    setVisibleModal(false);
    setModalContent({ title: "", content: "" });
  };

  const handleCollDropdownSwitch = (page, component) => {
    // console.log("entered");
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
      Object.entries(dropDownState.hedge).find((v) => v[1]) ||
      visibleModal
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
    setModalContent,
    markets,
  };

  return (
    <Router history={history}>
      <CredentialsProvider value={credentials}>
        <ChakraProvider>
          <div
            style={{
              width: "100%",
              height: "100vh",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ActionModal
              title={modalContent.title}
              content={modalContent.content}
              visible={visibleModal}
              handleClose={switchModal}
            />
            <div
              onClick={() => {
                // console.log("entered");
                closeAll();
                closeModal();
              }}
              style={{
                position: "absolute",
                zIndex: "7",
                width: "100%",
                height: "100%",
                display: !anyOpen() && "none",
                backgroundColor: visibleModal && "rgba(0,0,0,0.5)",
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

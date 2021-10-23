require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

const fs = require("fs");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const DEBUG = true;

task("generate", "Create a mnemonic for builder deploys", async (_, { ethers }) => {
  const bip39 = require("bip39");
  const { hdkey } = require("ethereumjs-wallet");
  const mnemonic = bip39.generateMnemonic();
  if (DEBUG) console.log("mnemonic", mnemonic);
  const seed = await bip39.mnemonicToSeed(mnemonic);
  if (DEBUG) console.log("seed", seed);
  const hdwallet = hdkey.fromMasterSeed(seed);
  const wallet_hdpath = "m/44'/60'/0'/0/";
  const account_index = 0;
  const fullPath = wallet_hdpath + account_index;
  if (DEBUG) console.log("fullPath", fullPath);
  const wallet = hdwallet.derivePath(fullPath).getWallet();
  const privateKey = "0x" + wallet.privateKey.toString("hex");
  if (DEBUG) console.log("privateKey", privateKey);
  const EthUtil = require("ethereumjs-util");
  const address = "0x" + EthUtil.privateToAddress(wallet.privateKey).toString("hex");
  console.log("🔐 Account Generated as " + address + " and set as mnemonic in packages/hardhat");
  console.log("💬 Use 'yarn run account' to get more information about the deployment account.");

  fs.writeFileSync("./" + address + ".txt", mnemonic.toString());
  fs.writeFileSync("./mnemonic.txt", mnemonic.toString());
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const defaultNetwork = "localhost";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork,
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        url: `${process.env.KOVAN_URL}`
      },
    },
    localhost: {
      url: "http://localhost:8545",
      timeout: 200000,
    },
    kovan: {
      url: process.env.KOVAN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

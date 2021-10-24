const ethers = require('ethers');
const BigNumber = require('bignumber.js');
require('dotenv').config();
const fs = require('fs');

const provider = new ethers.providers.JsonRpcProvider("https://kovan.infura.io/v3/4af36def3746417b9b93290790e33f23");
const adminWallet = new ethers.Wallet(process.env.ADMIN_KEY, provider);

const optionFactoryAddress = '0xDF2F0a47BDc94e221D6bC396Bc43dB932364cF4C';

let constructorParameters = [
  {
    "Underlying asset": "Komodo Corn (kZC=F)",
    "Strike asset": "USDC",
    "Strike price": 535000000,
    "Expiration date": 1640995199,
    "Symbol": "kZC=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0xDB7afCc07D54aAf5C8ec618EbB4843f00Eec4003",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Corn (kZC=F)",
    "Strike asset": "USDC",
    "Strike price": 500000000,
    "Expiration date": 1640995199,
    "Symbol": "kZC=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0xDB7afCc07D54aAf5C8ec618EbB4843f00Eec4003",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Corn (kZC=F)",
    "Strike asset": "USDC",
    "Strike price": 475000000,
    "Expiration date": 1638316799,
    "Symbol": "kZC=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0xDB7afCc07D54aAf5C8ec618EbB4843f00Eec4003",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Gasoline RBOB (kRB=F)",
    "Strike asset": "USDC",
    "Strike price": 2410000,
    "Expiration date": 1640995199,
    "Symbol": "kRB=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0x3FcD3ADEcfe4783ee2180FaD67916874EdeA7492",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Gasoline RBOB (kRB=F)",
    "Strike asset": "USDC",
    "Strike price": 2200000,
    "Expiration date": 1640995199,
    "Symbol": "kRB=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0x3FcD3ADEcfe4783ee2180FaD67916874EdeA7492",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Gasoline RBOB (kRB=F)",
    "Strike asset": "USDC",
    "Strike price": 2000000,
    "Expiration date": 1638316799,
    "Symbol": "kRB=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0x3FcD3ADEcfe4783ee2180FaD67916874EdeA7492",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Milk (kDC=F)",
    "Strike asset": "USDC",
    "Strike price": 19500000,
    "Expiration date": 1640995199,
    "Symbol": "kDC=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0xC9d2d1D4818ade5afCFD865A8a43533A7F984d99",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Milk (kDC=F)",
    "Strike asset": "USDC",
    "Strike price": 18500000,
    "Expiration date": 1640995199,
    "Symbol": "kDC=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0xC9d2d1D4818ade5afCFD865A8a43533A7F984d99",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Milk (kDC=F)",
    "Strike asset": "USDC",
    "Strike price": 17500000,
    "Expiration date": 1638316799,
    "Symbol": "kDC=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0xC9d2d1D4818ade5afCFD865A8a43533A7F984d99",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Cheese Cash-Settled (kCSC=F)",
    "Strike asset": "USDC",
    "Strike price": 1900000,
    "Expiration date": 1640995199,
    "Symbol": "kCSC=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0x93852201609cD7157dAEb1Cf055b08D240F8B61E",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Cheese Cash-Settled (kCSC=F)",
    "Strike asset": "USDC",
    "Strike price": 1700000,
    "Expiration date": 1640995199,
    "Symbol": "kCSC=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0x93852201609cD7157dAEb1Cf055b08D240F8B61E",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Cheese Cash-Settled (kCSC=F)",
    "Strike asset": "USDC",
    "Strike price": 1500000,
    "Expiration date": 1638316799,
    "Symbol": "kCSC=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0x93852201609cD7157dAEb1Cf055b08D240F8B61E",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Live Cattle (kLE=F)",
    "Strike asset": "USDC",
    "Strike price": 128000000,
    "Expiration date": 1640995199,
    "Symbol": "kLE=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0x3eA759B306E58186bfeBEA94FeAdEBe4e77B9eeD",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Live Cattle (kLE=F)",
    "Strike asset": "USDC",
    "Strike price": 121000000,
    "Expiration date": 1640995199,
    "Symbol": "kLE=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0x3eA759B306E58186bfeBEA94FeAdEBe4e77B9eeD",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  },
  {
    "Underlying asset": "Komodo Live Cattle (kLE=F)",
    "Strike asset": "USDC",
    "Strike price": 114000000,
    "Expiration date": 1638316799,
    "Symbol": "kLE=F:USDC",
    "Option Type": "Call (1)",
    "Underlying Address (Kovan)": "0x3eA759B306E58186bfeBEA94FeAdEBe4e77B9eeD",
    "Strike Address (Kovan)": "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    "Option Address (Kovan)": "",
    "Pool Address (Kovan)": ""
  }
]

const factoryABI = [  {    "inputs": [      {        "internalType": "address",        "name": "wethAddress",        "type": "address"      },      {        "internalType": "address",        "name": "PodPutBuilder",        "type": "address"      },      {        "internalType": "address",        "name": "WPodPutBuilder",        "type": "address"      },      {        "internalType": "address",        "name": "PodCallBuilder",        "type": "address"      },      {        "internalType": "address",        "name": "WPodCallBuilder",        "type": "address"      },      {        "internalType": "address",        "name": "ConfigurationManager",        "type": "address"      }    ],    "stateMutability": "nonpayable",    "type": "constructor"  },  {    "anonymous": false,    "inputs": [      {        "indexed": true,        "internalType": "address",        "name": "deployer",        "type": "address"      },      {        "indexed": false,        "internalType": "address",        "name": "option",        "type": "address"      },      {        "indexed": false,        "internalType": "enum IPodOption.OptionType",        "name": "_optionType",        "type": "uint8"      },      {        "indexed": false,        "internalType": "enum IPodOption.ExerciseType",        "name": "_exerciseType",        "type": "uint8"      },      {        "indexed": false,        "internalType": "address",        "name": "underlyingAsset",        "type": "address"      },      {        "indexed": false,        "internalType": "address",        "name": "strikeAsset",        "type": "address"      },      {        "indexed": false,        "internalType": "uint256",        "name": "strikePrice",        "type": "uint256"      },      {        "indexed": false,        "internalType": "uint256",        "name": "expiration",        "type": "uint256"      },      {        "indexed": false,        "internalType": "uint256",        "name": "exerciseWindowSize",        "type": "uint256"      }    ],    "name": "OptionCreated",    "type": "event"  },  {    "inputs": [],    "name": "WETH_ADDRESS",    "outputs": [      {        "internalType": "address",        "name": "",        "type": "address"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "configurationManager",    "outputs": [      {        "internalType": "contract IConfigurationManager",        "name": "",        "type": "address"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "string",        "name": "name",        "type": "string"      },      {        "internalType": "string",        "name": "symbol",        "type": "string"      },      {        "internalType": "enum IPodOption.OptionType",        "name": "optionType",        "type": "uint8"      },      {        "internalType": "enum IPodOption.ExerciseType",        "name": "exerciseType",        "type": "uint8"      },      {        "internalType": "address",        "name": "underlyingAsset",        "type": "address"      },      {        "internalType": "address",        "name": "strikeAsset",        "type": "address"      },      {        "internalType": "uint256",        "name": "strikePrice",        "type": "uint256"      },      {        "internalType": "uint256",        "name": "expiration",        "type": "uint256"      },      {        "internalType": "uint256",        "name": "exerciseWindowSize",        "type": "uint256"      },      {        "internalType": "bool",        "name": "isAave",        "type": "bool"      }    ],    "name": "createOption",    "outputs": [      {        "internalType": "address",        "name": "",        "type": "address"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [],    "name": "podCallBuilder",    "outputs": [      {        "internalType": "contract IOptionBuilder",        "name": "",        "type": "address"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "podPutBuilder",    "outputs": [      {        "internalType": "contract IOptionBuilder",        "name": "",        "type": "address"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "wPodCallBuilder",    "outputs": [      {        "internalType": "contract IOptionBuilder",        "name": "",        "type": "address"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "wPodPutBuilder",    "outputs": [      {        "internalType": "contract IOptionBuilder",        "name": "",        "type": "address"      }    ],    "stateMutability": "view",    "type": "function"  }]

const optionABI = [  {    "inputs": [      {        "internalType": "string",        "name": "name",        "type": "string"      },      {        "internalType": "string",        "name": "symbol",        "type": "string"      },      {        "internalType": "enum IPodOption.ExerciseType",        "name": "exerciseType",        "type": "uint8"      },      {        "internalType": "address",        "name": "underlyingAsset",        "type": "address"      },      {        "internalType": "address",        "name": "strikeAsset",        "type": "address"      },      {        "internalType": "uint256",        "name": "strikePrice",        "type": "uint256"      },      {        "internalType": "uint256",        "name": "expiration",        "type": "uint256"      },      {        "internalType": "uint256",        "name": "exerciseWindowSize",        "type": "uint256"      },      {        "internalType": "contract IConfigurationManager",        "name": "configurationManager",        "type": "address"      }    ],    "stateMutability": "nonpayable",    "type": "constructor"  },  {    "anonymous": false,    "inputs": [      {        "indexed": true,        "internalType": "address",        "name": "owner",        "type": "address"      },      {        "indexed": true,        "internalType": "address",        "name": "spender",        "type": "address"      },      {        "indexed": false,        "internalType": "uint256",        "name": "value",        "type": "uint256"      }    ],    "name": "Approval",    "type": "event"  },  {    "anonymous": false,    "inputs": [      {        "indexed": true,        "internalType": "address",        "name": "exerciser",        "type": "address"      },      {        "indexed": false,        "internalType": "uint256",        "name": "amount",        "type": "uint256"      }    ],    "name": "Exercise",    "type": "event"  },  {    "anonymous": false,    "inputs": [      {        "indexed": true,        "internalType": "address",        "name": "minter",        "type": "address"      },      {        "indexed": false,        "internalType": "uint256",        "name": "amount",        "type": "uint256"      }    ],    "name": "Mint",    "type": "event"  },  {    "anonymous": false,    "inputs": [      {        "indexed": true,        "internalType": "address",        "name": "from",        "type": "address"      },      {        "indexed": true,        "internalType": "address",        "name": "to",        "type": "address"      },      {        "indexed": false,        "internalType": "uint256",        "name": "value",        "type": "uint256"      }    ],    "name": "Transfer",    "type": "event"  },  {    "anonymous": false,    "inputs": [      {        "indexed": true,        "internalType": "address",        "name": "minter",        "type": "address"      },      {        "indexed": false,        "internalType": "uint256",        "name": "optionAmount",        "type": "uint256"      },      {        "indexed": false,        "internalType": "uint256",        "name": "strikeAmount",        "type": "uint256"      },      {        "indexed": false,        "internalType": "uint256",        "name": "underlyingAmount",        "type": "uint256"      }    ],    "name": "Unmint",    "type": "event"  },  {    "anonymous": false,    "inputs": [      {        "indexed": true,        "internalType": "address",        "name": "minter",        "type": "address"      },      {        "indexed": false,        "internalType": "uint256",        "name": "strikeAmount",        "type": "uint256"      },      {        "indexed": false,        "internalType": "uint256",        "name": "underlyingAmount",        "type": "uint256"      }    ],    "name": "Withdraw",    "type": "event"  },  {    "inputs": [],    "name": "MIN_EXERCISE_WINDOW_SIZE",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "owner",        "type": "address"      },      {        "internalType": "address",        "name": "spender",        "type": "address"      }    ],    "name": "allowance",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "spender",        "type": "address"      },      {        "internalType": "uint256",        "name": "amount",        "type": "uint256"      }    ],    "name": "approve",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "account",        "type": "address"      }    ],    "name": "balanceOf",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "capSize",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "configurationManager",    "outputs": [      {        "internalType": "contract IConfigurationManager",        "name": "",        "type": "address"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "decimals",    "outputs": [      {        "internalType": "uint8",        "name": "",        "type": "uint8"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "spender",        "type": "address"      },      {        "internalType": "uint256",        "name": "subtractedValue",        "type": "uint256"      }    ],    "name": "decreaseAllowance",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [      {        "internalType": "uint256",        "name": "amountOfOptions",        "type": "uint256"      }    ],    "name": "exercise",    "outputs": [],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [],    "name": "exerciseType",    "outputs": [      {        "internalType": "enum IPodOption.ExerciseType",        "name": "",        "type": "uint8"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "expiration",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "owner",        "type": "address"      }    ],    "name": "getSellerWithdrawAmounts",    "outputs": [      {        "internalType": "uint256",        "name": "strikeAmount",        "type": "uint256"      },      {        "internalType": "uint256",        "name": "underlyingAmount",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "hasExpired",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "spender",        "type": "address"      },      {        "internalType": "uint256",        "name": "addedValue",        "type": "uint256"      }    ],    "name": "increaseAllowance",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [],    "name": "isExerciseWindow",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "isTradeWindow",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "isWithdrawWindow",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "uint256",        "name": "amountOfOptions",        "type": "uint256"      },      {        "internalType": "address",        "name": "owner",        "type": "address"      }    ],    "name": "mint",    "outputs": [],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "",        "type": "address"      }    ],    "name": "mintedOptions",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "name",    "outputs": [      {        "internalType": "string",        "name": "",        "type": "string"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "optionType",    "outputs": [      {        "internalType": "enum IPodOption.OptionType",        "name": "",        "type": "uint8"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "",        "type": "address"      }    ],    "name": "shares",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "startOfExerciseWindow",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "strikeAsset",    "outputs": [      {        "internalType": "address",        "name": "",        "type": "address"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "strikeAssetDecimals",    "outputs": [      {        "internalType": "uint8",        "name": "",        "type": "uint8"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "strikePrice",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "strikePriceDecimals",    "outputs": [      {        "internalType": "uint8",        "name": "",        "type": "uint8"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "strikeReserves",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "uint256",        "name": "amountOfOptions",        "type": "uint256"      }    ],    "name": "strikeToTransfer",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "symbol",    "outputs": [      {        "internalType": "string",        "name": "",        "type": "string"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "totalShares",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "totalSupply",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "recipient",        "type": "address"      },      {        "internalType": "uint256",        "name": "amount",        "type": "uint256"      }    ],    "name": "transfer",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "sender",        "type": "address"      },      {        "internalType": "address",        "name": "recipient",        "type": "address"      },      {        "internalType": "uint256",        "name": "amount",        "type": "uint256"      }    ],    "name": "transferFrom",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [],    "name": "underlyingAsset",    "outputs": [      {        "internalType": "address",        "name": "",        "type": "address"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "underlyingAssetDecimals",    "outputs": [      {        "internalType": "uint8",        "name": "",        "type": "uint8"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "underlyingReserves",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "uint256",        "name": "amountOfOptions",        "type": "uint256"      }    ],    "name": "unmint",    "outputs": [],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [],    "name": "withdraw",    "outputs": [],    "stateMutability": "nonpayable",    "type": "function"  }]

const erc20ABI = [  {    "inputs": [      {        "internalType": "string",        "name": "name",        "type": "string"      },      {        "internalType": "string",        "name": "symbol",        "type": "string"      }    ],    "stateMutability": "nonpayable",    "type": "constructor"  },  {    "anonymous": false,    "inputs": [      {        "indexed": true,        "internalType": "address",        "name": "owner",        "type": "address"      },      {        "indexed": true,        "internalType": "address",        "name": "spender",        "type": "address"      },      {        "indexed": false,        "internalType": "uint256",        "name": "value",        "type": "uint256"      }    ],    "name": "Approval",    "type": "event"  },  {    "anonymous": false,    "inputs": [      {        "indexed": true,        "internalType": "address",        "name": "from",        "type": "address"      },      {        "indexed": true,        "internalType": "address",        "name": "to",        "type": "address"      },      {        "indexed": false,        "internalType": "uint256",        "name": "value",        "type": "uint256"      }    ],    "name": "Transfer",    "type": "event"  },  {    "inputs": [      {        "internalType": "address",        "name": "owner",        "type": "address"      },      {        "internalType": "address",        "name": "spender",        "type": "address"      }    ],    "name": "allowance",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "spender",        "type": "address"      },      {        "internalType": "uint256",        "name": "amount",        "type": "uint256"      }    ],    "name": "approve",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "account",        "type": "address"      }    ],    "name": "balanceOf",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "decimals",    "outputs": [      {        "internalType": "uint8",        "name": "",        "type": "uint8"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "spender",        "type": "address"      },      {        "internalType": "uint256",        "name": "subtractedValue",        "type": "uint256"      }    ],    "name": "decreaseAllowance",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "spender",        "type": "address"      },      {        "internalType": "uint256",        "name": "addedValue",        "type": "uint256"      }    ],    "name": "increaseAllowance",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [],    "name": "name",    "outputs": [      {        "internalType": "string",        "name": "",        "type": "string"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "symbol",    "outputs": [      {        "internalType": "string",        "name": "",        "type": "string"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "totalSupply",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "recipient",        "type": "address"      },      {        "internalType": "uint256",        "name": "amount",        "type": "uint256"      }    ],    "name": "transfer",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "sender",        "type": "address"      },      {        "internalType": "address",        "name": "recipient",        "type": "address"      },      {        "internalType": "uint256",        "name": "amount",        "type": "uint256"      }    ],    "name": "transferFrom",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  }]

/*
  "WBTC:USDC 12000 31Dec 2020"; // name
  "PodPut WBTC:USDC"; // symbol
  0; // OptionType: 0 for Put, 1 for Call
  0; // ExerciseType: 0 for American, 1 for European
  "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"; // strikeAsset address
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"; // underlyingAsset address
  "12000000000"; // StrikePrice: Using 6 decimals, equal to strikeAsset decimals
  1609401600; // timestamp in seconds: 31 Dec 2020 08AM
  86400; // exercise window size
  false; //
*/


const start = async () => {
	const optionFactory = new ethers.Contract(optionFactoryAddress, factoryABI, adminWallet)

	for (var i=0; i< constructorParameters.length; i++){
		const newOption = await optionFactory.createOption(
			"PodCall " + constructorParameters[i]["Underlying asset"]+" "+(parseFloat(constructorParameters[i]["Strike price"])/1000000), 
			constructorParameters[i]["Symbol"],
			1,
			0,
      constructorParameters[i]["Underlying Address (Kovan)"],
			constructorParameters[i]["Strike Address (Kovan)"],
			parseFloat(constructorParameters[i]["Strike price"]),
			constructorParameters[i]["Expiration date"],
			86401,
      false,
			{
				gasPrice:10000000000,
				gasLimit:12500000
			}
		);

    console.log("1")
    const finishOption = await newOption.wait();
		//console.log(finishOption)
    console.log("2")
    let iface = new ethers.utils.Interface(factoryABI);
    //iface.parseLog(finishOption.logs[0]), 
    console.log(iface.parseLog(finishOption.logs[0]).args.option);
    const option = iface.parseLog(finishOption.logs[0]).args.option;
    constructorParameters[i]["Option Address (Kovan)"] = option;
    console.log("2")
    const underlyingContract = new ethers.Contract(constructorParameters[i]["Underlying Address (Kovan)"], erc20ABI, adminWallet);

    const underlyingApproval = await underlyingContract.approve(option, ethers.constants.MaxUint256,  {
        gasPrice:10000000000,
        gasLimit:1250000
      });

    console.log(3, option, ethers.constants.MaxUint256, underlyingApproval)

    const waitForUnderlyingApproval = await underlyingApproval.wait();
    console.log("approved for mint...")

    console.log("DEBUG: underlying", constructorParameters[i]["Underlying Address (Kovan)"], " approve for Option Contract: ", option)

    const optionContract = new ethers.Contract(option, optionABI, adminWallet);
    const mintOption = await optionContract.mint(
      (constructorParameters[i]["Underlying asset"] =="Komodo Corn (kZC=F)" || constructorParameters[i]["Underlying asset"] == "Komodo Live Cattle (kLE=F)") ? "1000000000000" :  "5000000000000000000", 
      "0xce4bd47F715ec83ae5819f001cD6CdB843FFFA6A",
      {
        gasPrice:10000000000,
        gasLimit:1250000
      });
    const waitForMint = await mintOption.wait();
    console.log(waitForMint)

    fs.writeFileSync("example.json", option);

	}

  fs.writeFileSync("optionsResults.json", JSON.stringify(constructorParameters));
}


start();


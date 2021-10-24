const ethers = require('ethers');
const BigNumber = require('bignumber.js');
require('dotenv').config();
const fs = require('fs');

const provider = new ethers.providers.JsonRpcProvider("https://kovan.infura.io/v3/4af36def3746417b9b93290790e33f23");
const adminWallet = new ethers.Wallet(process.env.ADMIN_KEY, provider);

let constructorParameters = [
   /*{
      "Underlying asset":"Komodo Corn (kZC=F)",
      "Strike asset":"USDC",
      "Strike price":535000000,
      "Expiration date":1640995199,
      "Symbol":"kZC=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0xDB7afCc07D54aAf5C8ec618EbB4843f00Eec4003",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0xaA6143A5E8D40F3e5cba7446BF845A6219A665D9",
      "Pool Address (Kovan)":"0xa4b7f978db7b7963dfb231bf341eed3866b20f17",
      "IV":20.47,
      "InitialPremium":
   },
   {
      "Underlying asset":"Komodo Corn (kZC=F)",
      "Strike asset":"USDC",
      "Strike price":500000000,
      "Expiration date":1640995199,
      "Symbol":"kZC=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0xDB7afCc07D54aAf5C8ec618EbB4843f00Eec4003",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0x5Ae7284d32BB843B7a6CE2fC7082B2402dEED175",
      "Pool Address (Kovan)":"0x8c2115ab84ff998424229c18d7d0f05469e79cb9",
      "IV":20.47,
      "InitialPremium":
   },
   {
      "Underlying asset":"Komodo Corn (kZC=F)",
      "Strike asset":"USDC",
      "Strike price":475000000,
      "Expiration date":1638316799,
      "Symbol":"kZC=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0xDB7afCc07D54aAf5C8ec618EbB4843f00Eec4003",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0xcE37f77BD050D22AEaA2e67daa3cFed66f85eb00",
      "Pool Address (Kovan)":"0xddd51da84d6f0fbd26840a6cb6ad6b3f407b7dfa",
      "IV":20.47,
      "InitialPremium":
   },
   {
      "Underlying asset":"Komodo Gasoline RBOB (kRB=F)",
      "Strike asset":"USDC",
      "Strike price":2410000,
      "Expiration date":1640995199,
      "Symbol":"kRB=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0x3FcD3ADEcfe4783ee2180FaD67916874EdeA7492",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0x07201Cc8F1E270a470e595E001055dA7c27DdD89",
      "Pool Address (Kovan)":"0x06f5f4cd30cf81e7f1c3c0bffb1e5bcaaeaccbb1",
      "IV":34.28,
      "InitialPremium":
   },
   {
      "Underlying asset":"Komodo Gasoline RBOB (kRB=F)",
      "Strike asset":"USDC",
      "Strike price":2200000,
      "Expiration date":1640995199,
      "Symbol":"kRB=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0x3FcD3ADEcfe4783ee2180FaD67916874EdeA7492",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0xc57E18C4FBE1D4940C8E5e9f06F898094361A9d6",
      "Pool Address (Kovan)":"0xc8e798d95b691b5f4b219b0c55ea3fbada3def46",
      "IV":34.28,
      "InitialPremium":
   },
   {
      "Underlying asset":"Komodo Gasoline RBOB (kRB=F)",
      "Strike asset":"USDC",
      "Strike price":2000000,
      "Expiration date":1638316799,
      "Symbol":"kRB=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0x3FcD3ADEcfe4783ee2180FaD67916874EdeA7492",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0x325Dc8cF53cd072c66313F5f92Ae13e5fF6B7Bde",
      "Pool Address (Kovan)":"0x821a050c49545f50d70c1e58f342580600cfa7ab",
      "IV":34.28,
      "InitialPremium":
   },*/
   /*{
      "Underlying asset":"Komodo Milk (kDC=F)",
      "Strike asset":"USDC",
      "Strike price":19500000,
      "Expiration date":1640995199,
      "Symbol":"kDC=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0xC9d2d1D4818ade5afCFD865A8a43533A7F984d99",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0x9Bc700DA97A53695D3FeF1e9ABdab2188D689bDa",
      "Pool Address (Kovan)":"0x7ad1c16229d0f27f970d37b60cd6c17081c82e44",
      "IV":15.82,
      "InitialPremium":0.1151761756
   },*/
   /*{
      "Underlying asset":"Komodo Milk (kDC=F)",
      "Strike asset":"USDC",
      "Strike price":18500000,
      "Expiration date":1640995199,
      "Symbol":"kDC=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0xC9d2d1D4818ade5afCFD865A8a43533A7F984d99",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0x4F1B081E57832d20ABedEd765bcD9aca9D0A2994",
      "Pool Address (Kovan)":"0x486598202791d09f08f33c0885049fc61a17fbc1",
      "IV":15.82,
      "InitialPremium":
   },
   {
      "Underlying asset":"Komodo Milk (kDC=F)",
      "Strike asset":"USDC",
      "Strike price":17500000,
      "Expiration date":1638316799,
      "Symbol":"kDC=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0xC9d2d1D4818ade5afCFD865A8a43533A7F984d99",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0x2172515FD32E4ee30eaE83189272865F07Ab95b3",
      "Pool Address (Kovan)":"0xd7dd5a80ed5a52ba2f93d797f0c9ec1520c294da",
      "IV":15.82,
      "InitialPremium":
   },*/
   {
      "Underlying asset":"Komodo Cheese Cash-Settled (kCSC=F)",
      "Strike asset":"USDC",
      "Strike price":1900000,
      "Expiration date":1640995199,
      "Symbol":"kCSC=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0x93852201609cD7157dAEb1Cf055b08D240F8B61E",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0xA9ebb45e94853426905ceF187cD7ae41C7cFC34d",
      "Pool Address (Kovan)":"0x34af0ea79dc99b33b32a5216e1586ec65fc346da",
      "IV":16.14,
      "InitialPremium":0.0604
   },
   /*{
      "Underlying asset":"Komodo Cheese Cash-Settled (kCSC=F)",
      "Strike asset":"USDC",
      "Strike price":1700000,
      "Expiration date":1640995199,
      "Symbol":"kCSC=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0x93852201609cD7157dAEb1Cf055b08D240F8B61E",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0xa040bc67763CA17641D4e8e0C9F09Ba22aa7388e",
      "Pool Address (Kovan)":"0x27f21c56627f1c7fb7e544bc1542dcff8c7c6353",
      "IV":16.14,
      "InitialPremium":
   },
   {
      "Underlying asset":"Komodo Cheese Cash-Settled (kCSC=F)",
      "Strike asset":"USDC",
      "Strike price":1500000,
      "Expiration date":1638316799,
      "Symbol":"kCSC=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0x93852201609cD7157dAEb1Cf055b08D240F8B61E",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0xB87280Cc37A0C29bB574E71e1D5595C218C2e067",
      "Pool Address (Kovan)":"0x692dcbed9610a2600978cea325b2126d2f8356cd",
      "IV":16.14,
      "InitialPremium":
   },
   {
      "Underlying asset":"Komodo Live Cattle (kLE=F)",
      "Strike asset":"USDC",
      "Strike price":128000000,
      "Expiration date":1640995199,
      "Symbol":"kLE=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0x3eA759B306E58186bfeBEA94FeAdEBe4e77B9eeD",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0x086D1cb2f3291d6193fB90040a5f47E33fDDe7da",
      "Pool Address (Kovan)":"0xc3291d75fc0f65ba001091b0218a2aeb700161e4",
      "IV":14.16,
      "InitialPremium":
   },
   {
      "Underlying asset":"Komodo Live Cattle (kLE=F)",
      "Strike asset":"USDC",
      "Strike price":121000000,
      "Expiration date":1640995199,
      "Symbol":"kLE=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0x3eA759B306E58186bfeBEA94FeAdEBe4e77B9eeD",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0x3DA6f3b963Eb2A7abc5FE13CE3Fd48594cC0cFbE",
      "Pool Address (Kovan)":"0xbe0639814216d7ae74558820ebda8212b1d90138",
      "IV":14.16,
      "InitialPremium":
   },
   {
      "Underlying asset":"Komodo Live Cattle (kLE=F)",
      "Strike asset":"USDC",
      "Strike price":114000000,
      "Expiration date":1638316799,
      "Symbol":"kLE=F:USDC",
      "Option Type":"Call (1)",
      "Underlying Address (Kovan)":"0x3eA759B306E58186bfeBEA94FeAdEBe4e77B9eeD",
      "Strike Address (Kovan)":"0xe22da380ee6b445bb8273c81944adeb6e8450422",
      "Option Address (Kovan)":"0x6B9EbEcffc09c9Bf8F9f3d808be2B1be7cF7D317",
      "Pool Address (Kovan)":"0xd1db3652ce65064e5e8bc16dfc0b889c3b01e18e",
      "IV":14.16,
      "InitialPremium":
   }*/
]


const OptionAMMPoolABI = [ {   "inputs": [     {       "internalType": "address",       "name": "_optionAddress",       "type": "address"     },     {       "internalType": "address",       "name": "_stableAsset",       "type": "address"     },     {       "internalType": "uint256",       "name": "_initialIV",       "type": "uint256"     },     {       "internalType": "contract IConfigurationManager",       "name": "_configurationManager",       "type": "address"     },     {       "internalType": "contract IFeePoolBuilder",       "name": "_feePoolBuilder",       "type": "address"     }   ],   "stateMutability": "nonpayable",   "type": "constructor" }, {   "anonymous": false,   "inputs": [     {       "indexed": true,       "internalType": "address",       "name": "caller",       "type": "address"     },     {       "indexed": true,       "internalType": "address",       "name": "owner",       "type": "address"     },     {       "indexed": false,       "internalType": "uint256",       "name": "amountA",       "type": "uint256"     },     {       "indexed": false,       "internalType": "uint256",       "name": "amountB",       "type": "uint256"     }   ],   "name": "AddLiquidity",   "type": "event" }, {   "anonymous": false,   "inputs": [     {       "indexed": true,       "internalType": "address",       "name": "caller",       "type": "address"     },     {       "indexed": false,       "internalType": "uint256",       "name": "amountA",       "type": "uint256"     },     {       "indexed": false,       "internalType": "uint256",       "name": "amountB",       "type": "uint256"     }   ],   "name": "RemoveLiquidity",   "type": "event" }, {   "anonymous": false,   "inputs": [     {       "indexed": true,       "internalType": "address",       "name": "caller",       "type": "address"     },     {       "indexed": true,       "internalType": "address",       "name": "owner",       "type": "address"     },     {       "indexed": false,       "internalType": "uint256",       "name": "exactAmountAIn",       "type": "uint256"     },     {       "indexed": false,       "internalType": "uint256",       "name": "amountBOut",       "type": "uint256"     }   ],   "name": "TradeExactAInput",   "type": "event" }, {   "anonymous": false,   "inputs": [     {       "indexed": true,       "internalType": "address",       "name": "caller",       "type": "address"     },     {       "indexed": true,       "internalType": "address",       "name": "owner",       "type": "address"     },     {       "indexed": false,       "internalType": "uint256",       "name": "amountBIn",       "type": "uint256"     },     {       "indexed": false,       "internalType": "uint256",       "name": "exactAmountAOut",       "type": "uint256"     }   ],   "name": "TradeExactAOutput",   "type": "event" }, {   "anonymous": false,   "inputs": [     {       "indexed": true,       "internalType": "address",       "name": "caller",       "type": "address"     },     {       "indexed": true,       "internalType": "address",       "name": "owner",       "type": "address"     },     {       "indexed": false,       "internalType": "uint256",       "name": "exactAmountBIn",       "type": "uint256"     },     {       "indexed": false,       "internalType": "uint256",       "name": "amountAOut",       "type": "uint256"     }   ],   "name": "TradeExactBInput",   "type": "event" }, {   "anonymous": false,   "inputs": [     {       "indexed": true,       "internalType": "address",       "name": "caller",       "type": "address"     },     {       "indexed": true,       "internalType": "address",       "name": "owner",       "type": "address"     },     {       "indexed": false,       "internalType": "uint256",       "name": "amountAIn",       "type": "uint256"     },     {       "indexed": false,       "internalType": "uint256",       "name": "exactAmountBOut",       "type": "uint256"     }   ],   "name": "TradeExactBOutput",   "type": "event" }, {   "anonymous": false,   "inputs": [     {       "indexed": false,       "internalType": "uint256",       "name": "spotPrice",       "type": "uint256"     },     {       "indexed": false,       "internalType": "uint256",       "name": "newIV",       "type": "uint256"     }   ],   "name": "TradeInfo",   "type": "event" }, {   "inputs": [],   "name": "FIMP_DECIMALS",   "outputs": [     {       "internalType": "uint256",       "name": "",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "INITIAL_FIMP",   "outputs": [     {       "internalType": "uint256",       "name": "",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "PERCENT_PRECISION",   "outputs": [     {       "internalType": "uint256",       "name": "",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "PRICING_DECIMALS",   "outputs": [     {       "internalType": "uint256",       "name": "",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [     {       "internalType": "uint256",       "name": "amountOfA",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "amountOfB",       "type": "uint256"     },     {       "internalType": "address",       "name": "owner",       "type": "address"     }   ],   "name": "addLiquidity",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function" }, {   "inputs": [],   "name": "capSize",   "outputs": [     {       "internalType": "uint256",       "name": "",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "configurationManager",   "outputs": [     {       "internalType": "contract IConfigurationManager",       "name": "",       "type": "address"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "deamortizedTokenABalance",   "outputs": [     {       "internalType": "uint256",       "name": "",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "deamortizedTokenBBalance",   "outputs": [     {       "internalType": "uint256",       "name": "",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "feePoolA",   "outputs": [     {       "internalType": "contract IFeePool",       "name": "",       "type": "address"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "feePoolB",   "outputs": [     {       "internalType": "contract IFeePool",       "name": "",       "type": "address"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "getABPrice",   "outputs": [     {       "internalType": "uint256",       "name": "ABPrice",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "getAdjustedIV",   "outputs": [     {       "internalType": "uint256",       "name": "adjustedIV",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [     {       "internalType": "uint256",       "name": "exactAmountAIn",       "type": "uint256"     }   ],   "name": "getOptionTradeDetailsExactAInput",   "outputs": [     {       "internalType": "uint256",       "name": "amountBOut",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "newIV",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "feesTokenA",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "feesTokenB",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [     {       "internalType": "uint256",       "name": "exactAmountAOut",       "type": "uint256"     }   ],   "name": "getOptionTradeDetailsExactAOutput",   "outputs": [     {       "internalType": "uint256",       "name": "amountBIn",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "newIV",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "feesTokenA",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "feesTokenB",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [     {       "internalType": "uint256",       "name": "exactAmountBIn",       "type": "uint256"     }   ],   "name": "getOptionTradeDetailsExactBInput",   "outputs": [     {       "internalType": "uint256",       "name": "amountAOut",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "newIV",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "feesTokenA",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "feesTokenB",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [     {       "internalType": "uint256",       "name": "exactAmountBOut",       "type": "uint256"     }   ],   "name": "getOptionTradeDetailsExactBOutput",   "outputs": [     {       "internalType": "uint256",       "name": "amountAIn",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "newIV",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "feesTokenA",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "feesTokenB",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "getPoolBalances",   "outputs": [     {       "internalType": "uint256",       "name": "totalTokenA",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "totalTokenB",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [     {       "internalType": "uint256",       "name": "percentA",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "percentB",       "type": "uint256"     },     {       "internalType": "address",       "name": "user",       "type": "address"     }   ],   "name": "getRemoveLiquidityAmounts",   "outputs": [     {       "internalType": "uint256",       "name": "withdrawAmountA",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "withdrawAmountB",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [     {       "internalType": "address",       "name": "user",       "type": "address"     }   ],   "name": "getUserDepositSnapshot",   "outputs": [     {       "internalType": "uint256",       "name": "tokenAOriginalBalance",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "tokenBOriginalBalance",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "fImpUser",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "priceProperties",   "outputs": [     {       "internalType": "uint256",       "name": "expiration",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "startOfExerciseWindow",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "strikePrice",       "type": "uint256"     },     {       "internalType": "address",       "name": "underlyingAsset",       "type": "address"     },     {       "internalType": "enum IPodOption.OptionType",       "name": "optionType",       "type": "uint8"     },     {       "internalType": "uint256",       "name": "currentIV",       "type": "uint256"     },     {       "internalType": "int256",       "name": "riskFree",       "type": "int256"     },     {       "internalType": "uint256",       "name": "initialIVGuess",       "type": "uint256"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [     {       "internalType": "uint256",       "name": "amountOfA",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "amountOfB",       "type": "uint256"     }   ],   "name": "removeLiquidity",   "outputs": [],   "stateMutability": "nonpayable",   "type": "function" }, {   "inputs": [],   "name": "tokenA",   "outputs": [     {       "internalType": "address",       "name": "",       "type": "address"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "tokenADecimals",   "outputs": [     {       "internalType": "uint8",       "name": "",       "type": "uint8"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "tokenB",   "outputs": [     {       "internalType": "address",       "name": "",       "type": "address"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [],   "name": "tokenBDecimals",   "outputs": [     {       "internalType": "uint8",       "name": "",       "type": "uint8"     }   ],   "stateMutability": "view",   "type": "function" }, {   "inputs": [     {       "internalType": "uint256",       "name": "exactAmountAIn",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "minAmountBOut",       "type": "uint256"     },     {       "internalType": "address",       "name": "owner",       "type": "address"     },     {       "internalType": "uint256",       "name": "initialIVGuess",       "type": "uint256"     }   ],   "name": "tradeExactAInput",   "outputs": [     {       "internalType": "uint256",       "name": "",       "type": "uint256"     }   ],   "stateMutability": "nonpayable",   "type": "function" }, {   "inputs": [     {       "internalType": "uint256",       "name": "exactAmountAOut",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "maxAmountBIn",       "type": "uint256"     },     {       "internalType": "address",       "name": "owner",       "type": "address"     },     {       "internalType": "uint256",       "name": "initialIVGuess",       "type": "uint256"     }   ],   "name": "tradeExactAOutput",   "outputs": [     {       "internalType": "uint256",       "name": "",       "type": "uint256"     }   ],   "stateMutability": "nonpayable",   "type": "function" }, {   "inputs": [     {       "internalType": "uint256",       "name": "exactAmountBIn",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "minAmountAOut",       "type": "uint256"     },     {       "internalType": "address",       "name": "owner",       "type": "address"     },     {       "internalType": "uint256",       "name": "initialIVGuess",       "type": "uint256"     }   ],   "name": "tradeExactBInput",   "outputs": [     {       "internalType": "uint256",       "name": "",       "type": "uint256"     }   ],   "stateMutability": "nonpayable",   "type": "function" }, {   "inputs": [     {       "internalType": "uint256",       "name": "exactAmountBOut",       "type": "uint256"     },     {       "internalType": "uint256",       "name": "maxAmountAIn",       "type": "uint256"     },     {       "internalType": "address",       "name": "owner",       "type": "address"     },     {       "internalType": "uint256",       "name": "initialIVGuess",       "type": "uint256"     }   ],   "name": "tradeExactBOutput",   "outputs": [     {       "internalType": "uint256",       "name": "",       "type": "uint256"     }   ],   "stateMutability": "nonpayable",   "type": "function" }]
const erc20ABI = [  {    "inputs": [      {        "internalType": "string",        "name": "name",        "type": "string"      },      {        "internalType": "string",        "name": "symbol",        "type": "string"      }    ],    "stateMutability": "nonpayable",    "type": "constructor"  },  {    "anonymous": false,    "inputs": [      {        "indexed": true,        "internalType": "address",        "name": "owner",        "type": "address"      },      {        "indexed": true,        "internalType": "address",        "name": "spender",        "type": "address"      },      {        "indexed": false,        "internalType": "uint256",        "name": "value",        "type": "uint256"      }    ],    "name": "Approval",    "type": "event"  },  {    "anonymous": false,    "inputs": [      {        "indexed": true,        "internalType": "address",        "name": "from",        "type": "address"      },      {        "indexed": true,        "internalType": "address",        "name": "to",        "type": "address"      },      {        "indexed": false,        "internalType": "uint256",        "name": "value",        "type": "uint256"      }    ],    "name": "Transfer",    "type": "event"  },  {    "inputs": [      {        "internalType": "address",        "name": "owner",        "type": "address"      },      {        "internalType": "address",        "name": "spender",        "type": "address"      }    ],    "name": "allowance",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "spender",        "type": "address"      },      {        "internalType": "uint256",        "name": "amount",        "type": "uint256"      }    ],    "name": "approve",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "account",        "type": "address"      }    ],    "name": "balanceOf",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "decimals",    "outputs": [      {        "internalType": "uint8",        "name": "",        "type": "uint8"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "spender",        "type": "address"      },      {        "internalType": "uint256",        "name": "subtractedValue",        "type": "uint256"      }    ],    "name": "decreaseAllowance",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "spender",        "type": "address"      },      {        "internalType": "uint256",        "name": "addedValue",        "type": "uint256"      }    ],    "name": "increaseAllowance",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [],    "name": "name",    "outputs": [      {        "internalType": "string",        "name": "",        "type": "string"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "symbol",    "outputs": [      {        "internalType": "string",        "name": "",        "type": "string"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [],    "name": "totalSupply",    "outputs": [      {        "internalType": "uint256",        "name": "",        "type": "uint256"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "recipient",        "type": "address"      },      {        "internalType": "uint256",        "name": "amount",        "type": "uint256"      }    ],    "name": "transfer",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "sender",        "type": "address"      },      {        "internalType": "address",        "name": "recipient",        "type": "address"      },      {        "internalType": "uint256",        "name": "amount",        "type": "uint256"      }    ],    "name": "transferFrom",    "outputs": [      {        "internalType": "bool",        "name": "",        "type": "bool"      }    ],    "stateMutability": "nonpayable",    "type": "function"  }]

const start = async () => {
	
	for (var i=0; i< constructorParameters.length; i++){

      const OptionAMMPool = new ethers.Contract(constructorParameters[i]["Pool Address (Kovan)"], OptionAMMPoolABI, adminWallet)

// start aproval

      const underlyingContract = new ethers.Contract(constructorParameters[i]["Option Address (Kovan)"], erc20ABI, adminWallet);

      const underlyingApproval = await underlyingContract.approve(constructorParameters[i]["Pool Address (Kovan)"], ethers.constants.MaxUint256,  {
        gasPrice:10000000000,
        gasLimit:1250000
      });

      const waitForUnderlyingApproval = await underlyingApproval.wait();
      console.log("approved for mint...", waitForUnderlyingApproval)

//finish approval

// start aproval

      const usdcContract = new ethers.Contract(constructorParameters[i]["Strike Address (Kovan)"], erc20ABI, adminWallet);

      const usdcApproval = await usdcContract.approve(constructorParameters[i]["Pool Address (Kovan)"], ethers.constants.MaxUint256,  {
        gasPrice:10000000000,
        gasLimit:1250000
      });

      const waitForUSDCApproval = await usdcApproval.wait();
      console.log("approved for mint...", waitForUSDCApproval)
//finish approval


      console.log("OPTION AMM POOL", OptionAMMPool.addLiquidity)
	
      //const optionTokenAmount = (constructorParameters[i]["Underlying asset"] =="Komodo Corn (kZC=F)" || constructorParameters[i]["Underlying asset"] == "Komodo Live Cattle (kLE=F)") ? "1000000000000" :  "1000000000000000000";

      const optionTokenAmount = "1000000000000000000";

      const newLiquidity = await OptionAMMPool.addLiquidity(
         optionTokenAmount,
         new BigNumber(constructorParameters[i]["InitialPremium"]).times(new BigNumber(10).pow(6)).toString(), //assuming that most contracts will have 1 token being added
         "0xce4bd47F715ec83ae5819f001cD6CdB843FFFA6A",
  			{
  				gasPrice:10000000000,
  				gasLimit:12500000
  			}
  		);

      console.log("1", 
      [             optionTokenAmount,
         new BigNumber(constructorParameters[i]["InitialPremium"]).times(new BigNumber(10).pow(6)).toString(), //assuming that most contracts will have 1 token being added
         "0xce4bd47F715ec83ae5819f001cD6CdB843FFFA6A",])

      const finishLiquidity = await newLiquidity.wait();

      //console.log(finishLiquidity, finishLiquidity.logs)

      let iface = new ethers.utils.Interface(OptionAMMPoolABI);

      console.log(iface.parseLog(finishLiquidity.logs[0]).args);

	}

  fs.writeFileSync("poolResults.json", JSON.stringify(constructorParameters));
}


start();


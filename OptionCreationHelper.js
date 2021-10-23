const ethers = require('ethers');
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider("https://kovan.infura.io/v3/4af36def3746417b9b93290790e33f23");
const adminWallet = new ethers.Wallet(process.env.ADMIN_KEY, provider);

const optionFactoryAddress = '0xDF2F0a47BDc94e221D6bC396Bc43dB932364cF4C';

const constructorParameters = [
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

const factoryABI = [   {     "inputs": [       {         "internalType": "address",         "name": "wethAddress",         "type": "address"       },       {         "internalType": "address",         "name": "PodPutBuilder",         "type": "address"       },       {         "internalType": "address",         "name": "WPodPutBuilder",         "type": "address"       },       {         "internalType": "address",         "name": "PodCallBuilder",         "type": "address"       },       {         "internalType": "address",         "name": "WPodCallBuilder",         "type": "address"       },       {         "internalType": "address",         "name": "ConfigurationManager",         "type": "address"       }     ],     "stateMutability": "nonpayable",     "type": "constructor"   },   {     "anonymous": false,     "inputs": [       {         "indexed": true,         "internalType": "address",         "name": "deployer",         "type": "address"       },       {         "indexed": false,         "internalType": "address",         "name": "option",         "type": "address"       },       {         "indexed": false,         "internalType": "enum IPodOption.OptionType",         "name": "_optionType",         "type": "uint8"       },       {         "indexed": false,         "internalType": "enum IPodOption.ExerciseType",         "name": "_exerciseType",         "type": "uint8"       },       {         "indexed": false,         "internalType": "address",         "name": "underlyingAsset",         "type": "address"       },       {         "indexed": false,         "internalType": "address",         "name": "strikeAsset",         "type": "address"       },       {         "indexed": false,         "internalType": "uint256",         "name": "strikePrice",         "type": "uint256"       },       {         "indexed": false,         "internalType": "uint256",         "name": "expiration",         "type": "uint256"       },       {         "indexed": false,         "internalType": "uint256",         "name": "exerciseWindowSize",         "type": "uint256"       }     ],     "name": "OptionCreated",     "type": "event"   },   {     "inputs": [],     "name": "WETH_ADDRESS",     "outputs": [       {         "internalType": "address",         "name": "",         "type": "address"       }     ],     "stateMutability": "view",     "type": "function"   },   {     "inputs": [],     "name": "configurationManager",     "outputs": [       {         "internalType": "contract IConfigurationManager",         "name": "",         "type": "address"       }     ],     "stateMutability": "view",     "type": "function"   },   {     "inputs": [       {         "internalType": "string",         "name": "name",         "type": "string"       },       {         "internalType": "string",         "name": "symbol",         "type": "string"       },       {         "internalType": "enum IPodOption.OptionType",         "name": "optionType",         "type": "uint8"       },       {         "internalType": "enum IPodOption.ExerciseType",         "name": "exerciseType",         "type": "uint8"       },       {         "internalType": "address",         "name": "underlyingAsset",         "type": "address"       },       {         "internalType": "address",         "name": "strikeAsset",         "type": "address"       },       {         "internalType": "uint256",         "name": "strikePrice",         "type": "uint256"       },       {         "internalType": "uint256",         "name": "expiration",         "type": "uint256"       },       {         "internalType": "uint256",         "name": "exerciseWindowSize",         "type": "uint256"       }     ],     "name": "createOption",     "outputs": [       {         "internalType": "address",         "name": "",         "type": "address"       }     ],     "stateMutability": "nonpayable",     "type": "function"   },   {     "inputs": [],     "name": "podCallBuilder",     "outputs": [       {         "internalType": "contract IOptionBuilder",         "name": "",         "type": "address"       }     ],     "stateMutability": "view",     "type": "function"   },   {     "inputs": [],     "name": "podPutBuilder",     "outputs": [       {         "internalType": "contract IOptionBuilder",         "name": "",         "type": "address"       }     ],     "stateMutability": "view",     "type": "function"   },   {     "inputs": [],     "name": "wPodCallBuilder",     "outputs": [       {         "internalType": "contract IOptionBuilder",         "name": "",         "type": "address"       }     ],     "stateMutability": "view",     "type": "function"   },   {     "inputs": [],     "name": "wPodPutBuilder",     "outputs": [       {         "internalType": "contract IOptionBuilder",         "name": "",         "type": "address"       }     ],     "stateMutability": "view",     "type": "function"   } ];



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
			constructorParameters[i]["Strike Address (Kovan)"],
			constructorParameters[i]["Underlying Address (Kovan)"],
			parseFloat(constructorParameters[i]["Strike price"]),
			constructorParameters[i]["Expiration date"],
			86401,
			{
				gasPrice:100000000000,
				gasLimit:12500000
			}
		);
		console.log(newOption)
	}
}


start();


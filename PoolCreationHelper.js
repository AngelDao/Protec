const ethers = require('ethers');
const BigNumber = require('bignumber.js');
require('dotenv').config();
const fs = require('fs');

const provider = new ethers.providers.JsonRpcProvider("https://kovan.infura.io/v3/4af36def3746417b9b93290790e33f23");
const adminWallet = new ethers.Wallet(process.env.ADMIN_KEY, provider);

let constructorParameters = [
   {
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
      "IV":20.47
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
      "IV":20.47
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
      "IV":20.47
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
      "IV":34.28
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
      "IV":34.28
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
      "IV":34.28
   },
   {
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
      "IV":15.82
   },
   {
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
      "IV":15.82
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
      "IV":15.82
   },
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
      "IV":16.14
   },
   {
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
      "IV":16.14
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
      "IV":16.14
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
      "IV":14.16
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
      "IV":14.16
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
      "IV":14.16
   }
]


const optionAMMFactoryABI = [  {    "inputs": [      {        "internalType": "contract IConfigurationManager",        "name": "_configurationManager",        "type": "address"      },      {        "internalType": "address",        "name": "_feePoolBuilder",        "type": "address"      }    ],    "stateMutability": "nonpayable",    "type": "constructor"  },  {    "anonymous": false,    "inputs": [      {        "indexed": true,        "internalType": "address",        "name": "deployer",        "type": "address"      },      {        "indexed": false,        "internalType": "address",        "name": "pool",        "type": "address"      },      {        "indexed": false,        "internalType": "address",        "name": "option",        "type": "address"      }    ],    "name": "PoolCreated",    "type": "event"  },  {    "inputs": [],    "name": "configurationManager",    "outputs": [      {        "internalType": "contract IConfigurationManager",        "name": "",        "type": "address"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "_optionAddress",        "type": "address"      },      {        "internalType": "address",        "name": "_stableAsset",        "type": "address"      },      {        "internalType": "uint256",        "name": "_initialIV",        "type": "uint256"      }    ],    "name": "createPool",    "outputs": [      {        "internalType": "address",        "name": "",        "type": "address"      }    ],    "stateMutability": "nonpayable",    "type": "function"  },  {    "inputs": [],    "name": "feePoolBuilder",    "outputs": [      {        "internalType": "contract IFeePoolBuilder",        "name": "",        "type": "address"      }    ],    "stateMutability": "view",    "type": "function"  },  {    "inputs": [      {        "internalType": "address",        "name": "_optionAddress",        "type": "address"      }    ],    "name": "getPool",    "outputs": [      {        "internalType": "address",        "name": "",        "type": "address"      }    ],    "stateMutability": "view",    "type": "function"  }]
const optionAMMFactoryAddress = "0x6F23e5f46022A612E86C24F05Aa80Ce2B42d96ab"

const start = async () => {
	const optionAMMFactory = new ethers.Contract(optionAMMFactoryAddress, optionAMMFactoryABI, adminWallet)

	for (var i=0; i< constructorParameters.length; i++){
		try {
      const newPool = await optionAMMFactory.createPool(
        constructorParameters[i]["Option Address (Kovan)"],
        constructorParameters[i]["Strike Address (Kovan)"],
        new BigNumber(constructorParameters[i]["IV"]).times(new BigNumber(10).pow(18)).toString(),
  			{
  				gasPrice:10000000000,
  				gasLimit:12500000
  			}
  		);


      console.log("1", 
        [
              constructorParameters[i]["Option Address (Kovan)"],
        constructorParameters[i]["Strike Address (Kovan)"],
        new BigNumber(constructorParameters[i]["IV"]).times(new BigNumber(10).pow(18)).toString(),
        ])

      const finishPool = await newPool.wait();

      console.log(finishPool, finishPool.logs)

      let iface = new ethers.utils.Interface(optionAMMFactoryABI);

      console.log(iface.parseLog(finishPool.logs, finishPool.logs[0]).args.pool);

      const pool = iface.parseLog(finishPool.logs[0]).args.pool;
      constructorParameters[i]["Pool Address (Kovan)"] = pool;


    } catch(e){
      console.log(e)
    }

	}

  fs.writeFileSync("poolResults.json", JSON.stringify(constructorParameters));
}


start();


const optionsMetaData = {
  options: [
    {
      address: {
        42: "0x6d4a13f67ca74371a4c89030dfba10463f256602",
      },
      poolAddress: {
        42: "0x3d3a7c1f6df77d52a7c311c96bec66a9b348e112",
      },
      symbol: "SCOWTI:USDC",
      name: "SCOWTI:USDC 84",
      strikePrice: 84000000,
      strikeAsset: "usdc",
      underlyingAsset: "scowti",
      expiration: 1640995199,
      exerciseWindowSize: 86401,
      optionType: "Call",
      exerciseType: "European",
    },
    {
      address: {
        42: "0xe12a07713931de4e975ff70b9adbceff98d5512f",
      },
      poolAddress: {
        42: "0x0be4400ff5579432e295d354f589714d0b9a791e",
      },
      symbol: "SCOWTI:USDC",
      name: "SCOWTI:USDC 80",
      strikePrice: 80000000,
      strikeAsset: "usdc",
      underlyingAsset: "scowti",
      expiration: 1640995199,
      exerciseWindowSize: 86401,
      optionType: "Call",
      exerciseType: "European",
    },
    {
      address: {
        42: "0xeef67a73ce84806586349c5153931cffe31f1426",
      },
      poolAddress: {
        42: "0x42fc174ed20bff940488fb946b563af21b746ad8",
      },
      symbol: "SCOWTI:USDC",
      name: "SCOWTI:USDC 75",
      strikePrice: 75000000,
      strikeAsset: "usdc",
      underlyingAsset: "scowti",
      expiration: 1638316799,
      exerciseWindowSize: 86401,
      optionType: "Call",
      exerciseType: "European",
    },
  ],
  assets: {
    usdc: {
      address: {
        42: "0xe22da380ee6b445bb8273c81944adeb6e8450422",
      },
      symbol: "USDC",
      name: "USD Coin",
      decimals: 6,
    },
    scowti: {
      address: {
        42: "0xf5Ce95DC6D10aE64Ca8E353304846fB98C95aF90",
      },
      symbol: "SCOWTI",
      name: "Synthetic Crude Oil WTI (SCOWTI)",
      decimals: 18,
      IV: 800000000000000000,
    },
  },
};

export default optionsMetaData;

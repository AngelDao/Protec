// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { WrapperBuilder } = require("redstone-flash-storage");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const CSCPriceFeed = await hre.ethers.getContractFactory("CSCPriceFeed");
  let cscpricefeed = await CSCPriceFeed.deploy();
  await cscpricefeed.deployed();
  console.log("CSCPriceFeed deployed to:", cscpricefeed.address);

  const DCPriceFeed = await hre.ethers.getContractFactory("DCPriceFeed");
  let dcpricefeed = await DCPriceFeed.deploy();
  console.log("DCPriceFeed deployed to:", dcpricefeed.address);

  const LEPriceFeed = await hre.ethers.getContractFactory("LEPriceFeed");
  let lepricefeed = await LEPriceFeed.deploy();
  console.log("LEPriceFeed deployed to:", lepricefeed.address);

  const RBPriceFeed = await hre.ethers.getContractFactory("RBPriceFeed");
  let rbpricefeed = await RBPriceFeed.deploy();
  console.log("RBPriceFeed deployed to:", rbpricefeed.address);

  const ZCPriceFeed = await hre.ethers.getContractFactory("ZCPriceFeed");
  let zcpricefeed = await ZCPriceFeed.deploy();
  console.log("ZCPriceFeed deployed to:", zcpricefeed.address);



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

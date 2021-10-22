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
  const RedStoneOracle = await hre.ethers.getContractFactory("RedStoneOracle");
  let redstone = await RedStoneOracle.deploy();

  await redstone.deployed();

  console.log("RedStoneOracleTest deployed to:", redstone.address);

  redstone = WrapperBuilder
      .wrapLite(redstone)
      .usingPriceFeed("redstone-stocks");

  await redstone.authorizeProvider();
  const lastPrice = await redstone.getPrice('TSLA');

  console.log("LastPrice", lastPrice);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

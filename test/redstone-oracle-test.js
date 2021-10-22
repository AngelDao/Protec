const { expect } = require("chai");
const { ethers } = require("hardhat");
const { WrapperBuilder } = require("redstone-flash-storage");

function testGetAPrice(name, ticker) {
  it(`Should return a price of ${name}: ${ticker}`, async function () {
    redstone = WrapperBuilder
      .wrapLite(redstone)
      .usingPriceFeed("redstone-stocks");
    await redstone.authorizeProvider();
    expect(await redstone.getPrice(ticker)).to.be.gt(0);
  });
}

let returnedPrice;
let redstone;

describe("Redstone Oracle", () => {

  beforeEach(async function () {
    const RedStoneOracle = await ethers.getContractFactory("RedStoneOracle");
    redstone = await RedStoneOracle.deploy();
  });

  testGetAPrice('Tesla','TSLA');
  testGetAPrice('Rice','ZR=F');
  testGetAPrice('Corn','ZC=F');
  testGetAPrice('Gasoline','RB=F');

});

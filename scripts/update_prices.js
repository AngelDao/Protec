const { ethers } = require("hardhat");
const { WrapperBuilder } = require("redstone-flash-storage");

const tickerArray = 
[
    "RB=F",
    "DC=F",
    "CSC=F",
    "ZC=F",
    "LE=F"
];

let redstone = await ethers.getContractAt('RedStoneOracle','0x809C759f2b02575A4CC347Ee228Ccb7C75e0910f');

redstone = WrapperBuilder.wrapLite(redstone).usingPriceFeed("redstone-stocks");

const main = async() => {
    for (let i =0; i < tickerArray.length; i++ ) {
        await redstone.authorizeProvider();
        await redstone.getPrice(tickerArray[i]);
    }
}


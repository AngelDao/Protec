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

const updateItem = async(number) => {
    let redstone = await ethers.getContractAt('RedStoneOracle','0x809C759f2b02575A4CC347Ee228Ccb7C75e0910f');
    redstone = WrapperBuilder
        .wrapLite(redstone)
        .usingPriceFeed("redstone-stocks");
    //await redstone.authorizeProvider({gasPrice:20});
    await redstone.getPrice(tickerArray[number], {gasPrice:200});
    console.log(`Updated price for ${tickerArray[number]};`);
}

updateItem(0);


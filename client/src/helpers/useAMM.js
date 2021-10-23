import { ethers } from 'ethers'

export const buyOption = async (
    optionAMMContract,
    amountOptionsToBuy,
    ethers
) => {
    const owner = await ethers.getAddress();

    // Building parameters to make trade
    const parameters = await optionAMMContract
        .getOptionTradeDetailsExactAOutput(amountOptionsToBuy);

    await optionAMMContract.tradeExactAOutput(
        amountOptionsToBuy,
        parameters[0],
        owner,
        parameters[1]
    );    
}

export const sellOption = async (
    optionAMMContract,
    amountToSell,
    ethers
    ) => {
    const owner = await ethers.getAddress();

    // Building parameters to make trade
    const parameters = await optionAMMContract
        .getOptionTradeDetailsExactAInput(amountToSell);

    await optionAMMContract.tradeExactAOutput(
        amountToSell,
        parameters[0],
        owner,
        parameters[1]
    ); 
	
}
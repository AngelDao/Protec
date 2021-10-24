import { ethers } from "ethers";

export const buyOption = async (owner, ctrct, amountOptionsToBuy) => {
  // Building parameters to make trade
  console.log("a", ctrct);
  const parameters = await ctrct.getOptionTradeDetailsExactAOutput(
    parseInt(amountOptionsToBuy.toString())
  );

  console.log(parameters);
  await ctrct.tradeExactAOutput(
    amountOptionsToBuy,
    parameters[0],
    owner,
    parameters[1]
  );
};

export const sellOption = async (optionAMMContract, amountToSell, ethers) => {
  const owner = await ethers.getAddress();

  // Building parameters to make trade
  const parameters = await optionAMMContract.getOptionTradeDetailsExactAInput(
    amountToSell
  );

  await optionAMMContract.tradeExactAOutput(
    amountToSell,
    parameters[0],
    owner,
    parameters[1]
  );
};

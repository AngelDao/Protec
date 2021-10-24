import { ethers } from "ethers";

export const buyOption = async (owner, ctrct, amountOptionsToBuy) => {
  // Building parameters to make trade
  console.log("a", ctrct);
  const parameters = await ctrct.getOptionTradeDetailsExactBOutput(
    amountOptionsToBuy
  );

  console.log(ctrct.address);

  console.log(parameters[0].toString());

  console.log(amountOptionsToBuy.toString());
  await ctrct.tradeExactBOutput(
    amountOptionsToBuy,
    parameters[0],
    owner,
    parameters[1],
    {
      gasPrice: 2000000000,
      gasLimit: 12500000,
    }
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

import { ethers } from "ethers";

export const approve = async (tokenContract, spenderContract) => {
  return await tokenContract.approve(
    spenderContract.address,
    ethers.constants.MaxUint256
  );
};

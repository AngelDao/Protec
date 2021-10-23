import { ethers } from 'ethers'

export const approve = async (tokenContract, spenderContract) => {
  return await tokenContract.methods
    .approve(spenderContract.options.address, ethers.constants.MaxUint256)
}

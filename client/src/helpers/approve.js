import { ethers } from 'ethers'

export const approve = async (tokenContract, spenderContract, account) => {
  return tokenContract.methods
    .approve(spenderContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

import { ethers } from 'ethers'
import erc20Abi from '../abis/ERC20.json';
import podCallAbi from '../abis/PodCall.json';
import OptionAMMPoolAbi from 'OptionAMMPool.json';

const getContract = (address, abi, ethers) => {
  return new ethers.Contract(address, abi, ethers)
}

export const getErc20Contract = (address, ethers) => {
  return getContract(address, erc20Abi, ethers)
}
export const PodCallContract = (address, ethers) => {
  return getContract(address, podCallAbi, ethers)
}
export const OptionAMMPoolContract = (address, ethers) => {
  return getContract(address, OptionAMMPoolAbi, ethers)
}
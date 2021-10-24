import BigNumber from 'bignumber.js'

export const getTokenBalance= async (tokenContract, decimals, account) => {
  const rawAmount = tokenContract.methods
    .balanceOf(account)
    .call()
  return new BigNumber(rawAmount).div(new BigNumber(10).pow(decimals))
}
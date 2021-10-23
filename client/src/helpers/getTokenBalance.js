export default getTokenBalance= async (tokenContract, account) => {
  return tokenContract.methods
    .balanceOf(account)
    .call()
}
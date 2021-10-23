export default const getTokenBalance= async (tokenContract, account) => {
  return tokenContract.methods
    .balanceOf(account)
    .call()
}
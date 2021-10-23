import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'

    /**
     * @notice addLiquidity in any proportion of tokenA or tokenB
     *
     * @dev This function can only be called before option expiration
     *
     * @param amountOfA amount of TokenA to add
     * @param amountOfB amount of TokenB to add
     * @param owner address of the account that will have ownership of the liquidity
     */

export const addLiquidity = async (optionAMMPoolContract, amountTokenA, amountTokenB, ethers) => {
	const owner = await ethers.getAddress()
	return await optionAMMPoolContract.addLiquidity(amountTokenA, amountTokenB, owner)
}
export const removeLiquidity = async (optionAMMPoolContract, ethers) => {
	return await optionAMMPoolContract.removeLiquidity(100, 100)
}
export const viewLiquidity = async (optionAMMPoolContract, ethers) => {
	return await optionAMMPoolContract.getRemoveLiquidityAmounts(100, 100)
	// [withdrawAmountOptions, withdrawTokenB]
}
import { ethers } from 'ethers'
import getTokenBalance from './getTokenBalance'

export const getOptions = async (account, optionContracts) => {
    const ops = [];
    for (const optionContract of optionContracts) {
      optionContract.methods
        .balanceOf(account)
        .call()
        .then((bal) => {
          optionContract.methods
            .name()
            .call()
            .then((name) => {
              ops.push({ optionName: name, optionBal: bal });
            });
        });
    }
	return ops;
}
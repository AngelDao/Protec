import { ethers } from 'ethers'
import getTokenBalance from './getTokenBalance'

export const getOptions = async (account, optionContracts) => {
    const ops = [];
    for (const optionContract of optionContracts) {
      optionContract.balanceOf(account.address)
        .then((bal) => {
          optionContract.name()
            .then((name) => {
              ops.push({ optionName: name, optionBal: bal });
            });
        });
    }
	return ops;
}
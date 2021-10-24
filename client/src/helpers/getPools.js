import { ethers } from 'ethers'
import getTokenBalance from './getTokenBalance'
import { getErc20Contract } from './getContract';

export const getPools = async (account, optionAMMPoolcontracts) => {
      let userProvisions = [];
      for(let i=0; i < optionAMMPoolcontracts.length; i++) {
        let tempDepositSnapshot = await optionAMMPoolcontracts[i].getUserDepositSnapshot();
        if(tempDepositSnapshot[0] != 0 && tempDepositSnapshot[1] !=0 ) {
          let assetAaddress = await optionAMMPoolcontracts[i].tokenA();
          let assetA = await getErc20Contract(assetAaddress, account);
          let assetAName = await assetA.name();
          userProvisions.push({
            optionName:`Option AMM Pool ${assetAName}`,
            optionABal:tempDepositSnapshot[0],
            optionBBal:tempDepositSnapshot[1],

          });
        }
        if(userProvisions.length >0) {
          return userProvisions;
        } else {
          return 0;
        }

      }
}
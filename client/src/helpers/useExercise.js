import { ethers } from 'ethers'
import getTokenBalance from './getTokenBalance'

export const useExercise = async (account, callContract, tokenContract) => {
    getTokenBalance(tokenContract, account).then(bal => {
       return callContract.methods.exercise(bal).call()
    })
}
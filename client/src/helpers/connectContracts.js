import { ethers } from "ethers";
import optionsResults from "../utils/optionsResults";
import ERC20 from "../abis/ERC20.json";
import OptionAMMPool from "../abis/OptionAMMPool.json";
import PodCall from "../abis/PodCall.json";

const connectContracts = async (account) => {
  optionsResults.forEach((e) => {
    const optionToken = new ethers.Contract(
      e["Option Address (Kovan)"],
      ERC20,
      account.signer
    );
    const optionAMM = new ethers.Contract(
      e["Pool Address (Kovan)"],
      OptionAMMPool,
      account.signer
    );
    e.optionToken = optionToken;
    e.optionAMM = optionToken;
  });
  console.log(optionsResults);
  return optionsResults;
};

export default connectContracts;

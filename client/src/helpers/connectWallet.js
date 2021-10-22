import { ethers } from "ethers";

const connectWallet = async (provider) => {
  await provider.enable();
  const enabledProvider = new ethers.providers.Web3Provider(provider);
  const signer = enabledProvider.getSigner();
  const address = await signer.getAddress();
  const network = await enabledProvider.getNetwork();

  return { signer, address, network, provider: enabledProvider };
};

export default connectWallet;

// src/utils/connect.js
import { ethers } from "ethers";
import { getCarbonCreditContractWithSigner } from "./getContract";

export async function connectWalletAndGetContract() {
  if (!window.ethereum) {
    throw new Error("MetaMask not found");
  }

  // 1) Request accounts
  await window.ethereum.request({ method: "eth_requestAccounts" });

  // 2) Create provider (ethers v6)
  const provider = new ethers.BrowserProvider(window.ethereum);

  // 3) Get signer
  const signer = await provider.getSigner();

  // 4) Get address
  const address = await signer.getAddress();

  // 5) Create contract with signer
  const contract = getCarbonCreditContractWithSigner(signer);

  // 6) Network info
  const network = await provider.getNetwork();

  return { provider, signer, address, contract, chainId: Number(network.chainId) };
}

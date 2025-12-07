// src/constants/contract.js

import { ethers } from "ethers";
import CarbonCreditNFTArtifact from "../../artifacts/contracts/carboncredit.sol/CarbonCreditNFT.json";

// Hardhat local default chain
export const CHAIN_ID = 31337;
export const RPC_URL = "http://127.0.0.1:8545";

// Contract address sau khi deploy local
export const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

// ABI
export const CONTRACT_ABI = CarbonCreditNFTArtifact.abi;

// Helper tạo contract instance
export function getCarbonCreditContract(signerOrProvider) {
  if (!signerOrProvider) {
    throw new Error("Missing signer or provider");
  }
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signerOrProvider);
}

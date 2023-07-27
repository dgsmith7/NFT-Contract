// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers, run, network } = require("hardhat");

async function main() {
  const args = {
    mint_price: "20000000000000000", // .02 MATIC
    max_tokens: 3,
    base_uri:
      "https://ipfs.io/ipfs/QmTwiGMeNjhrECN5tHkSEN7jHDEQ3tvFzeCXF4f3EhZJzv",
    royaltyArtist: process.env(STUNT_WALLET_ADDRESS),
    royaltyBasis: 500,
  };
  const CourseNFTContractFactory = await ethers.getContractFactory(
    "courseNFTContract"
  );
  const courseNFTContract = await CourseNFTContractFactory.deploy(
    args.mint_price,
    args.max_tokens,
    args.base_uri,
    args.royaltyArtist,
    args.royaltyBasis
  );
  // depoly
  await courseNFTContract.waitForDeployment();
  let contractAddress = await courseNFTContract.getAddress();
  console.log(`Contract deployed to ${contractAddress}`);
  // verify
  if (
    // we are on a live testnet and have the correct api key
    (network.config.chainId === 80001 && process.env.POLYGONSCAN_API_KEY) ||
    (network.config.chainId === 1115511 && process.env.ETHERSCAN_API_KEY)
  ) {
    console.log("Verifying...");
    await courseNFTContract.deployTransaction.wait(6);
    await verify(contractAddress, []);
    console.log("Completed.");
  }
  // mint 3
  const ipfs = [
    "https://ipfs.io/ipfs/bafkreidr5a7hvyiilxfug2yqpbkdowcahpbsw4jszstz6iur5ae5dx7b54",
    "",
    "",
  ];
  console.log("Minting 3 tokens...");
  for (let i = 0; i < 3; i++) {
    const transactionResponse = await courseNFTContract.mintTo(ipfs[i]);
    await transactionResponse.wait(3);
    console.log(`Token ${i + 1} completed.`);
  }
}

async function verify(contractAddress, args) {
  console.log("verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (err) {
    if (err.message.toLowerCase.includes("already verified")) {
      console.log("Already verified");
    } else {
      console.log(err);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

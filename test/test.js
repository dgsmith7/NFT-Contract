const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTContract", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("NFTContract");

    const instance = await ContractFactory.deploy();
    await instance.waitForDeployment();

    expect(await instance.name()).to.equal("NFT-Contract");
  });
});

const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const { helpers } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("CourseNFTContract", async function () {
  let courseNFTContractFactory;
  let courseNFTContract;
  let args = {
    mint_price: "2000000000000000000",
    max_tokens: 3,
    base_uri:
      "https://ipfs.io/ipfs/bafkreidr5a7hvyiilxfug2yqpbkdowcahpbsw4jszstz6iur5ae5dx7b54",
    royaltyArtist: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    royaltyBasis: 500,
  };

  this.beforeEach(async function () {
    courseNFTContractFactory = await ethers.getContractFactory(
      "CourseNFTContract"
    );
    courseNFTContract = await courseNFTContractFactory.deploy(
      args.mint_price,
      args.max_tokens,
      args.base_uri,
      args.royaltyArtist,
      args.royaltyBasis
    );
    await courseNFTContract.waitForDeployment(
      args.mint_price,
      args.max_tokens,
      args.base_uri,
      args.royaltyArtist,
      args.royaltyBasis
    );
  });

  describe("Construction and initialization", async function () {
    this.beforeEach(async function () {
      courseNFTContractFactory = await ethers.getContractFactory(
        "CourseNFTContract"
      );
      courseNFTContract = await courseNFTContractFactory.deploy(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
      await courseNFTContract.waitForDeployment(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
    });

    it("should be named CourseNFTContract", async function () {
      const expectedValue = "CourseNFTContract";
      const currentValue = await courseNFTContract.name();
      assert.equal(currentValue.toString(), expectedValue);
    });

    it("should be have symbol CNC", async function () {
      const expectedValue = "CNC";
      const currentValue = await courseNFTContract.symbol();
      assert.equal(currentValue.toString(), expectedValue);
    });

    it("should have a mint price set when constructed", async function () {
      const expectedValue = args.mint_price;
      const currentValue = await courseNFTContract.getMintPrice();
      assert.equal(currentValue.toString(), expectedValue);
    });

    it("should have a max token supply set when constructed", async function () {
      const expectedValue = args.max_tokens;
      const currentValue = await courseNFTContract.getMaxSupply();
      assert.equal(currentValue.toString(), expectedValue);
    });

    it("should have a base URI set when constructed", async function () {
      const expectedValue = args.base_uri;
      const currentValue = await courseNFTContract.getBaseURI();
      assert.equal(currentValue.toString(), expectedValue);
    });

    it("should set roylaty artist when constructed", async function () {
      let tokenId = 1;
      const expectedValue = args.royaltyArtist;
      const currentValue = await courseNFTContract.royaltyInfo(
        1,
        ethers.parseUnits("2.0", "ether")
      );
      assert.equal(currentValue[0].toString(), expectedValue);
    });

    it("should set roylaty share when constructed", async function () {
      const expectedValue = (args.royaltyBasis * args.mint_price) / 10000;
      const currentValue = await courseNFTContract.royaltyInfo(
        1,
        ethers.parseUnits("2.0", "ether")
      );
      assert.equal(currentValue[1].toString(), expectedValue);
    });

    it("should set owner to the deployer's address when constucted", async function () {
      const expectedValue = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
      const currentValue = await courseNFTContract.owner();
      assert.equal(currentValue.toString(), expectedValue);
    });
  });

  describe("Receive function", async function () {
    this.beforeEach(async function () {
      courseNFTContractFactory = await ethers.getContractFactory(
        "CourseNFTContract"
      );
      courseNFTContract = await courseNFTContractFactory.deploy(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
      await courseNFTContract.waitForDeployment(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
    });

    it("should be called and revert if called from low-level transaction", async function () {
      let contractAddress = await courseNFTContract.getAddress();
      const [buyer] = await ethers.getSigners();
      await expect(
        buyer.sendTransaction({
          to: contractAddress,
          value: ethers.parseUnits("2.0", "ether"),
        })
      ).to.be.revertedWithCustomError;
    });
  });

  describe("Fallback function", async function () {
    this.beforeEach(async function () {
      courseNFTContractFactory = await ethers.getContractFactory(
        "CourseNFTContract"
      );
      courseNFTContract = await courseNFTContractFactory.deploy(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
      await courseNFTContract.waitForDeployment(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
    });

    it("should be called and revert if called from low-level transaction with no data", async function () {
      let contractAddress = await courseNFTContract.getAddress();
      const [buyer] = await ethers.getSigners();
      expect(buyer.sendTransaction({ to: contractAddress })).to.be
        .revertedWithCustomError;
    });
  });

  describe("mintTo function", async function () {
    this.beforeEach(async function () {
      courseNFTContractFactory = await ethers.getContractFactory(
        "CourseNFTContract"
      );
      courseNFTContract = await courseNFTContractFactory.deploy(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
      await courseNFTContract.waitForDeployment(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
      let contractAddress = await courseNFTContract.getAddress();
      const [buyer] = await ethers.getSigners();
    });
    /////////////
    it("should revert if called with wrong amount of ether", async function () {
      expect(buyer.sendTransaction({ to: contractAddress })).to.be.reverted;
    });

    it("should revert if called after all tokens are minted", async function () {
      await expect(buyer.sendTransaction({ to: contractAddress })).to.be
        .reverted;
    });

    it("should increase the tokenIdCounter by with with each mint", async function () {});

    it("should emit an event when minting is completed", async function () {});

    it("should have set the token uri during minting function", async function () {});

    it("should have paid the owner the value that was sent", async function () {});

    it("should have a balance of zero after minting", async function () {});

    it("should emit an event after funds are distributed during mint", async function () {});
  });

  describe("getter functions", async function () {
    this.beforeEach(async function () {
      courseNFTContractFactory = await ethers.getContractFactory(
        "CourseNFTContract"
      );
      courseNFTContract = await courseNFTContractFactory.deploy(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
      await courseNFTContract.waitForDeployment(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
    });
  });

  describe("setRoylaty function", async function () {
    this.beforeEach(async function () {
      courseNFTContractFactory = await ethers.getContractFactory(
        "CourseNFTContract"
      );
      courseNFTContract = await courseNFTContractFactory.deploy(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
      await courseNFTContract.waitForDeployment(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
    });
  });

  describe("_baseUri function", async function () {
    this.beforeEach(async function () {
      courseNFTContractFactory = await ethers.getContractFactory(
        "CourseNFTContract"
      );
      courseNFTContract = await courseNFTContractFactory.deploy(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
      await courseNFTContract.waitForDeployment(
        args.mint_price,
        args.max_tokens,
        args.base_uri,
        args.royaltyArtist,
        args.royaltyBasis
      );
    });
  });
});

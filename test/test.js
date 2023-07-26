const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const { helpers } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("CourseNFTContract", async function () {
  let courseNFTContractFactory;
  let courseNFTContract;
  let args = {
    mint_price: "2000000000000000000",
    max_tokens: 7,
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
        "2000000000000000000"
      );
      assert.equal(currentValue[0].toString(), expectedValue);
    });

    it("should set roylaty share when constructed", async function () {
      const expectedValue = (args.royaltyBasis * args.mint_price) / 10000;
      const currentValue = await courseNFTContract.royaltyInfo(
        1,
        "2000000000000000000"
      );
      assert.equal(currentValue[1].toString(), expectedValue);
    });

    it("should set owner to the deployer's address when constucted", async function () {
      const expectedValue = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
      const currentValue = await courseNFTContract.owner();
      assert.equal(currentValue.toString(), expectedValue);
    });
  });
});

/////////

// how to call with payable during test?
// describe("Minting function", async function () {
//   it("should revert mint with max supply reached error if minting over max supply", async function () {
//     await baconbitsNFT.mintTo();
//     await baconbitsNFT.mintTo();
//     await baconbitsNFT.mintTo();
//     await expect(baconbitsNFT.mintTo()).to.be.reverted;
//   });

//   it("should revert if mint price does not equal transaction value on mint", async function () {});

//   it("should increase the tokenIdCounter by with with each mint", async function () {});

//   it("should emit an event when minting is completed", async function () {});

//   it("should have a balance of zero after minting", async function () {});

//   it("should emit an event after funds are distributed during mint", async function () {});
// });

// it("should be 0 if royaltyInfo is called without setting roylaties", async function () {
//   const expectedValue = 0;
//   const currentValue = await baconbitsNFT.royaltyInfo(0, 2000000000000000000);
//   assert.equal(currentValue.toString(), expectedValue);
// });

//   describe("Setting disribution payees and shares", async function () {
//     it("should have no payees if none are set", async function () {});

//     it("should have exactly the number of payees that were set up", async function () {});

//     it("Establishes a list of payees for payment distribution plan", async function () {
//       const transactionResponse = await baconbitsNFT.setDistributionParameters(
//         [
//           "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
//           "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
//           "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
//           "0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
//           "0x17F6AD8Ef982297579C203069C1DbfFE4348c372",
//         ],
//         [750, 750, 500, 4000, 4000]
//       );
//       const expectedValue = "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2";
//       await transactionResponse.wait(1);
//       const currentValue = await baconbitsNFT.payees(0);
//       assert.equal(currentValue.toString(), expectedValue);
//     });

//     it("Establishes a list of shares for payment distribution plan", async function () {
//       const transactionResponse = await baconbitsNFT.setDistributionParameters(
//         [
//           "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
//           "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
//           "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
//           "0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
//           "0x17F6AD8Ef982297579C203069C1DbfFE4348c372",
//         ],
//         [750, 750, 500, 4000, 4000]
//       );
//       const expectedValue = "4000";
//       await transactionResponse.wait(1);
//       const currentValue = await baconbitsNFT.shares(4);
//       assert.equal(currentValue.toString(), expectedValue);
//     });

//     it("should emit an event when payment distribution is set up", async function () {});
//   });
// });

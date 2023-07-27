require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const ALCHEMY_URL = `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
const STUNT_WALLET_PRIVATE_KEY = process.env.STUNT_WALLET_PRIVATE_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN_API_KEY,
      sepolia: ETHERSCAN_API_KEY,
      polygon: POLYGONSCAN_API_KEY,
      polygonMumbai: POLYGONSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC",
    outputFile: "gas-report.txt",
    noColors: true,
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    polygonMumbai: {
      url: ALCHEMY_URL,
      accounts: [STUNT_WALLET_PRIVATE_KEY],
      gasPrice: 35000000000,
      chainId: 80001,
    },
    sepolia: {
      url: ALCHEMY_URL,
      accounts: [STUNT_WALLET_PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  solidity: {
    version: "0.8.9", // use an exact version here and in contract to avoid verification problems
    settings: {
      optimizer: {
        enabled: false, // may cause verification problems if true
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};

require('@openzeppelin/hardhat-upgrades');
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/SGx83D2PIhNxQ6grdIRGHVuESravf7KZ",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan:{
    apiKey:"9NR2BKD8DK2GCIHVTZ1U9AHQEJZC1XC66J"
  }
};
//0xBDE1b5aFa26D6AA0D39522dF67c0edE70487b16D

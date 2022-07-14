// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.


const hre = require("hardhat");
const { upgrades } = require("hardhat");
async function main() {
  const MyContract = await hre.ethers.getContractFactory("MyContract");
  const mycontract     = await upgrades.upgradeProxy(
    "0x7f32602aDBf7fd5B41109f30719B4EF44D700a13",
    MyContract
  );
  await mycontract.deployed();
  console.log("MyContract Updated");
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
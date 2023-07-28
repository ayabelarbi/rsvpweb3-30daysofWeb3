const hre = require("hardhat");

const main = async () => {
  const rsvpContract = await ethers.deployContract('Web3RSVP');
  await rsvpContract.waitForDeployment();
  console.log("Contract deployed to:", rsvpContract.target);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

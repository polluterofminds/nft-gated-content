require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs) => {
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, "ether"), "ETH");
  });

const ALCHEMY_API_KEY = "awL0dtstZIqTKiAWbuZInejG1XVxrgLS";
const RINKEBY_PRIVATE_KEY = "5dd617ff66940f8b5863b5dc3089c5fe1d0020aaa59bfc8628c6fb4c8d1c7eb9";

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      id: 4,
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
      gasMultiplier: 2
    },
  },
};

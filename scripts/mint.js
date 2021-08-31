const hre = require("hardhat");

async function main() {

  const PFPinata = await hre.ethers.getContractFactory("PFPinatas");
  const contract = PFPinata.attach("Your contract address");
  const mintedNft = await contract.mintTo("Your wallet address");

  console.log("token minted", mintedNft);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  
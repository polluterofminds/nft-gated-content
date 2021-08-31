const hre = require("hardhat");

async function main() {

  const PFPinata = await hre.ethers.getContractFactory("PFPinatas");
  const contract = PFPinata.attach("YOUR CONTRACT ADDRESS");
  const owner = await contract.ownerOf(1);

  console.log({owner});
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
const hre = require("hardhat");

async function main() {

  const PFPinata = await hre.ethers.getContractFactory("PFPinatas");
  const contract = PFPinata.attach("0xF58ff4088372f2E11acae479e65143bCEA3D3E37");
  const uri = await contract.tokenURI(8);
  // const owner = await contract.ownerOf(1);

  console.log({uri});
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
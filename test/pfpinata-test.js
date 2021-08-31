const { expect } = require("chai");
const { ethers } = require("hardhat");
const BASE_URI = "ipfs://FAKE_IPFS_CID/";
const TEST_WALLET = "0x243dc2F47EC5A0693C5c7bD39b31561cCd4B0e97";

describe("PFPinatas", function () {
  it("Should mint a new token", async function () {
    const PFPinata = await ethers.getContractFactory("PFPinatas");
    const pfpPinata = await PFPinata.deploy(BASE_URI);
    await pfpPinata.deployed();
    await pfpPinata.mintTo(TEST_WALLET);
    expect(await pfpPinata.ownerOf(1)).to.equal(TEST_WALLET);
  });
  it("Should return a valid token URI", async function () {
    const PFPinata = await ethers.getContractFactory("PFPinatas");
    const pfpPinata = await PFPinata.deploy(BASE_URI);
    await pfpPinata.deployed(BASE_URI);
    await pfpPinata.mintTo(TEST_WALLET);
    expect(await pfpPinata.ownerOf(1)).to.equal(TEST_WALLET);
    expect(await pfpPinata.tokenURI(1)).to.equal(`${BASE_URI}1`);
  });
});

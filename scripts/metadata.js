const fs = require("fs");
const faker = require('faker');
const TOTAL = 4;
const baseCID = "Your CID for your Base URI";
const gatewayCustomDomain = "Your custom dedicated gateway domain"

const generateRandomMetadata = (id) => {
  return {
    name: faker.name.findName(), 
    description: faker.lorem.sentences(), 
    image: `${gatewayCustomDomain}/ipfs/${baseCID}/${id}`
  }
}
(async () => {
  for(let i=1; i < TOTAL + 1; i++) {
    const metadata = generateRandomMetadata(i)
    fs.writeFileSync(`./metadata/${i}`, JSON.stringify(metadata));
  }
  console.log("Done!");
})();
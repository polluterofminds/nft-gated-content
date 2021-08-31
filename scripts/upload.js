const PinataJWT = "Your Pinata JWT"
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");
const recursive = require("recursive-fs");
const basePathConverter = require("base-path-converter");

async function main() {
  try {
    const path = "./metadata";
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    recursive.readdirr(path, function (err, dirs, files) {
      let data = new FormData();
      files.forEach((file) => {
        data.append(`file`, fs.createReadStream(file), {
          filepath: basePathConverter(path, file),
        });
      });

      const metadata = JSON.stringify({
        name: "Pinatas",
      });
      data.append("pinataMetadata", metadata);

      return axios
        .post(url, data, {
          maxBodyLength: "Infinity",
          headers: {
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
            Authorization: `Bearer ${PinataJWT}`,
          },
        })
        .then(function (response) {
          console.log(response.data);
          process.exit(0);
        })
        .catch(function (error) {
          throw error;
        });
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main(); 

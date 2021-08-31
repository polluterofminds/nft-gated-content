// contracts/PFPinatas.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract PFPinatas is ERC721 {
    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    string private baseURI;
    constructor(string memory baseUri) ERC721("PFPinatas", "PFPP") {
        baseURI = baseUri;
    }

    function tokenURI(uint256 tokenId) override view public returns (string memory) {
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";
    }

    function mintTo(address receiver)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _safeMint(receiver, newItemId);        
        return newItemId;
    }
}

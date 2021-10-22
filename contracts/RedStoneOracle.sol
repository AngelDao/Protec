//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "redstone-flash-storage/lib/contracts/message-based/PriceAware.sol";
import "hardhat/console.sol";

contract RedStoneOracle is PriceAware {
    
  function getPrice(string memory ticker) public view returns(uint price) {
    price = getPriceFromMsg(stringMemorytoBytes32(ticker));
    require(price != 0, 'no price returned!');
  }

  function stringMemorytoBytes32(string memory str) internal pure returns (bytes32 result) {
    bytes memory tempString = bytes(str);
    require(tempString.length != 0, 'empty string argument!');
    assembly {
        result := mload(add(str, 32))
    }
  }

}


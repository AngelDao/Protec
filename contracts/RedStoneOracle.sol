//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "redstone-flash-storage/lib/contracts/message-based/PriceAware.sol";
import "hardhat/console.sol";

contract RedStoneOracle is PriceAware {

  mapping(bytes32 => uint256) private lastPrice;
    
  function getPrice(string memory ticker) public {
    bytes32 tickerData = stringMemorytoBytes32(ticker);
    uint256 price = getPriceFromMsg(tickerData);
    require(price != 0, 'no price returned!');
    _storePrice(tickerData,price);
  }

  function stringMemorytoBytes32(string memory str) internal pure returns (bytes32 result) {
    bytes memory tempString = bytes(str);
    require(tempString.length != 0, 'empty string argument!');
    assembly {
        result := mload(add(str, 32))
    }
  }

  function _storePrice(bytes32 tickerData, uint256 price) internal {
    lastPrice[tickerData] = price;
  }

  function getLastPrice(string memory ticker) public view returns(uint256) {
    bytes32 tickerData = stringMemorytoBytes32(ticker);
    require(lastPrice[tickerData] != 0, 'No stored price!, run getPrice()');
    return lastPrice[tickerData];
  }

}


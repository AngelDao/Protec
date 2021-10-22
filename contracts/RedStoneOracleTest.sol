//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "redstone-flash-storage/lib/contracts/message-based/PriceAware.sol";
import "hardhat/console.sol";

contract RedStoneOracleTest is PriceAware {
    
  uint256 public commodityLastPrice;
  
  function getPrice() public {
    console.log(bytes32("TSLA"));
    uint256 price = getPriceFromMsg(bytes32("TSLA"));
    require(price != 0, 'no price returned!');
    commodityLastPrice = price;
  }
 
}


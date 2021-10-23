// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RedstonePriceFeed.sol";

contract CSCPriceFeed is RedstonePriceFeed {
    constructor() RedstonePriceFeed("CSC=F") {}
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RedstonePriceFeed.sol";

contract ZCPriceFeed is RedstonePriceFeed {
    constructor() RedstonePriceFeed("ZC=F") {}
}
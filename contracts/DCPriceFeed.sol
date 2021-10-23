// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RedstonePriceFeed.sol";

contract DCPriceFeed is RedstonePriceFeed {
    constructor() RedstonePriceFeed("DC=F") {}
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RedstonePriceFeed.sol";

contract RBPriceFeed is RedstonePriceFeed {
    constructor() RedstonePriceFeed("RB=F") {}
}
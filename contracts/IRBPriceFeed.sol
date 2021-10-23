// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IRedstonePriceFeed.sol";

contract IRBPriceFeed is IRedstonePriceFeed {
    constructor() IRedstonePriceFeed("RB=F") {}
}
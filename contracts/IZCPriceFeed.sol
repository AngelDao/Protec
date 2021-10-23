// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IRedstonePriceFeed.sol";

contract IZCPriceFeed is IRedstonePriceFeed {
    constructor() IRedstonePriceFeed("ZC=F") {}
}
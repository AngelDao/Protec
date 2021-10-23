// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IRedstonePriceFeed.sol";

contract ILEPriceFeed is IRedstonePriceFeed {
    constructor() IRedstonePriceFeed("LE=F") {}
}
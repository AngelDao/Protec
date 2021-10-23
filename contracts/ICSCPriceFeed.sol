// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IRedstonePriceFeed.sol";

contract ICSCPriceFeed is IRedstonePriceFeed {
    constructor() IRedstonePriceFeed("CSC=F") {}
}
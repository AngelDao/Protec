// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IRedstonePriceFeed.sol";

contract IDCPriceFeed is IRedstonePriceFeed {
    constructor() IRedstonePriceFeed("DC=F") {}
}
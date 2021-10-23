// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RedstonePriceFeed.sol";

contract LEPriceFeed is RedstonePriceFeed {
    constructor() RedstonePriceFeed("LE=F") {}
}
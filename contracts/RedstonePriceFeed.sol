// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./IPriceFeed.sol";
import "./RedStoneOracle.sol";

contract RedstonePriceFeed is IPriceFeed {
    string public ticker;
    address public redstoneFeedAddress = 0x809C759f2b02575A4CC347Ee228Ccb7C75e0910f;

	constructor(string memory _ticker) {
        ticker = _ticker;
    }

    /**
     * @dev Get the latest price
     */
    function getLatestPrice() external override view returns (int256, uint256) {
        return (int(RedStoneOracle(redstoneFeedAddress).getLastPrice(ticker)), 0);
    }

    /**
     * @dev Get the latest round data
     */
    function latestRoundData()
        external
        override
        pure
        returns (
            uint80 roundId,
            int256 answer,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        )
    {
        return (0, 0, 0, 0, 0);
    }

    /**
     * @dev Get asset decimals
     */
    function decimals() external override pure returns (uint8) {
        return 18;
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract SyntheticCrudeOilWTI is ERC20Burnable, Ownable {
    constructor() ERC20("Synthetic Crude Oil WTI", "SCOWTI") {}

    function mint(address _addr, uint _amount) public onlyOwner {
	    _mint(_addr, _amount);
    }

    function getPrice() public pure returns (uint) {
        return 3;
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SyntheticCrudeOilWTI.sol";

contract MintDummy {
    SyntheticCrudeOilWTI private scowti;

    constructor(SyntheticCrudeOilWTI _scowti) {
        scowti = _scowti;
    }

    function mint(uint _amount) public payable {
        require(msg.value >= scowti.getPrice() * _amount, "Not enought ETH");
        scowti.mint(msg.sender, _amount);
    }

    function withdraw(uint _amount) public {
        require(scowti.balanceOf(msg.sender) > _amount, "Not enought tokens");
        scowti.burn(_amount);
        payable(msg.sender).transfer(scowti.getPrice() * _amount);
    }
}
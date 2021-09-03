// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CarbonToken is ERC20, Ownable {
	/**
     * @dev Constructor that gives _msgSender() all of existing tokens.
     */
    constructor() ERC20("CARBON", "CRB")  {
        _mint(_msgSender(), 300000000 * (10 ** uint256(decimals())));
    }
}
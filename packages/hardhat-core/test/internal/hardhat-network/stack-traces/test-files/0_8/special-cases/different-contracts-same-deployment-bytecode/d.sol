pragma solidity ^0.8.0;

contract D {
    constructor() public {
        revert("C and D have the same deployment bytecode because they always fail and get recognized as D");
    }
}

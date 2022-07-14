// contracts/MyContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";


contract MyContract is Initializable {
    uint256 public x;
    string greeting;

    function initialize(uint256 _x) public initializer {
        x = _x;
    }

    

    function greeter(string memory _greeting) public{
        greeting = _greeting;

    }

    function greet() public view returns(string memory)
    {
        return greeting;
    }
    function add(uint a,uint b)public pure returns(uint){
        uint c = a+b;
        return c;
    }

     function sub(uint a,uint b)public pure returns(uint){
        uint c = a-b;
        return c;
    }

    function add1(uint a,uint b)public{
    }


}
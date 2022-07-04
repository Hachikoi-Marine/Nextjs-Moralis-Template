# ERC20 MADE (ETH mainnet)
- 0xED5464bd5c477b7F71739Ce1d741b43E932b97b0

# COMMUNITY NFT (ETH mainnet)
- 0x2Cf6BE9AaC1c7630d5A23af88c28275C70eb8819

# Procedures
## BACKEND
- make a contract that only recieves erc20 from (0xED5464bd5c477b7F71739Ce1d741b43E932b97b0) & eth [method src](https://stackoverflow.com/questions/65846335/how-to-send-erc20-token-to-smart-contract-balance)
- 

## default contract
- (mumbai) - 0xAcb69A95a280276795F2191A469da2881b70813d

```c#
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Storage {
    uint public theNum;

    constructor (uint _defaultNum) {
        theNum = _defaultNum;
    }

    function changeNum(uint _newNum) public {
        theNum = _newNum;
    }

    function queryNum() public view returns (uint) {
        return theNum;
    }
}
```

## Docs
- **/components/Navbar**
Manages all the logic to connect to metamask and force chain change if the user is not the correct one, also enablesWeb3 (moralis)
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _nftId
    ) external;

}

contract NFTAuction {
    uint256 private constant Duration = 7 days;

    IERC721 public immutable nft;
    uint256 public immutable nftId;

    address payable public  seller;
    uint256 public immutable startingPrice;
    uint256 public immutable discountRate;
    uint256 public immutable startAt;
    uint256 public immutable expiresAt;

    constructor(
        uint256 _startingPrice,
        uint256 _discountRate,
        address _nft,
        uint256 _nftId
    ) {
        seller =  payable(msg.sender);
        startingPrice = _startingPrice;
        discountRate = _discountRate;
        startAt = block.timestamp;
        expiresAt = block.timestamp + Duration;

    }
    
}
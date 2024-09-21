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

    IERC721 public  nft;
    uint256 public  nftId;

    address payable public  seller;
    uint256 public  startingPrice;
    uint256 public  discountRate;
    uint256 public  startAt;
    uint256 public  expiresAt;

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

        require(_startingPrice >= _discountRate + Duration, "Starting Price is too low");

        nft = IERC721(_nft);
        nftId = _nftId;
    }


        function getPrice() public view returns(uint256) {
                uint256 timeElapsed = block.timestamp - startAt;
                uint256 discount = discountRate * timeElapsed;

                return startingPrice - discount;

        }

        function buy( ) external payable {
            require(block.timestamp < expiresAt , "This NFT Auction has ended");

            uint256 price = getPrice();
            require(msg.value >= price , "Amount of ETH sent is less than the price");

            nft.transferFrom(seller, msg.sender, nftId);
            uint refund = msg.value - price;

            if(refund > 0){
                payable(msg.sender).transfer(refund);

            }
            selfdestruct(seller);
            
        }

    
    
}
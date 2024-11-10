# Frontend (React App) - NFT Marketplace

Welcome to the Frontend repository for our React application, offering a user-friendly interface for interacting with the NFT marketplace. This application allows users to seamlessly mint, sell, buy, bid on NFTs, and view their NFT collections in their digital wallet.

## Utils

The `web3.js`(src/utils/web3.js) file contains helper functions for interacting with the NFT Marketplace smart contract on the Ethereum blockchain using `ethers.js`. It provides a set of functions to perform common operations within the marketplace, including creating, reselling, and purchasing tokens, as well as fetching unsold items. These functions are designed to work seamlessly with a React-based frontend and rely on Metamask for transaction signing.



### Functions

- `fetchMarketItems()`: Fetches unsold NFT items listed in the marketplace.
- `createToken(tokenURI, price)`: Mints a new token with the specified URI and lists it on the marketplace at the given price.
- `resellToken(tokenId, price)`: Relists an owned token for sale with a new price.
- `buyToken(tokenId, price)`: Purchases a listed token from the marketplace.

  



## Screenshots

### Home Page
![Home Page]![Screenshot 2024-03-26 080605](https://github.com/AdityaB1152/nft-marketplace/assets/83021173/8819173c-014e-436d-a1bf-3aa45ae636a6)
![Screenshot 2024-03-26 080642](https://github.com/AdityaB1152/nft-marketplace/assets/83021173/81661801-4f5c-4896-a43b-34eba5c797ae)




### Live Auction Page
![Live Auction Page]

### Marketplace
![Marketplace](https://github.com/AdityaB1152/nft-marketplace/assets/83021173/c82c018a-3c5b-4d4a-a561-8bcb48ea72d4)
![marketPage](https://github.com/AdityaB1152/nft-marketplace/assets/83021173/23d6b429-a881-43e1-8289-1002c5242785)

### Create Page
![Create Page](https://github.com/AdityaB1152/nft-marketplace/assets/83021173/20b29580-3089-4bd4-b492-dabbd6fa31bb)

## Features

- **Minting**: Easily mint your own NFTs with our intuitive interface.
- **Buying**: Explore and purchase NFTs from various creators and collections.
- **Selling**: List your NFTs for sale and manage your listings effortlessly.
- **Bidding**: Participate in live auctions and place bids on desired NFTs.
- **Wallet Integration**: Seamlessly view and manage your NFT collection within your digital wallet.

## Getting Started

To get started with the Frontend (React App) for the NFT marketplace, follow these steps:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/frontend-nft-marketplace.git
    ```

2. Navigate to the project directory:

    ```bash
    cd frontend-nft-marketplace
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Visit `http://localhost:3000` in your web browser to access the application.

## Contributing

Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, please
Feel free to reach out to me with any questions or feedback. 

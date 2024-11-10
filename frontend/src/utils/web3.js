const ethers = require('ethers');

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const NFT_CONTRACT_ADDRESS = process.env.NFT_CONTRACT_ADDRESS;

const provider = new ethers.AlchemyProvider('sepolia' ,ALCHEMY_API_KEY );

export const getSigner =async ()=> {
    if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner();
        console.log('SIGNER',signer)
        return signer;
        
      } else {
        console.error('Ethereum provider not found. Please install MetaMask.');
      }
}


// Helper function to connect to the contract
const getContract = () => {
  const { ethereum } = window;
  if (!ethereum) {
    console.error("Metamask not installed");
    return;
  }

  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, contractABI, signer);
};

// Fetch unsold market items
export const fetchMarketItems = async () => {
  try {
    const contract = getContract();
    const items = await contract.fetchMarketItem();
    return items.map(item => ({
      tokenId: item.tokenId.toString(),
      price: ethers.utils.formatEther(item.price),
      seller: item.seller,
      owner: item.owner,
      sold: item.sold,
    }));
  } catch (error) {
    console.error("Error fetching market items:", error);
  }
};

// Create a new token and list it on the marketplace
export const createToken = async (tokenURI, price) => {
  try {
    const contract = getContract();
    const listingPrice = await contract.getListingPrice();

    const transaction = await contract.createToken(tokenURI, ethers.utils.parseEther(price), {
      value: listingPrice,
    });
    await transaction.wait();
    console.log("Token created and listed successfully");
  } catch (error) {
    console.error("Error creating token:", error);
  }
};

// Relist a token for sale with a new price
export const resellToken = async (tokenId, price) => {
  try {
    const contract = getContract();
    const listingPrice = await contract.getListingPrice();

    const transaction = await contract.resellToken(tokenId, ethers.utils.parseEther(price), {
      value: listingPrice,
    });
    await transaction.wait();
    console.log("Token relisted successfully");
  } catch (error) {
    console.error("Error reselling token:", error);
  }
};

// Purchase a token from the marketplace
export const buyToken = async (tokenId, price) => {
  try {
    const contract = getContract();

    const transaction = await contract.createMarketSale(tokenId, {
      value: ethers.utils.parseEther(price),
    });
    await transaction.wait();
    console.log("Token purchased successfully");
  } catch (error) {
    console.error("Error purchasing token:", error);
  }
};



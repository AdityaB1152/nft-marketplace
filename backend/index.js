const express = require('express');
const ethers = require('ethers');

const port = 3001;

const app = express();

app.listen(port , () => {
    console.log("NFT Marketplace backend running on port :"+port);
});


const express = require('express');
const router = express.Router();

//Top NFT by price

router.route('/').get(getAllNfts)

router.route('/top-5-nfts').get(
    nft
)
router.route('/')
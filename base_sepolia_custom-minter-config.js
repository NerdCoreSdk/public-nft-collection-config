module.exports = {
  "network_environment": "BASE_SEPOLIA",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "coreAPI": "none",
  "chainId": 84532,
  "googleSheetsId": "1pQR5ngZJv3cmSWp6CAm2WWiYuSmJ-luUgUhQh9o8NMk",
  "nftMintControllerAddress": "",
  "nftTokenDiscoveryAddress": "",
  "nftMintVoucherAddress": "",
  "admins": [
    {
      "address": "0x2201374e803Ec5Ca1dCB6550673669b42D9A5B70"
    }
  ],
  "collections": [
    // Template collection entry for MarketplaceNFT
    // Uncomment and configure when deploying:
    // {
    //   "address": "",
    //   "name": "TestMarketplaceNFT",
    //   "symbol": "TMNFT",
    //   "contractType": "MarketplaceNFT",
    //   "baseURI": "https://your-testnet-metadata-uri/",
    //   "maxSupply": 100,
    //   "royaltiesPercentage": 500,  // 5% royalties (in basis points)
    //   "royaltiesReceiver": "0x...",  // Address to receive royalties
    //   "tiers": [
    //     {
    //       "startTokenId": 1,
    //       "endTokenId": 100
    //     }
    //   ]
    // }
  ],
  "contractTypeRegistry": {
    "MarketplaceNFT": {
      "mintSelector": "mint(address,uint256)",
      "batchSelector": "mintMultiple(address[],uint256[])",
      "batchSupported": true,
      "parameters": {
        "mint": [
          "toAddress",
          "tokenId"
        ],
        "mintMultiple": [
          "toAddresses",
          "tokenIds"
        ]
      }
    },
    "CouponNFT": {
      "mintSelector": "mint(address,uint256)",
      "batchSelector": "mintMultiple(address[],uint256[])",
      "batchSupported": true,
      "parameters": {
        "mint": [
          "toAddress",
          "tokenId"
        ],
        "mintMultiple": [
          "toAddresses",
          "tokenIds"
        ]
      }
    },
    "RewardLockedNFT": {
      "mintSelector": "mintWithLock(address,uint256,uint256,uint256,uint256)",
      "batchSelector": "mintMultipleWithLock(address[],uint256[],uint256[],uint256[],uint256[])",
      "batchSupported": true,
      "parameters": {
        "mintWithLock": [
          "toAddress",
          "tokenId",
          "lockAmount",
          "rewardAmount",
          "unlockTime"
        ],
        "mintMultipleWithLock": [
          "toAddresses",
          "tokenIds",
          "lockAmounts",
          "rewardAmounts",
          "unlockTimes"
        ]
      }
    }
  }
};

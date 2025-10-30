module.exports = {
  "network_environment": "BSC_TESTNET",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "coreAPI": "none",
  "chainId": 97,
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
    {
      "address": "0x7c722e02c31aCe8E93A43Ad0142B85daAF4a94D9",
      "name": "MyFirstMarketplaceNFT",
      "symbol": "MFMT",
      "contractType": "MarketplaceNFT",
      "baseURI": "https://bafybeiei5bcws25jktsux5acy75dodapkvcjrzmykx4fg24car2kcs5v3q.ipfs.w3s.link/",
      "maxSupply": 50,
      "royaltiesPercentage": 500,
      "royaltiesReceiver": "0x2201374e803Ec5Ca1dCB6550673669b42D9A5B70",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 50
        }
      ]
    }
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

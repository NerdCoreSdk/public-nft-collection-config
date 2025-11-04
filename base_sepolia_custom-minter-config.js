module.exports = {
  "network_environment": "BASE_SEPOLIA",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "coreAPI": "none",
  "chainId": 84532,
  "googleSheetsId": "1pQR5ngZJv3cmSWp6CAm2WWiYuSmJ-luUgUhQh9o8NMk",
  "nftMintControllerAddress": "0x02e00F4804B3c7866d30bAf89b4E712a5D3eAee1",
  "nftTokenDiscoveryAddress": "0xC349Af9C981Bf36eCba52775A18C650bf04B8AF0",
  "nftMintVoucherAddress": "0xE68F673Ec96EE387400d0bF26391099Cbd59BF5E",
  "admins": [
    {
      "address": "0x2201374e803Ec5Ca1dCB6550673669b42D9A5B70",
      "address": "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F"
    }
  ],
  "collections": [
    {
      "address": "0x7c722e02c31aCe8E93A43Ad0142B85daAF4a94D9",
      "name": "MyFirstMarketplaceNFT",
      "symbol": "MFMT",
      "contractType": "CouponNFT",
      "baseURI": "https://bafybeigrxrojyqfaahcvy3gemc2c4a4bw6cuyzsxpvztr5gqq2k2ftep4m.ipfs.w3s.link/",
      "maxSupply": 50,
      "royaltiesPercentage": 500,
      "royaltiesReceiver": "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F",
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

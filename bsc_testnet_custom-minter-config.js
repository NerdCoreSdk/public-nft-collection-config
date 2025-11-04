module.exports = {
  "network_environment": "BSC_TESTNET",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "coreAPI": "none",
  "chainId": 97,
  "googleSheetsId": "1B-vXEM20Ba5HXdfE3PfoIGLK4mkopLiBCw2iCRrYikA",
  "nftMintControllerAddress": "0xAA346A5fa0860132625Ed2E6F88D0C9A964ef7Ec",
  "nftTokenDiscoveryAddress": "0x23030A74ebdc574A73738E842f2002135Df9D1bE",
  "nftMintVoucherAddress": "0x0D99C3966384A608D560c017c9D16E74fEeDf248",
  "admins": [
    {
      "address": "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F"
    }
  ],
  "collections": [
    {
      "address": "0xBaf9AF671A85636DaED45dE1B326a39F05a3834c",
      "name": "MyFirstMarketplaceNFT",
      "symbol": "MFMT",
      "contractType": "CouponNFT",
      "baseURI": "https://bafybeigrxrojyqfaahcvy3gemc2c4a4bw6cuyzsxpvztr5gqq2k2ftep4m.ipfs.w3s.link/",
      "maxSupply": 50,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 50
        }
      ]
    },
    {
      "address": "0x1dA18A80Fb935d2b36d8bc2501e616A98ae7b6dA",
      "name": "NerdyMarketplaceNFT",
      "symbol": "NMNFT",
      "contractType": "MarketplaceNFT",
      "baseURI": "https://bafybeicbulimsmxxvjac3hcujpjytlqrfsebtm5ui5jo3kduqdhikqxa7a.ipfs.w3s.link/",
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

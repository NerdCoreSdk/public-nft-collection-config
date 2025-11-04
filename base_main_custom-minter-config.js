module.exports = {
  "network_environment": "BASE_MAINNET",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "coreAPI": "none",
  "chainId": 8453,
  "googleSheetsId": "1lXn1dVmBrCtWiCpMAF3XdaL8Xpf9bCK9R5I2qKBDTuw",
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
      "address": "",
      "name": "NerdyMarketplaceNFT",
      "symbol": "NMNFT",
      "contractType": "MarketplaceNFT",
      "baseURI": "https://bafybeicbulimsmxxvjac3hcujpjytlqrfsebtm5ui5jo3kduqdhikqxa7a.ipfs.w3s.link/",
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

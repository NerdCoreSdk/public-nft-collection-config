module.exports = {
  "network_environment": "BNB_MAINNET",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "coreAPI": "none",
  "chainId": 56,
  "googleSheetsId": "1ysfxmso6jcY_TOvyZutMxoKYsx95F-ZE59-hJ_HNzJs",
  "nftMintControllerAddress": "",
  "nftTokenDiscoveryAddress": "",
  "nftMintVoucherAddress": "",
  "admins": [
    {
      "address": "0x2201374e803Ec5Ca1dCB6550673669b42D9A5B70",
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

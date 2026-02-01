module.exports = {
  "network_environment": "BSC_TESTNET",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "coreAPI": "none",
  "chainId": 97,
  "googleSheetsId": "1B-vXEM20Ba5HXdfE3PfoIGLK4mkopLiBCw2iCRrYikA",
  "nftMintControllerAddress": "0x0884561d17759ddC127D1044aE7A297F5682E32B",
  "nftTokenDiscoveryAddress": "0x7fdc81Ba67FFD39dBF1704406C416087C833104b",
  "nftMintVoucherAddress": "0x76f26f1E437F53047f0F163e909eb9C1b74f6209",
  "admins": [
    {
      "address": "0xdddB626f8E7f2BB01c5729aFB7A71869c4E6e0Cd"
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
    },
    "ExpirableNFT": {
      "mintSelector": "mintWithExpiration(address,uint256,uint256)",
      "batchSelector": "mintMultipleWithExpiration(address[],uint256[],uint256[])",
      "batchSupported": true,
      "parameters": {
        "mintWithExpiration": [
          "toAddress",
          "tokenId",
          "expirationTime"
        ],
        "mintMultipleWithExpiration": [
          "toAddresses",
          "tokenIds",
          "expirationTimes"
        ]
      }
    }
  },
  "masterExclusivityAddress": "",
  "exclusivityScopes": []
};

module.exports = {
  "network_environment": "BASE_SEPOLIA",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "coreAPI": "none",
  "chainId": 84532,
  "googleSheetsId": "1pQR5ngZJv3cmSWp6CAm2WWiYuSmJ-luUgUhQh9o8NMk",
  "nftMintControllerAddress": "0x34De670893cd7dC905D4b93166641D768076b7CE",
  "nftTokenDiscoveryAddress": "0x6Bd8382deb25cfFd191880D8Cb28447d113D79bD",
  "nftMintVoucherAddress": "0x4fcc981E5Ea2094CE6F494F092e1Bc8f36FA156A",
  "masterExclusivityAddress": "",
  "admins": [
    {
      "address": "0x9B9ffCa5d91FaBcA2De5E8e5499E29035C8664d8"
    }
  ],
  "exclusivityScopes": [],
  "collections": [
    {
      "address": "0x7c722e02c31aCe8E93A43Ad0142B85daAF4a94D9",
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
    }
  ],
  "contractTypeRegistry": {
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
  }
};

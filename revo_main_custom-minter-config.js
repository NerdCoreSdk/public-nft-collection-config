module.exports = {
  "network_environment": "REVO",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "nftMintControllerAddress": "0xE11941e14F30DF889F358784cf6986A67FEF2C43",
  "nftTokenDiscoveryAddress": "0x7fdc81Ba67FFD39dBF1704406C416087C833104b",
  "nftMintVoucherAddress": "0x76f26f1E437F53047f0F163e909eb9C1b74f6209",
  "coreAPI": "https://api.revoride.com/",
  "chainId": 30130,
  "googleSheetsId": "1jrFyUvu3gJ2FDaUfivLJx9giWtomSYgnU8wh2SpwFgI",
  "admins": [
    {
      "address": "0x64818DCB6Ab7B2a3bf269D95b3f0AAC12B45f7EF"
    },
    {
      "address": "0xdddB626f8E7f2BB01c5729aFB7A71869c4E6e0Cd"
    }
  ],
  "collections": [
    {
      "address": "0xAA346A5fa0860132625Ed2E6F88D0C9A964ef7Ec",
      "name": "Rev Legendary Node NFT Boost (Collection 1)",
      "symbol": "REVNBL1",
      "baseURI": "https://bafybeidhzgsawsz3kdj2tfpqajti7oemyebbmyqcwm7xw2aob3ppniyzxq.ipfs.w3s.link/",
      "maxSupply": "500",
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 500
        }
      ]
    },
    {
      "address": "0x2d2F3BeF9eeE6E05E4Cc9F9b78C06Ab70fE7e371",
      "name": "Rev Legendary Node NFT Boost (Collection 2)",
      "symbol": "REVNBL2",
      "baseURI": "https://bafybeibcq52ks6ixbabxity4nnpfbpwrzu6mhtfehqfd6ms4hfzujsrdsq.ipfs.w3s.link/",
      "maxSupply": "500",
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 500
        }
      ]
    },
    {
      "address": "0xc290A86151ac56444fc982501A5312FB785869cc",
      "name": "Rev Legendary Node NFT Boost (Collection 3)",
      "symbol": "REVNBL3",
      "baseURI": "https://bafybeib5oidr46xxirrc5uat63jbq5e2an272i2v5z4ogx6jlhbkejbnm4.ipfs.w3s.link/",
      "maxSupply": "500",
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 500
        }
      ]
    },
    {
      "address": "0x1637c241ec43C4371FAD773c459b3Cb538AC702E",
      "name": "Test NFT Collection",
      "symbol": "TSTNFT",
      "baseURI": "https://bafybeienfi3u6c6dlovmustmvztdjdqvrahjgw7ichblr67jthodtez65y.ipfs.w3s.link/",
      "maxSupply": 500,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 500
        }
      ]
    },
    {
      "address": "0x632FC64e9B6A088B007b2736513823189132eeAd",
      "name": "Test Reward Token",
      "symbol": "TRT",
      "contractType": "RewardLockedNFT",
      "baseURI": "https://w3s.link/ipfs/bafybeif5eganbpbl3frhymyn54csnzn5ickqpvn6tgszp6spaby5dqrbie/",
      "maxSupply": 300,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 100
        },
        {
          "startTokenId": 101,
          "endTokenId": 200
        },
        {
          "startTokenId": 201,
          "endTokenId": 300
        }
      ]
    }
  ],
  "contractTypeRegistry": {
    "CouponNFT": {
      "mintSelector": "mint(address,uint256)",
      "batchSelector": "mintMultiple(address[],uint256[])",
      "batchSupported": true
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

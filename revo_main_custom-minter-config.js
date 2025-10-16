module.exports = {
  "network_environment": "REVO",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "nftMintControllerAddress": "0x9a2574CFBFfF26Bd02a8aBEeD1e5A39dd94Dc150",
  "nftTokenDiscoveryAddress": "0x24006ee72A98A5eB3078C81adc60a7D94D0Ce851",
  "nftMintVoucherAddress": "0x1FC7C94f0D2e09a2c9Cb332E538D998AEC38203b",
  "coreAPI": "https://api.revoride.com/",
  "chainId": 30130,
  "googleSheetsId": "1jrFyUvu3gJ2FDaUfivLJx9giWtomSYgnU8wh2SpwFgI",
  "admins": [
    {
      "address": "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F"
    },
    {
      "address": "0x64818DCB6Ab7B2a3bf269D95b3f0AAC12B45f7EF"
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
    }
  }
};

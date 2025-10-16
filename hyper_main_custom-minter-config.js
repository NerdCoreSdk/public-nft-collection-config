module.exports = {
  "network_environment": "HYPER",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "nftMintControllerAddress": "0xA692446c467A1a60F4730143c32dF60D174d0f89",
  "nftMintVoucherAddress": "0xEb78fA4cfa9057be8F715646153afCeDC4746bE4",
  "nftTokenDiscoveryAddress": "0xe9295AF0f978b7b8b2e0176645138071da37B6e1",
  "googleSheetsId": "1WCNoOIaqsKrwNjC-3Cgx1HOiYbajxdEkDkL7Egi5538",
  "coreAPI": "https://api.nerdunited.com/",
  "chainID": 3301,
  "admins": [
    {
      "address": "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F"
    },
    {
      "address": "0x43892B5Cdc5F9d72AC1fb767b30a5876a27A6b1D"
    }
  ],
  "collections": [
    {
      "address": "0x5F70505276eB2D8137629217A69Af0027254D48F",
      "name": "Cyber Cars",
      "symbol": "CAR",
      "baseURI": "https://bafybeiax7oti2f3l3w4steobobplm7a2hkxkbac3edaqcmufpv3aulefza.ipfs.w3s.link/",
      "maxSupply": "120",
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 120
        }
      ]
    },
    {
      "address": "0x2d2F3BeF9eeE6E05E4Cc9F9b78C06Ab70fE7e371",
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
      "address": "0x09445B73BA506a2026Eff3BfCc2BC7CF3745eE95",
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

module.exports = {
  "network_environment": "HYPER",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "nftMintControllerAddress": "0xE11941e14F30DF889F358784cf6986A67FEF2C43",
  "nftMintVoucherAddress": "0x76f26f1E437F53047f0F163e909eb9C1b74f6209",
  "nftTokenDiscoveryAddress": "0x7fdc81Ba67FFD39dBF1704406C416087C833104b",
  "googleSheetsId": "1WCNoOIaqsKrwNjC-3Cgx1HOiYbajxdEkDkL7Egi5538",
  "coreAPI": "https://api.nerdunited.com/",
  "chainID": 3301,
  "admins": [
    {
      "address": "0x43892B5Cdc5F9d72AC1fb767b30a5876a27A6b1D"
    },
    {
      "address": "0xdddB626f8E7f2BB01c5729aFB7A71869c4E6e0Cd"
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

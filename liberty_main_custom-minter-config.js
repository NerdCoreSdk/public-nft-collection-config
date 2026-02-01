module.exports = {
  "network_environment": "LIBERTY",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "nftMintControllerAddress": "0xE11941e14F30DF889F358784cf6986A67FEF2C43",
  "nftTokenDiscoveryAddress": "0x7fdc81Ba67FFD39dBF1704406C416087C833104b",
  "nftMintVoucherAddress": "0x76f26f1E437F53047f0F163e909eb9C1b74f6209",
  "coreAPI": "https://api.libertyblockchain.com/",
  "chainId": 1776,
  "googleSheetsId": "19DnaXHHtH1WKf4eH5cyJeXa6XqwDzrwt89fSjSL_s8M",
  "admins": [
    {
      "address": "0x4515Aa89cf6F3c1f4A137faaa37a09EEb9BD653c"
    },
    {
      "address": "0xdddB626f8E7f2BB01c5729aFB7A71869c4E6e0Cd"
    }
  ],
  "collections": [
    {
      "address": "0x23030A74ebdc574A73738E842f2002135Df9D1bE",
      "name": "Liberty Legendary NFT Boost (Collection 1)",
      "symbol": "LBRTBL1",
      "baseURI": "https://bafybeihnvd3swqd6ri77bwwuektcxgjbsxe6q34zjic4ytjvcwczap4ski.ipfs.w3s.link/",
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
      "address": "0x304793258A984c9F6009b8c0CFBF91dbe385A9D7",
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

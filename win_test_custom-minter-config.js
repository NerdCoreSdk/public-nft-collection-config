module.exports = {
  "network_environment": "WIN_DEV",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "nftMintControllerAddress": "0xedE77d384d486Ac4637BC9391C255f86BB0544Ee",
  "nftTokenDiscoveryAddress": "0xB0488b0342768f9512EAf9C6d43a4f0E29C4Ad44",
  "nftMintVoucherAddress": "0x448178B7b04AACADE173A4587B2E04ff154A1c78",
  "coreAPI": "https://api.dev.connectunited.com/",
  "chainID": 2666328,
  "googleSheetsId": "1ge9GoJHmQlHrTvm-6Ay6V7R6Zhh0q8bgTBq9IcxxyLM",
  "admins": [
    {
      "address": "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F"
    },
    {
      "address": "0xAdBee901963233232bd6C93d0F6b0C3e9c5B499C"
    }
  ],
  "collections": [
    {
      "address": "0x4723dA3301d51682bEd89F10CF49a230E14dF5bf",
      "name": "WIN DEV Test NFT Collection",
      "symbol": "WDTNFT",
      "baseURI": "https://bafybeienfi3u6c6dlovmustmvztdjdqvrahjgw7ichblr67jthodtez65y.ipfs.w3s.link/",
      "maxSupply": 500,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 500
        }
      ],
      "contractType": "CouponNFT"
    },
    {
      "address": "0x100f9D711850f058ABbac216A1c76b9B2Df7824d",
      "name": "WIN DEV Test NFT Collection",
      "symbol": "WDTNFT",
      "baseURI": "https://bafybeienfi3u6c6dlovmustmvztdjdqvrahjgw7ichblr67jthodtez65y.ipfs.w3s.link/",
      "maxSupply": 500,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 500
        }
      ],
      "contractType": "CouponNFT"
    },
    {
      "address": "0xAA346A5fa0860132625Ed2E6F88D0C9A964ef7Ec",
      "name": "Win-Testnet-Boost-1-Day",
      "symbol": "WTDNFT",
      "maxSupply": 500,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 500
        }
      ],
      "contractType": "CouponNFT"
    },
    {
      "address": "0x3a589074BaA9B3E368064A7Ca6ABc87f2eD749fb",
      "name": "WIN Legendary Node NFT Boost (Collection 1)",
      "symbol": "WINNBL1",
      "maxSupply": 5000,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 5000
        }
      ],
      "contractType": "CouponNFT"
    },
    {
      "address": "0x797BAc4e7dc57eBa9dAB14b6F56db608Be1153B9",
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
    },
    {
      "address": "0x56E35EF7096CD41661542358C7B367391FfC28ee",
      "name": "Win Test Heirloom Voucher NFT",
      "symbol": "WT-HV-RT",
      "contractType": "RewardLockedNFT",
      "baseURI": "https://w3s.link/ipfs/bafybeicycmwrzedun6pvmscxr34i2vzhplfxh7auxcrnfn5lihpjeqzzre/",
      "maxSupply": 200,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 200
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
    }
  }
};

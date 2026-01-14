module.exports = {
  "network_environment": "SWITCH",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "nftMintControllerAddress": "0x4A91c8e963eEF82a625eB5C1e6B48811adABAF7f",
  "nftTokenDiscoveryAddress": "0xF726c96DA40964a175fD98bd97D7e0c0A6847F06",
  "nftMintVoucherAddress": "0xbEcc755DC93B73B59eF483518188B7aBC675Cd28",
  "coreAPI": "https://api.switchrewardcard.com/",
  "chainId": 22522,
  "googleSheetsId": "1iPLsbq9Ma5yhjkRzTMO-Z4tRwz7HJv4IbQJNb2JP19w",
  "admins": [
    {
      "address": "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F"
    },
    {
      "address": "0x7c7e1f77A65C88CD24ca51d49630040dB7A06CDa"
    }
  ],
  "collections": [
    {
      "address": "0xAA346A5fa0860132625Ed2E6F88D0C9A964ef7Ec",
      "name": "Switch Legendary Node NFT Boost (Collection 1)",
      "symbol": "SWTCHNBL1",
      "baseURI": "https://bafybeibbfl23ooec5y7vduwrlayhvyqu6beumxrpjpnfs6cetq7bxe5j4y.ipfs.w3s.link/",
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
      "address": "0xD04278E6eE1B3b5f4508B55261aC4BC3532E958B",
      "name": "Switch Legendary Node NFT Boost (Collection 2)",
      "symbol": "SWTCHNBL2",
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
      "address": "0x42dbbb094131c1960DcE19dDBc94b26A5DD822d7",
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
      "address": "0x24006ee72A98A5eB3078C81adc60a7D94D0Ce851",
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

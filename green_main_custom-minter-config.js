module.exports = {
  "network_environment": "GREEN",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "coreAPI": "https://api.setpowerfree.com/",
  "chainId": 6941,
  "nftMintControllerAddress": "0xc290A86151ac56444fc982501A5312FB785869cc",
  "nftTokenDiscoveryAddress": "0x1dA18A80Fb935d2b36d8bc2501e616A98ae7b6dA",
  "nftMintVoucherAddress": "0x4E3c0F9B3C949f6aA9f0Be470627c633a1caaB2b",
  "googleSheetsId": "1Zw53P-iBzzldRzK9X6zzIqAPt7kCJYkvj-6b27x_IaY",
  "admins": [
    {
      "address": "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F"
    },
    {
      "address": "0xf21b951b565d7f37CFC4aE6Aa4B8aD89F1756696"
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
      "batchSupported": true
    }
  },
  "collections": [
    {
      "address": "0xAA346A5fa0860132625Ed2E6F88D0C9A964ef7Ec",
      "name": "Green Legendary Node NFT Boost (Collection 1)",
      "symbol": "GRNNBL1",
      "baseURI": "https://bafybeigjum7vy7dbvzve4icmjohgeyixe575bqhxywblt4zrcket6co36e.ipfs.w3s.link/",
      "maxSupply": "5000",
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 5000
        }
      ]
    },
    {
      "address": "0x100f9D711850f058ABbac216A1c76b9B2Df7824d",
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
      "address": "0x655Cc74B9D573eFb93A202D1Ddb8b0a9c1b4E819",
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
      "address": "0xE5516a5E0111f52933284d734D82F8C2D60ebE05",
      "name": "Spark NFT",
      "symbol": "SPARK",
      "baseURI": "https://bafybeih4jhkewhucbycy6rurpij3y5lmunpmimp37qxhsrdmxci5l242ce.ipfs.w3s.link/",
      "maxSupply": 15000,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 15000
        }
      ]
    }
  ]
};

module.exports = {
  "network_environment": "LIBERTY",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "nftMintControllerAddress": "0x4E3c0F9B3C949f6aA9f0Be470627c633a1caaB2b",
  "nftTokenDiscoveryAddress": "0x638D398B33223df7f8F6309486a168Ac860e6971",
  "nftMintVoucherAddress": "0x42D6CDaEA0Af1Dbd4442478DB1b495f7c80b9bBB",
  "coreAPI": "https://api.libertyblockchain.com/",
  "chainId": 1776,
  "googleSheetsId": "19DnaXHHtH1WKf4eH5cyJeXa6XqwDzrwt89fSjSL_s8M",
  "admins": [
    {
      "address": "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F"
    },
    {
      "address": "0x4515Aa89cf6F3c1f4A137faaa37a09EEb9BD653c"
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
    }
  }
};

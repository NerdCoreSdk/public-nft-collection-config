module.exports = {
  "network_environment": "ELEMENT",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "coreAPI": "https://api.elementunited.com/",
  "chainId": 19696657,
  "googleSheetsId": "1ZMBvzXbSSoTwdTOs4wPofxmiH4SriVz5DxVjDevZEh4",
  "nftMintControllerAddress": "0x963FCd9C614B9C3Db7FE29FDBd36252266baB08d",
  "nftTokenDiscoveryAddress": "0x20DD028ac98B98f765e061132759B298153D29ad",
  "nftMintVoucherAddress": "0x746098Aa2970Ad8787Fe259cDe790245b8a04B85",
  "admins": [
    {
      "address": "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F"
    },
    {
      "address": "0xd0cc5ba914Dc19eCe0e8756a4191A3fb3ae222ef"
    }
  ],
  "collections": [
    {
      "address": "0xAA346A5fa0860132625Ed2E6F88D0C9A964ef7Ec",
      "name": "Element Legendary Node NFT Boost (Collection 1)",
      "symbol": "ELMTNBL1",
      "baseURI": "https://bafybeie7247vagm5xhhzlqkdkqhnp6t23ta5vfmpzcm7yfnphifk6uiufu.ipfs.w3s.link/",
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
      "address": "0x656440449b2DaD4F2FA1e5C4e76EdF7594d7F916",
      "name": "Test NFT Collection",
      "symbol": "TSTNFT",
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
      "address": "0x77C7B4B634e0f19c96Be33e226C67071b30651E1",
      "name": "Maple Credits Green Portneuf Improved Forestry Management 2024",
      "symbol": "MCGPI24",
      "baseURI": "https://bafybeib3yk7nebzusogqkxaw5yfrgfqcwpjjt3msdds7fdcgqbwubyy6pq.ipfs.w3s.link/",
      "maxSupply": 43832,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 43832
        }
      ],
      "contractType": "CouponNFT"
    },
    {
      "address": "0x4feD6dc253692a409F3Be9C60d59ca84C259c433",
      "name": "Element Heirloom Voucher - First Edition",
      "symbol": "EHV-FE",
      "baseURI": "https://bafybeic5uay33jmwutskdzyxl3hhhtqjcpnxmoz46rhbktne24siquykpy.ipfs.w3s.link/",
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
      "address": "0xf78f31DA204ef520D9d705e5A2f222ad393eB054",
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
      "address": "0xF1141B3F0FAdc8192d234205Bf646CcbcA14aF6B",
      "name": "Waltham Incabloc Automatic Wristwatch",
      "symbol": "WIAW",
      "contractType": "CouponNFT",
      "baseURI": "https://bafybeidu2jeblpe5fioxx67lh42ntorcazaynoumqilzs2pfel6ryudkwi.ipfs.w3s.link/",
      "maxSupply": 1,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 1
        }
      ]
    },
    {
      "address": "0xa6a4Be05b4Dc83754e9fD1553aa3121c3a0Da3F6",
      "name": "Element Heirloom Voucher NFT",
      "symbol": "EHV-RT",
      "contractType": "RewardLockedNFT",
      "baseURI": "https://w3s.link/ipfs/bafybeiezkhcanmjdzffv2hpcauu5gsgda5w3kvisxfokamuwvkmlqdzkwq/",
      "maxSupply": 500,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 500
        }
      ]
    },
    {
      "address": "0xa35f213dE19241a4Eb3eF831801150EB38b51163",
      "name": "Element Heirloom Voucher NFT",
      "symbol": "EHV-RT",
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

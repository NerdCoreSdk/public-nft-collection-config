module.exports = {
  "network_environment": "GALVAN",
  "batchSize": 1000,
  "voucherBatchSize": 50,
  "nftMintControllerAddress": "0xbF3BC695C4B09f84Fc1a35d1Ae124B328Ec0B1F6",
  "nftTokenDiscoveryAddress": "0xE7170ef767318b5848138BD1EC526D2bb1C9e2A4",
  "nftMintVoucherAddress": "0x02dCdf4d1149CA881DF515a039f6aBe7b8B94fB3",
  "coreAPI": "https://api.galvan.health/",
  "chainId": 120,
  "googleSheetsId": "1wQYAKoMZClE-o2EDTApNrf1qyD9VmoS5y74ya9MdrGw",
  "admins": [
    {
      "address": "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F"
    },
    {
      "address": "0x876D448C00014Ce617De624DeF7A42d188275893"
    }
  ],
  "collections": [
    {
      "address": "0xAA346A5fa0860132625Ed2E6F88D0C9A964ef7Ec",
      "name": "Galvan Legendary Node NFT Boost (Collection 1)",
      "symbol": "GLVNNBL1",
      "baseURI": "https://bafybeidqyhfl4reelxwni3cotpdd5zgabf4ga3islwccrepi7wrohid7vi.ipfs.w3s.link/",
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
      "address": "0xeD7d125BCF8067dB1C9283fC72D95e6F5314863A",
      "name": "Galvan Example Activatable Demo 1-Day Boost NFT Collection",
      "symbol": "GEAD1DBNFTC",
      "baseURI": "https://bafybeibmz3v5evza7mwgf5cizy6mfhtuzfd52ng75tzbemrfil7bqztblu.ipfs.w3s.link/",
      "maxSupply": 50,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 50
        }
      ]
    },
    {
      "address": "0x638D398B33223df7f8F6309486a168Ac860e6971",
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
      "address": "0x8a38105ADfca8d5071829169291123FF44877653",
      "name": "Well Collective NFT-June 2025",
      "symbol": "WCJ25",
      "baseURI": "https://bafybeigqrh3qijnxr2yprxczmxtr47s2z6kn6lq5uh2c677gn4hr4kjjwm.ipfs.w3s.link/",
      "maxSupply": 1100,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 1100
        }
      ]
    },
    {
      "address": "0x304793258A984c9F6009b8c0CFBF91dbe385A9D7",
      "name": "g+ Subscription NFT",
      "symbol": "g+sublegend",
      "baseURI": "https://bafybeihfceteaaswh3iaqvapyvnjeimodkadnwqsof3fmz5lygstddoplm.ipfs.w3s.link/",
      "maxSupply": 10000,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 10000
        }
      ]
    },
    {
      "address": "0x963FCd9C614B9C3Db7FE29FDBd36252266baB08d",
      "name": "Digital Gym Membership - Common",
      "symbol": "gymproofcommon",
      "baseURI": "https://bafybeibp3dtqtcmanq25kef5yejv6al3aq42wzgtpzoclefa26dwcu6vji.ipfs.w3s.link/",
      "maxSupply": 515,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 515
        }
      ]
    },
    {
      "address": "0x99Ed7Ab3423FAC8Fec926547Ff277098b8658F08",
      "name": "Digital Gym Membership - Epic",
      "symbol": "gymproofepic",
      "baseURI": "https://bafybeierwisumjem3iji2vhfkyvs76lvkenxhvxni2qixbw6x32womkche.ipfs.w3s.link/",
      "maxSupply": 265,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 265
        }
      ]
    },
    {
      "address": "0x4A91c8e963eEF82a625eB5C1e6B48811adABAF7f",
      "name": "Digital Gym Membership - Legendary",
      "symbol": "gymprooflegendary",
      "baseURI": "https://bafybeifioe3gfrh5er5q6qs2l5cnwwujrz2crd36dg3lmtfnxan4rvnglq.ipfs.w3s.link/",
      "maxSupply": 140,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 140
        }
      ]
    },
    {
      "address": "0xA0af366D8ab6c1EB054Fe6FeC74D1C12dEA8164A",
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
      "address": "0xaf40E339c8a6dd2531F169A719F1d912e12cC8bc",
      "name": "Digital Wellness Membership - Trial",
      "symbol": "DWM-Trial",
      "baseURI": "https://w3s.link/ipfs/bafybeicqgddzsvpbzphe7traoelyrzib4mshqguiogl657zjuskfbxfgfy/",
      "maxSupply": 1000,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 1000
        }
      ]
    },
    {
      "address": "0x04B8d932f6cc0266ea24DA9DFf88C2Dcf13e43F0",
      "name": "Digital Wellness Membership - Common",
      "symbol": "DWM-Common",
      "baseURI": "https://bafybeiaunixqmhzq6pp4m4rzrwongnynkanv5aysxp7lsxzrsgfqdet7q4.ipfs.w3s.link/",
      "maxSupply": 1000,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 1000
        }
      ]
    },
    {
      "address": "0xe56Ee7052eCD8eFfB4Bc8522b5F6f8873f6046D8",
      "name": "Digital Wellness Membership - Epic",
      "symbol": "DWM-Epic",
      "baseURI": "https://bafybeicnfs2u4zdylcqh2rhh5rmbr7zdprawxpeialedujt6sepypmvp5a.ipfs.w3s.link/",
      "maxSupply": 1000,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 1000
        }
      ]
    },
    {
      "address": "0x8554D8fb5D2F85e4D2305F439F5AA496a9538fba",
      "name": "Digital Wellness Membership - Legendary",
      "symbol": "DWM-Legendary",
      "baseURI": "https://bafybeieetb64x5x4xcplf5dhkyeebydshsowm3sgkja7kpcqrybgzxyqmi.ipfs.w3s.link/",
      "maxSupply": 1000,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 1000
        }
      ]
    },
    {
      "address": "0xb771bE9fDa5C8741C59650c6e345BEab5a38efF5",
      "name": "Health Supplement Rewards - Common",
      "symbol": "hsrcommon",
      "baseURI": "https://ipfs.fugate.io/ipfs/bafybeihddnw7azikatypsulbqmuddbprwnpmn5jae37d25drssuss6ap5m/",
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
      "address": "0x11b2C3FFe020504e7660Be0Ee11DABe341E75D4f",
      "name": "Health Supplement Rewards - Epic",
      "symbol": "hsrepic",
      "baseURI": "https://ipfs.fugate.io/ipfs/bafybeib5nicaqxx4cxwfumzwpuguzxu7qsvdozkltbu7sgebewcmqebg74/",
      "maxSupply": 100,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 100
        }
      ]
    },
    {
      "address": "0xDAf4Aa7501835cba67f143699DFDAd953BBb52dd",
      "name": "Health Supplement Rewards - Legendary",
      "symbol": "hsrlegendary",
      "baseURI": "https://ipfs.fugate.io/ipfs/bafybeigdj4fvxcdumeyzekt23zl755uqscwgonvrgfhj6h6pfwr3famlym/",
      "maxSupply": 100,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 100
        }
      ]
    },
    {
      "address": "0x1d53b0bdd5ca70F9f745D543116588C3e3BFe09e",
      "name": "Health Supplement Rewards - Rare",
      "symbol": "hsrrare",
      "baseURI": "https://ipfs.fugate.io/ipfs/bafybeienssroi5g4rqnbuqor2ti6yqpyw6cb5nndkzpzmdsx7txnnaoe7a/",
      "maxSupply": 250,
      "contractType": "CouponNFT",
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 250
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

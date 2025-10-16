module.exports = {
  network_environment: "GALVAN",
  batchSize: 1000,
  voucherBatchSize: 50,
  nftMintControllerAddress: "0x56E35EF7096CD41661542358C7B367391FfC28ee",
    nftTokenDiscoveryAddress: "0x160067580Bc65ecaa10eD00905C630fd0850A71a",
    nftMintVoucherAddress: "0xF1141B3F0FAdc8192d234205Bf646CcbcA14aF6B",
  coreAPI: "https://api.galvan.health/",
  chainId: 120,
  googleSheetsId: "1wQYAKoMZClE-o2EDTApNrf1qyD9VmoS5y74ya9MdrGw",
  admins: [
    {
      address: "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F"
    },
    {
      address: "0x876D448C00014Ce617De624DeF7A42d188275893"
    }
  ],
  collections: [
    {
      address: "0xAA346A5fa0860132625Ed2E6F88D0C9A964ef7Ec",
      name: "undefined",
      symbol: "GLVNNBL1",
      baseURI: "https://bafybeidqyhfl4reelxwni3cotpdd5zgabf4ga3islwccrepi7wrohid7vi.ipfs.w3s.link/",
      maxSupply: "500",
      contractType: "CouponNFT",
      tiers: [
        {
          startTokenId: 1,
          endTokenId: 500
        }
      ]
    },
    {
      address: "0xeD7d125BCF8067dB1C9283fC72D95e6F5314863A",
      name: "Galvan Example Activatable Demo 1-Day Boost NFT Collection",
      symbol: "GEAD1DBNFTC",
      baseURI: "https://bafybeibmz3v5evza7mwgf5cizy6mfhtuzfd52ng75tzbemrfil7bqztblu.ipfs.w3s.link/",
      maxSupply: 50,
      contractType: "CouponNFT",
      tiers: [
        {
          startTokenId: 1,
          endTokenId: 50
        }
      ]
    },
    {
      address: "0x638D398B33223df7f8F6309486a168Ac860e6971",
      name: "Test NFT Collection",
      symbol: "TSTNFT",
      baseURI: "https://bafybeienfi3u6c6dlovmustmvztdjdqvrahjgw7ichblr67jthodtez65y.ipfs.w3s.link/",
      maxSupply: 500,
      contractType: "CouponNFT",
      tiers: [
        {
          startTokenId: 1,
          endTokenId: 500
        }
      ]
    },
    {
      address: "0x8a38105ADfca8d5071829169291123FF44877653",
      name: "Well Collective NFT-June 2025",
      symbol: "WCJ25",
      baseURI: "https://bafybeigqrh3qijnxr2yprxczmxtr47s2z6kn6lq5uh2c677gn4hr4kjjwm.ipfs.w3s.link/",
      maxSupply: 1100,
      contractType: "CouponNFT",
      tiers: [
        {
          startTokenId: 1,
          endTokenId: 1100
        }
      ]
    },
    {
      address: "0x304793258A984c9F6009b8c0CFBF91dbe385A9D7",
      name: "g+ Subscription NFT",
      symbol: "g+sublegend",
      baseURI: "https://bafybeihfceteaaswh3iaqvapyvnjeimodkadnwqsof3fmz5lygstddoplm.ipfs.w3s.link/",
      maxSupply: 10000,
      contractType: "CouponNFT",
      tiers: [
        {
          startTokenId: 1,
          endTokenId: 10000
        }
      ]
    },
    {
      address: "0x963FCd9C614B9C3Db7FE29FDBd36252266baB08d",
      name: "Digital Gym Membership - Common",
      symbol: "gymproofcommon",
      baseURI: "https://bafybeibp3dtqtcmanq25kef5yejv6al3aq42wzgtpzoclefa26dwcu6vji.ipfs.w3s.link/",
      maxSupply: 515,
      contractType: "CouponNFT",
      tiers: [
        {
          startTokenId: 1,
          endTokenId: 515
        }
      ]
    },
    {
      address: "0x99Ed7Ab3423FAC8Fec926547Ff277098b8658F08",
      name: "Digital Gym Membership - Epic",
      symbol: "gymproofepic",
      baseURI: "https://bafybeierwisumjem3iji2vhfkyvs76lvkenxhvxni2qixbw6x32womkche.ipfs.w3s.link/",
      maxSupply: 265,
      contractType: "CouponNFT",
      tiers: [
        {
          startTokenId: 1,
          endTokenId: 265
        }
      ]
    },
    {
      address: "0x4A91c8e963eEF82a625eB5C1e6B48811adABAF7f",
      name: "Digital Gym Membership - Legendary",
      symbol: "gymprooflegendary",
      baseURI: "https://bafybeifioe3gfrh5er5q6qs2l5cnwwujrz2crd36dg3lmtfnxan4rvnglq.ipfs.w3s.link/",
      maxSupply: 140,
      contractType: "CouponNFT",
      tiers: [
        {
          startTokenId: 1,
          endTokenId: 140
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
    }
  ],
  contractTypeRegistry: {
    CouponNFT: {
      mintSelector: "mint(address,uint256)",
      batchSelector: "mintMultiple(address[],uint256[])",
      batchSupported: true
    },
    RewardLockedNFT: {
      mintSelector: "mintWithLock(address,uint256,uint256,uint256,uint256)",
      batchSelector: "mintMultipleWithLock(address[],uint256[],uint256[],uint256[],uint256[])",
      batchSupported: true,
      parameters: {
        mintWithLock: [
          "toAddress",
          "tokenId",
          "lockAmount",
          "rewardAmount",
          "unlockTime"
        ],
        mintMultipleWithLock: [
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
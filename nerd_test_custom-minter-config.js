module.exports = {
    network_environment: "NERD_STAGE",
    batchSize: 1000, // Can be adjusted based on gas limits
    googleSheetsId: "1FwwnjIGZXZEXTZiBPsYb5qtxpS_z5HnBw0UwL_E4OIs",
    
    nftMintControllerAddress: "0xB6AEFFc38FddB043bC2679E2A1ccFa7E67ef3505",
    nftTokenDiscoveryAddress: "0xE16EA8D9BC3ea0D5371994d2F84Cf3381Eaf6810",
    nftMintVoucherAddress: "0x4D2a14cE20f9d6c571E9aafee40B48d4671d4A05",
    coreAPI: "https://api.stage.nerdunited.net/",
    chainId: 416461,
    admins: [
        { address: "0x2201374e803Ec5Ca1dCB6550673669b42D9A5B70" },
        { address: "0xEFa29a6f4f9b2637699725Fc85eB0bbd81D34706" },
        { address: "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F" }
    ],
    collections: [
    {
      "address": "0x57227E3C6b8a311908C04CbAb858782Bd4032c13",
      "name": "Nerd-Stage-Boost-1-Day",
      "symbol": "NSB1D",
      "contractType": "CouponNFT",
      "baseURI": "https://bafybeifkmcacadq5o2el52vhcmsowaxiuq5u452bx7ktkiic2w5nsclolq.ipfs.w3s.link/",
      "maxSupply": 500,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 500
        }
      ]
    },
    {
      "address": "0xEFBA1E9c23b4220995E2f162799eD2b11644ecbB",
      "name": "Dancing Spongebob Boost Stage",
      "symbol": "DSBBS",
      "contractType": "CouponNFT",
      "baseURI": "https://bafybeie46rezelrt7vn6dotkqjemko7qozx3jgtooqtf24ismt2qm6q7ya.ipfs.w3s.link/",
      "maxSupply": 250,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 250
        }
      ]
    },
    {
      "address": "0x02e00F4804B3c7866d30bAf89b4E712a5D3eAee1",
      "name": "Cute Tabby Cats",
      "symbol": "TBYCats",
      "contractType": "CouponNFT",
      "baseURI": "https://bafybeia4lrxjshaqu4bv5rrjuans7bfluwn3lsgtdumcvalhgbipmdcuje.ipfs.w3s.link/",
      "maxSupply": 100,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 100
        }
      ]
    },
    {
      "address": "0xa15fec5BA3834B4b059C79a59Ece6597EcD72c6A",
      "name": "Carbon Credit Methane Avoidance 2023",
      "symbol": "DCCMA2023",
      "contractType": "CouponNFT",
      "baseURI": "https://bafybeih5ltmvke5hhrl2rlpolcet7gwxpzvc63ghdq54grejdgl4h4cuc4.ipfs.w3s.link/",
      "maxSupply": 1500,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 1500
        }
      ]
    },
    {
      "address": "0x4Ce0aed78BF011c2F670CBe4aA194e12E5bC6fdA",
      "name": "Jareds 2nd Steampunk Dinos",
      "symbol": "SPD2",
      "contractType": "CouponNFT",
      "baseURI": "https://bafybeibl3bcdunciswk7lcbrj7xeb7hfbgoq6kbod3u7hq2eudfddtufmi.ipfs.w3s.link/",
      "maxSupply": 120,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 120
        }
      ]
    },
    {
      "address": "0xd619cCb994fF71e82EB005b30C5dae5d71237cC3",
      "name": "Stage Carbon Credit Test Collection part 2",
      "symbol": "SCCTC15000P2",
      "contractType": "CouponNFT",
      "baseURI": "https://bafybeigfnp7fnt5sckhltxl6sjjwp2tgwkphxjkcn7mlrvgpdx5sry3p6a.ipfs.w3s.link/",
      "maxSupply": 15000,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 15000
        }
      ]
    },
    {
      "address": "0xD9723e4e45988d9f8c831487C05ceDeD9A72937C",
      "name": "GRAND SUMO 2025",
      "symbol": "GS2025",
      "contractType": "CouponNFT",
      "baseURI": "https://bafybeifm37hhdwc5mbgsng6fzmzhx3cxrazvcwc5xlntjsel4skpwkedba.ipfs.w3s.link/",
      "maxSupply": 150,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 150
        }
      ]
    },
    {
      "address": "0x417B31eD5622b9Ea042F13dd79DDfcE2C4F9B68C",
      "name": "GRAND SUMO 2025 2",
      "symbol": "GS2025-2",
      "contractType": "CouponNFT",
      "baseURI": "https://bafybeifm37hhdwc5mbgsng6fzmzhx3cxrazvcwc5xlntjsel4skpwkedba.ipfs.w3s.link/",
      "maxSupply": 150,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 150
        }
      ]
    },
    {
      "address": "0x3F3177AA56a4E79937f5bb14623241b1939B12F6",
      "name": "LACE Reward",
      "symbol": "LACE_REWARD",
      "contractType": "RewardLockedNFT",
      "baseURI": "https://w3s.link/ipfs/bafybeiax6lznbqaeps4butppdw6cw56ya3qthjrjwi3tq5xf7o6szegvne/",
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
      "address": "0x9272b346254B72F70E68692FA350159BD295f7A9",
      "name": "Lace Test",
      "symbol": "LTNFT",
      "contractType": "RewardLockedNFT",
      "baseURI": "https://w3s.link/ipfs/bafybeihb7iirlyz4u75igt4ugaadw2qg7vcypahquk6m6prwolbchgum5y/",
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
      "address": "0x15e41bC185f8a9c842Bd152B5c92B3526EECeF0C",
      "name": "GRAND SUMO 2025 3",
      "symbol": "GS2025-3",
      "contractType": "CouponNFT",
      "baseURI": "https://bafybeifm37hhdwc5mbgsng6fzmzhx3cxrazvcwc5xlntjsel4skpwkedba.ipfs.w3s.link/",
      "maxSupply": 150,
      "tiers": [
        {
          "startTokenId": 1,
          "endTokenId": 150
        }
      ]
    },
    {
      "address": "0xdA4Ee31309e5F09ddee30173e2CeacE8d818762E",
      "name": "Lace Test 2",
      "symbol": "LTNFT2",
      "contractType": "RewardLockedNFT",
      "baseURI": "https://w3s.link/ipfs/bafybeihb7iirlyz4u75igt4ugaadw2qg7vcypahquk6m6prwolbchgum5y/",
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
  // Contract Type Registry - defines mint function signatures for different NFT contract types
  contractTypeRegistry: {
    "CouponNFT": {
      mintSelector: "mint(address,uint256)",
      batchSelector: "mintMultiple(address[],uint256[])",
      batchSupported: true,
      parameters: {
        mint: ["toAddress", "tokenId"],
        mintMultiple: ["toAddresses", "tokenIds"]
      }
    },
    "RewardLockedNFT": {
      mintSelector: "mintWithLock(address,uint256,uint256,uint256,uint256)",
      batchSelector: "mintMultipleWithLock(address[],uint256[],uint256[],uint256[],uint256[])",
      batchSupported: true,
      parameters: {
        mintWithLock: ["toAddress", "tokenId", "lockAmount", "rewardAmount", "unlockTime"],
        mintMultipleWithLock: ["toAddresses", "tokenIds", "lockAmounts", "rewardAmounts", "unlockTimes"]
      }
    }
  }
};
/**
 * Configuration for Hardhat localhost network testing
 * For testing the ConsumptionBasedTokenDiscovery deployment
 */

module.exports = {
    network_environment: "HARDHAT_LOCALHOST",
    batchSize: 1000,
    googleSheetsId: "1UFTNmh9JDO1FJPij-bYRATtPAJdh4FZI8WYklkgPRng",

    // Fresh deployment addresses (empty for initial deployment)
    nftMintControllerAddress: "0xB0D4afd8879eD9F52b28595d31B441D079B2Ca07",
    nftTokenDiscoveryAddress: "0x5081a39b8A5f0E35a8D959395a630b68B74Dd30f",
    // For ConsumptionBasedTokenDiscovery
    nftMintVoucherAddress: "0x04C89607413713Ec9775E14b954286519d836FEf",

    chainId: 31337, // Hardhat localhost default
    admins: [
        { address: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" } // Default hardhat account
    ],

    // Contract Type Registry - defines mint function signatures for different NFT contract types
    contractTypeRegistry: {
        "CouponNFT": {
            mintSelector: "mint(address,uint256)",
            batchSelector: "mintMultiple(address[],uint256[])",
            batchSupported: true
        },
        "RewardLockedNFT": {
            mintSelector: "mintWithLock(address,uint256,uint256,uint256,uint256)",
            batchSelector: "mintMultipleWithLock(address[],uint256[],uint256[],uint256[],uint256[])",
            batchSupported: true
        }
    },

    collections: [
        {
            address: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
            name: "Test Basic NFT",
            symbol: "TBNFT",
            contractType: "CouponNFT",
            baseURI: "https://example.com/metadata/",
            maxSupply: 50,
            tiers: [
                {
                    startTokenId: 1,
                    endTokenId: 50
                }
            ]
        },
        {
            address: "0x9A676e781A523b5d0C0e43731313A708CB607508",
            name: "Test Multi-Tier NFT",
            symbol: "TMTNFT",
            contractType: "CouponNFT",
            baseURI: "https://example.com/metadata/",
            maxSupply: 100,
            tiers: [
                {
                    startTokenId: 1,
                    endTokenId: 50
                },
                {
                    startTokenId: 51,
                    endTokenId: 100
                }
            ]
        },
        {
            address: "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c",
            name: "Test Large Collection NFT",
            symbol: "TLCNFT",
            contractType: "CouponNFT",
            baseURI: "https://example.com/metadata/",
            maxSupply: 2000,
            tiers: [
                {
                    startTokenId: 1,
                    endTokenId: 1000
                },
                {
                    startTokenId: 1001,
                    endTokenId: 2000
                }
            ]
        },
        {
            address: "0xb7278A61aa25c888815aFC32Ad3cC52fF24fE575",
            name: "Test Reward NFT",
            symbol: "TRNFT",
            contractType: "RewardLockedNFT",
            baseURI: "https://example.com/reward-metadata/",
            maxSupply: 100,
            tiers: [
                {
                    startTokenId: 1,
                    endTokenId: 50,
                    lockDuration: 300,  // 5 minutes
                    rewardAmount: "15"  // $15 USD
                },
                {
                    startTokenId: 51,
                    endTokenId: 100,
                    lockDuration: 0,    // Instant unlock
                    rewardAmount: "20"  // $20 USD
                }
            ]
        }
    ]
};
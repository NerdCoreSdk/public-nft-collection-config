/**
 * Configuration for Hardhat localhost network testing
 * For testing the MODULE_REGISTRY pattern (ENG-2004)
 */

module.exports = {
    network_environment: "HARDHAT_LOCALHOST",
    batchSize: 1000,
    googleSheetsId: "1UFTNmh9JDO1FJPij-bYRATtPAJdh4FZI8WYklkgPRng",

    // Fresh deployment addresses (empty for initial deployment)
    nftMintControllerAddress: "",
    nftTokenDiscoveryAddress: "",
    nftMintVoucherAddress: "",
    masterExclusivityAddress: "", // For MODULE_REGISTRY pattern testing

    chainId: 31337, // Hardhat localhost default
    admins: [
        { address: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" } // Default hardhat account
    ],

    // Exclusivity scopes - enables IExclusivityModule auto-configuration via MODULE_REGISTRY
    // Note: collections array will be populated with deployed addresses after deployment
    exclusivityScopes: [
        {
            name: "Test PowerPay Scope",
            scopeId: "", // Will be populated after scope creation
            collections: [] // Will be populated after collection deployment
        }
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
        },
        "ExpirableNFT": {
            mintSelector: "mintWithExpiration(address,uint256,uint256)",
            batchSelector: "mintMultipleWithExpiration(address[],uint256[],uint256[])",
            batchSupported: true
        }
    },

    collections: [
        {
            address: "",
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
            address: "",
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
            // Tests the `contract` field for MODULE_REGISTRY pattern (ENG-2004)
            // contract = Solidity contract name, contractType = MintController registry lookup
            // PowerPayNFT with expirable tokens - uses mintWithExpiration for presale backdating
            // Note: Controller must register this collection as "ExpirableNFT" type
            address: "",
            name: "Test PowerPay NFT",
            symbol: "TPPNFT",
            contract: "PowerPayNFT",      // Actual Solidity contract to deploy
            contractType: "CouponNFT",    // Base contract type (backward compatible)
            baseURI: "https://example.com/powerpay-metadata/",
            maxSupply: 50,
            utilities: {
                isActivatable: true,
                isExpirable: true         // Enables ExpirableNFT handler when lockTime provided
            },
            tiers: [
                {
                    startTokenId: 1,
                    endTokenId: 50,
                    timeLimitDuration: 63072000 // 2 years default expiration
                }
            ]
        }
    ]
};

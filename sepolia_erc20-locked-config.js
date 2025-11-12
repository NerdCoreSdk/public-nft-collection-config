/**
 * ERC20LockedNFT Multi-Collection Configuration - Sepolia Testnet
 *
 * Testnet configuration with 3 collections for testing purposes.
 * Smaller supply sizes and reduced reward pools for testing.
 */

module.exports = {
    // Brand Identity
    brandName: "Test Brand",
    brandOwner: "0x0000000000000000000000000000000000000000",  // Your testnet wallet

    // Test ERC20 Token (deploy ERC20Mock first)
    rewardTokenAddress: "0x0000000000000000000000000000000000000000",  // ⚠️ Deploy test token first
    rewardTokenSymbol: "TEST",
    rewardTokenDecimals: 18,

    // NFT Collections (3 test collections)
    collections: [
        // Test Collection 1: Basic
        {
            name: "Test HODL Basic",
            symbol: "tHODL-1",
            address: "",
            baseURI: "https://testnet-metadata.example.com/basic/",
            maxSupply: 100,

            royaltiesPercentage: 500,  // 5%
            royaltiesReceiver: "0x0000000000000000000000000000000000000000",  // Your testnet wallet

            rewardTokenAddress: "0x0000000000000000000000000000000000000000",  // Same as brand token
            rewardTokenDecimals: 18,

            initialRewardPoolSize: "10000"  // 10k test tokens
        },

        // Test Collection 2: Medium
        {
            name: "Test HODL Medium",
            symbol: "tHODL-2",
            address: "",
            baseURI: "https://testnet-metadata.example.com/medium/",
            maxSupply: 50,

            royaltiesPercentage: 750,  // 7.5%
            royaltiesReceiver: "0x0000000000000000000000000000000000000000",  // Your testnet wallet

            rewardTokenAddress: "0x0000000000000000000000000000000000000000",  // Same as brand token
            rewardTokenDecimals: 18,

            initialRewardPoolSize: "5000"  // 5k test tokens
        },

        // Test Collection 3: Premium
        {
            name: "Test HODL Premium",
            symbol: "tHODL-3",
            address: "",
            baseURI: "https://testnet-metadata.example.com/premium/",
            maxSupply: 25,

            royaltiesPercentage: 1000,  // 10%
            royaltiesReceiver: "0x0000000000000000000000000000000000000000",  // Your testnet wallet

            rewardTokenAddress: "0x0000000000000000000000000000000000000000",  // Same as brand token
            rewardTokenDecimals: 18,

            initialRewardPoolSize: "2500"  // 2.5k test tokens
        }
    ]
};

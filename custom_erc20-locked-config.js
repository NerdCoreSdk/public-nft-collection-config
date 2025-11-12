/**
 * ERC20LockedNFT Multi-Collection Configuration - Custom Network
 *
 * Small test collections for custom network development and testing.
 */

module.exports = {
    // Brand Identity
    brandName: "Test Brand",
    brandOwner: "0x0000000000000000000000000000000000000000",  // Will use deployer address

    // Test ERC20 Token (placeholder - deploy ERC20Mock first)
    rewardTokenAddress: "0x0000000000000000000000000000000000000001",  // Placeholder - update after deploying ERC20Mock
    rewardTokenSymbol: "TEST",
    rewardTokenDecimals: 18,

    // NFT Collections (2 small test collections)
    collections: [
        // Test Collection 1
        {
            name: "Test HODL Reward NFT 1",
            symbol: "tHODL-1",
            address: "",  // Will be filled after deployment
            baseURI: "https://test-metadata.example.com/hodl1/",
            maxSupply: 50,  // Small supply for testing

            royaltiesPercentage: 500,  // 5%
            royaltiesReceiver: "0x0000000000000000000000000000000000000000",  // Will use deployer address

            rewardTokenAddress: "0x0000000000000000000000000000000000000001",  // Update after deploying ERC20Mock
            rewardTokenDecimals: 18,

            initialRewardPoolSize: "0"  // Don't fund on test network
        },

        // Test Collection 2
        {
            name: "Test HODL Reward NFT 2",
            symbol: "tHODL-2",
            address: "",  // Will be filled after deployment
            baseURI: "https://test-metadata.example.com/hodl2/",
            maxSupply: 30,  // Even smaller supply

            royaltiesPercentage: 750,  // 7.5%
            royaltiesReceiver: "0x0000000000000000000000000000000000000000",  // Will use deployer address

            rewardTokenAddress: "0x0000000000000000000000000000000000000001",  // Update after deploying ERC20Mock
            rewardTokenDecimals: 18,

            initialRewardPoolSize: "0"  // Don't fund on test network
        }
    ]
};

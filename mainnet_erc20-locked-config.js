/**
 * ERC20LockedNFT Multi-Collection Configuration - Ethereum Mainnet
 *
 * This config supports multiple NFT collections for a single brand.
 * Each collection can have different parameters but shares the same brand owner and reward token.
 *
 * IMPORTANT: Review all values carefully before mainnet deployment
 */

module.exports = {
    // ========================================
    // BRAND IDENTITY
    // ========================================
    brandName: "Example Brand",
    brandOwner: "0x0000000000000000000000000000000000000000",  // ⚠️ Brand's wallet/multi-sig

    // ========================================
    // BRAND'S ERC20 REWARD TOKEN (Shared across all collections)
    // ========================================
    rewardTokenAddress: "0x0000000000000000000000000000000000000000",  // ⚠️ Brand's ERC20 token on mainnet
    rewardTokenSymbol: "EX",
    rewardTokenDecimals: 18,

    // ========================================
    // NFT COLLECTIONS (6 collections for this brand)
    // ========================================
    collections: [
        // Collection 1: Tier 1 - Premium
        {
            name: "Example Brand HODL Premium",
            symbol: "EX-PREM",
            address: "",  // Leave empty for deployment, will be filled automatically
            baseURI: "https://metadata.example.com/premium/",  // ⚠️ UPDATE THIS
            maxSupply: 1000,

            // OpenSea / Marketplace Settings
            royaltiesPercentage: 750,  // 7.5%
            royaltiesReceiver: "0x0000000000000000000000000000000000000000",  // ⚠️ Brand's royalty wallet

            // Reward Token Configuration (uses brand's token above)
            rewardTokenAddress: "0x0000000000000000000000000000000000000000",  // ⚠️ Same as brand token
            rewardTokenDecimals: 18,

            // Initial reward pool funding (brand funds this)
            initialRewardPoolSize: "500000"  // 500k tokens
        },

        // Collection 2: Tier 2 - Gold
        {
            name: "Example Brand HODL Gold",
            symbol: "EX-GOLD",
            address: "",
            baseURI: "https://metadata.example.com/gold/",  // ⚠️ UPDATE THIS
            maxSupply: 2000,

            royaltiesPercentage: 500,  // 5%
            royaltiesReceiver: "0x0000000000000000000000000000000000000000",  // ⚠️ UPDATE THIS

            rewardTokenAddress: "0x0000000000000000000000000000000000000000",  // ⚠️ Same as brand token
            rewardTokenDecimals: 18,

            initialRewardPoolSize: "300000"  // 300k tokens
        },

        // Collection 3: Tier 3 - Silver
        {
            name: "Example Brand HODL Silver",
            symbol: "EX-SILV",
            address: "",
            baseURI: "https://metadata.example.com/silver/",  // ⚠️ UPDATE THIS
            maxSupply: 3000,

            royaltiesPercentage: 500,  // 5%
            royaltiesReceiver: "0x0000000000000000000000000000000000000000",  // ⚠️ UPDATE THIS

            rewardTokenAddress: "0x0000000000000000000000000000000000000000",  // ⚠️ Same as brand token
            rewardTokenDecimals: 18,

            initialRewardPoolSize: "200000"  // 200k tokens
        },

        // Collection 4: Tier 4 - Bronze
        {
            name: "Example Brand HODL Bronze",
            symbol: "EX-BRNZ",
            address: "",
            baseURI: "https://metadata.example.com/bronze/",  // ⚠️ UPDATE THIS
            maxSupply: 5000,

            royaltiesPercentage: 250,  // 2.5%
            royaltiesReceiver: "0x0000000000000000000000000000000000000000",  // ⚠️ UPDATE THIS

            rewardTokenAddress: "0x0000000000000000000000000000000000000000",  // ⚠️ Same as brand token
            rewardTokenDecimals: 18,

            initialRewardPoolSize: "150000"  // 150k tokens
        },

        // Collection 5: Limited Edition
        {
            name: "Example Brand HODL Limited Edition",
            symbol: "EX-LTD",
            address: "",
            baseURI: "https://metadata.example.com/limited/",  // ⚠️ UPDATE THIS
            maxSupply: 500,

            royaltiesPercentage: 1000,  // 10%
            royaltiesReceiver: "0x0000000000000000000000000000000000000000",  // ⚠️ UPDATE THIS

            rewardTokenAddress: "0x0000000000000000000000000000000000000000",  // ⚠️ Same as brand token
            rewardTokenDecimals: 18,

            initialRewardPoolSize: "100000"  // 100k tokens
        },

        // Collection 6: Community
        {
            name: "Example Brand HODL Community",
            symbol: "EX-COMM",
            address: "",
            baseURI: "https://metadata.example.com/community/",  // ⚠️ UPDATE THIS
            maxSupply: 10000,

            royaltiesPercentage: 250,  // 2.5%
            royaltiesReceiver: "0x0000000000000000000000000000000000000000",  // ⚠️ UPDATE THIS

            rewardTokenAddress: "0x0000000000000000000000000000000000000000",  // ⚠️ Same as brand token
            rewardTokenDecimals: 18,

            initialRewardPoolSize: "500000"  // 500k tokens
        }
    ]
};

/**
 * OFF-CHAIN REWARD CALCULATION NOTES
 *
 * Rewards are calculated off-chain before calling mintAndLock().
 * Each brand can use their own formula in frontend/backend.
 *
 * Example reward formulas by collection:
 *
 * Premium (Collection 1): 100% APY
 *   rewardAmount = lockAmount * lockDuration / 365 days * 1.0
 *
 * Gold (Collection 2): 50% APY
 *   rewardAmount = lockAmount * lockDuration / 365 days * 0.5
 *
 * Silver (Collection 3): 30% APY
 *   rewardAmount = lockAmount * lockDuration / 365 days * 0.3
 *
 * Bronze (Collection 4): 15% APY
 *   rewardAmount = lockAmount * lockDuration / 365 days * 0.15
 *
 * Limited Edition (Collection 5): 200% APY (exclusive)
 *   rewardAmount = lockAmount * lockDuration / 365 days * 2.0
 *
 * Community (Collection 6): 10% APY
 *   rewardAmount = lockAmount * lockDuration / 365 days * 0.1
 */

# Tier-Centric Template System - Quick Start Guide

## Overview
The new tier-centric template system simplifies RewardLockedNFT collection configuration by organizing all tier data in self-contained blocks, eliminating complex attribute dependencies.

## 📋 Template Structure

### 1. **Collection Information**
Basic collection metadata (name, symbol, description, total supply)

### 2. **Token Configuration** 
Network token settings (LACE, GROW, etc.) with conversion rates

### 3. **Tier Configuration** ✨ NEW!
Self-contained tier definitions with:
- NFT count per tier
- Lock duration (seconds)
- Reward amounts and bonus multipliers
- Tier-specific images (locked/unlocked states)
- Custom attribute overrides

### 4. **Global Attributes**
Simple collection-wide attributes (e.g., "Collection Count")

## 🚀 Quick Start Workflow

### Step 1: Fill PDF Template
Use the RewardToken NFT Collection Planning Template:
- Define your tiers with all properties
- Specify tier-specific images
- Set reward amounts and bonuses

### Step 2: Convert to Markdown
```bash
# Manual conversion or automated tool (future enhancement)
# Creates: scripts/config/NFT_Collection_Config/templates/YourCollection.md
```

### Step 3: Generate Metadata
```bash
node scripts/generate-reward-metadata-tier-centric.js YourCollection.md
# Creates: 300 metadata JSON files
```

### Step 4: Upload to IPFS
```bash
node scripts/upload-metadata-to-ipfs.js path/to/metadata/directory
# Returns: Base Token URI for contract
```

### Step 5: Deploy Contract
```bash
HARDHAT_NETWORK=nerd_test node scripts/deploy-reward-nft.js YourCollection.md
# Returns: Contract address
```

### Step 6: Mint NFTs
```bash
HARDHAT_NETWORK=nerd_test node scripts/mint-manager-tier-centric.js CONTRACT_ADDRESS \
  --config YourCollection.md --tier 1,2,3 --count 1 --to WALLET_ADDRESS --confirm
```

## 🎯 Key Advantages

### ✅ **Simplified Configuration**
- All tier data in one place
- No complex attribute cross-references
- Self-validating structure

### ✅ **Fewer Attributes**
- Only 3 attributes per NFT (2 overrides + 1 global)
- Reduced metadata complexity
- Cleaner marketplace display

### ✅ **Network Awareness**
- Automatic decimal handling (8 for LACE, 18 for ETH)
- Proper token conversion rates
- Network-specific optimizations

### ✅ **Visual Tier Management**
- Tier-specific locked/unlocked images
- Custom attribute overrides per tier
- Distinct visual identity per reward level

## 📊 Example Tier Configuration

```json
{
  "tierNumber": 1,
  "nftCount": 100,
  "lockDuration": 60,
  "rewardAmount": 50,
  "rewardBonusType": "Multiplier",
  "rewardBonusAmount": 1.5,
  "primaryImage": "https://ipfs.link/tier1-locked.svg",
  "activatedImage": "https://ipfs.link/tier1-unlocked.svg",
  "attributeOverrides": [
    {
      "trait_type": "Reward Tier",
      "value": "1-Minute HODL WITH Bonus Yield"
    },
    {
      "trait_type": "Total Reward", 
      "value": "75 LACE"
    }
  ]
}
```

## 🔧 Technical Features

### Instant Unlock Support
- 0-second lock duration automatically converts to 10 seconds
- Prevents contract validation issues
- Maintains "instant" user experience

### State Tracking
- Contract-specific minting states
- Tier allocation tracking  
- Complete mint history
- Progress monitoring

### Decimal Handling
- Reads network decimals from hardhat.config.js
- Proper wei calculations for each network
- LACE (8 decimals), ETH (18 decimals), etc.

## 📈 Proven Results

### LaceTest Collection Success ✅
- **Contract**: `0x9272b346254B72F70E68692FA350159BD295f7A9`
- **Test Results**: 3/3 tiers successfully minted
- **Cost**: 325 LACE (proper decimal calculation)
- **Status**: All systems operational

## 🔄 Migration from Old System

### Old (Attribute-Centric):
- Complex attribute arrays with tier sub-objects
- Cross-referencing between different attribute types  
- Difficult to maintain and validate

### New (Tier-Centric):
- Self-contained tier definitions
- All tier properties in one place
- Simple validation and maintenance

## 📚 Files Reference

### Core Scripts:
- `generate-reward-metadata-tier-centric.js` - Metadata generation
- `mint-manager-tier-centric.js` - Enhanced minting system
- `deploy-reward-nft.js` - Contract deployment
- `upload-metadata-to-ipfs.js` - IPFS integration

### Example Configs:
- `LaceTest.md` - Working 3-tier example
- `Reward_Test.md` - Legacy format (reference)

**Status**: 🎉 **PRODUCTION READY** - Tier-centric template system fully operational
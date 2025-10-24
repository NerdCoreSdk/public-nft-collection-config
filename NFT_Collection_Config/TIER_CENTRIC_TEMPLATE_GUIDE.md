# Tier-Centric Template System - Quick Start Guide

## Overview
The new tier-centric template system simplifies RewardLockedNFT collection configuration by organizing all tier data in self-contained blocks, eliminating complex attribute dependencies.

## 📋 Template Structure

### 1. **IPFS Resources**
- Images Directory CID
- Metadata Directory CID (filled after upload)
- Base Token URI (filled after upload)
- Storage Space (organization name)
- **Storage Space DID** ✨ NEW! - Storacha space identifier for auto-upload

### 2. **Collection Information**
Basic collection metadata (name, symbol, description, total supply)

### 3. **Token Configuration**
Network token settings (LACE, ELMT-P, etc.) with conversion rates

### 4. **Tier Configuration** ✨
Self-contained tier definitions with:
- NFT count per tier
- Lock duration (seconds)
- Reward amounts and bonus multipliers
- Tier-specific images (locked/unlocked states)
- Custom attribute overrides

### 5. **Global Attributes**
Simple collection-wide attributes (e.g., "Collection Count")
- Can be empty array `[]` if no global attributes needed

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
# NEW: Auto-extract DID from config file ✨
node scripts/upload-to-ipfs.js metadata path/to/metadata/directory --config YourCollection.md
# Returns: Base Token URI for contract

# Alternative: Manual DID specification
node scripts/upload-to-ipfs.js metadata path/to/metadata/directory --did z6Mk...
```

### Step 5: Update Config with IPFS Results
Update your markdown config with:
- Metadata Directory CID
- Base Token URI

### Step 6: Deploy via Main Deployment Script (Recommended)
```bash
# Add collection to {network}_custom-minter-config.js with address: ""
# Then run main deployment script
HARDHAT_NETWORK=element_main npx hardhat run scripts/02_deploy_and_setup_nft_minter.js --network element_main
# Automatically: deploys contract, configures tiers, initializes discovery, saves address
```

### Alternative: Direct Deployment
```bash
HARDHAT_NETWORK=nerd_test node scripts/deploy-reward-nft.js YourCollection.md
# Returns: Contract address (manual setup required)
```

## 🎯 Key Advantages

### ✅ **Simplified Configuration**
- All tier data in one place
- No complex attribute cross-references
- Self-validating structure

### ✅ **Flexible Attributes**
- Minimal attributes (only what's defined in PDF spec)
- Global attributes optional (can be empty array)
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
- `generate-reward-metadata-tier-centric.js` - Metadata generation from markdown configs
- `upload-to-ipfs.js` - IPFS upload with auto-DID extraction ✨ NEW!
- `02_deploy_and_setup_nft_minter.js` - Main deployment orchestrator (recommended)
- `deploy-reward-nft.js` - Direct RewardLockedNFT deployment (alternative)

### Example Configs:
- `LaceTest.md` - Multi-tier example (3 tiers, Nerd_Stage space)
- `Element_Heirloom_Voucher.md` - Single-tier example (Element space) ✨ NEW!
- `Reward_Test.md` - Legacy format (reference only)

## 🆕 Recent Enhancements

### Storage Space DID Auto-Detection (Oct 2025)
- **What**: Upload script now auto-reads DID from markdown config
- **Why**: Single source of truth, less manual copying
- **Usage**: `--config YourCollection.md` parameter
- **Benefit**: Cleaner workflow, fewer errors

### Main Deployment Script Integration
- **What**: Add collection to network config, script handles everything
- **Why**: Consistent deployment across all collections
- **Process**: Empty address → auto-deploy → auto-configure → save address
- **Benefit**: Production-ready deployment in one command

**Status**: 🎉 **PRODUCTION READY** - Tier-centric template system fully operational with auto-DID detection
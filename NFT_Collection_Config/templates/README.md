# RewardToken NFT Collection Templates

## 📄 Available Templates

### 1. **RewardToken_NFT_Collection_Template.pdf**
Blank template for planning RewardToken NFT collections with tier-centric structure.

**Key Features:**
- Collection metadata fields (name, symbol, description)
- Token configuration (reward token type, decimals)
- Tier-based structure with self-contained properties
- Per-tier image configuration
- Attribute override system

### 2. **LaceTest_Example_Filled.pdf**
Completed example showing proper template usage for a 3-tier LACE reward collection.

**Example Configuration:**
- 300 total NFTs across 3 tiers
- Tier 1: 1-minute lock, 50 LACE base × 1.5 = 75 LACE total
- Tier 2: 10-minute lock, 100 LACE base × 2.0 = 200 LACE total
- Tier 3: Instant unlock, 50 LACE base × 1.0 = 50 LACE total

## 📋 How to Use

### Step 1: Fill Out Template
1. Open `RewardToken_NFT_Collection_Template.pdf`
2. Fill in collection information
3. Define your tiers with:
   - NFT count per tier
   - Lock duration (seconds)
   - Reward amounts and bonus type
   - Image URLs for locked/unlocked states
   - Attribute overrides

### Step 2: Convert to Markdown
Create a `.md` file in parent directory following the structure in `LaceTest.md`:
```markdown
# NFT Metadata Form Default Values - Your Collection Name

## IPFS Resources
...

## Collection Information
```json
{
  "collectionName": "Your Collection",
  "collectionSymbol": "SYMBOL",
  ...
}
```

## Tier Configuration
...
```

### Step 3: Deploy Collection
Follow the TIER_CENTRIC_TEMPLATE_GUIDE.md for:
1. Generating metadata
2. Uploading to IPFS
3. Deploying contract
4. Minting NFTs

## 🎯 Template Philosophy

### Tier-Centric Design
Each tier is self-contained with all its properties:
- **Functional Data**: Lock duration, reward amounts, bonus calculations
- **Visual Data**: Primary (locked) and activated (unlocked) images
- **Display Data**: Attribute overrides for marketplace presentation

### Simplified Attributes
Only 3 attributes per NFT:
- 2 tier-specific overrides (customizable)
- 1 global attribute (e.g., Collection Count)

### Network Flexibility
- Supports any EVM network token (LACE, GROW, ETH, etc.)
- Handles different decimal precisions (8, 18, etc.)
- Configurable conversion rates

## 📚 Related Documents

- **../LaceTest.md** - Example markdown configuration
- **../TIER_CENTRIC_TEMPLATE_GUIDE.md** - Complete implementation guide
- **../REWARD_NFT_PROJECT_STATUS.md** - Project status and achievements

## ✅ Proven Success

The LaceTest collection successfully deployed using this template:
- Contract: `0x9272b346254B72F70E68692FA350159BD295f7A9`
- Network: nerd_test
- All 3 tiers functional
- Proper 8-decimal LACE handling

**Status**: 🎉 Templates ready for production use!
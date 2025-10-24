# NFT Collection Configuration

This directory contains all configuration files for NFT collection deployment and management.

**⚠️ IMPORTANT**: All information in this directory is PUBLIC. Do not commit private keys or sensitive data.

## 📁 Directory Structure

```
scripts/config/
├── README.md                                    # This file
├── {network}_custom-minter-config.js            # Network-specific deployment configs
├── NFT_Collection_Config/                       # RewardToken collection configs
│   ├── templates/                               # Markdown configuration templates
│   │   ├── LaceTest.md                         # Multi-tier example (Nerd_Stage)
│   │   ├── Element_Heirloom_Voucher.md         # Single-tier example (Element)
│   │   └── Reward_Test.md                      # Legacy format (reference)
│   ├── output/                                  # Generated metadata (gitignored)
│   ├── TIER_CENTRIC_TEMPLATE_GUIDE.md          # Complete workflow guide
│   └── minting-states/                          # Minting progress tracking
└── [other config files]
```

## 🚀 Quick Start

### For CouponNFT (Standard NFT)

1. **Add to network config**: Edit `{network}_custom-minter-config.js`
   ```javascript
   {
     "address": "",  // Empty = will deploy
     "name": "My NFT Collection",
     "symbol": "MYNFT",
     "contractType": "CouponNFT",
     "baseURI": "https://ipfs.link/...",
     "maxSupply": 1000,
     "tiers": [{"startTokenId": 1, "endTokenId": 1000}]
   }
   ```

2. **Deploy**: `HARDHAT_NETWORK={network} npx hardhat run scripts/02_deploy_and_setup_nft_minter.js --network {network}`

### For RewardLockedNFT (Reward Token)

1. **Create markdown config**: `NFT_Collection_Config/templates/MyCollection.md`
   - See `Element_Heirloom_Voucher.md` for single-tier example
   - See `LaceTest.md` for multi-tier example

2. **Generate metadata**: `node scripts/generate-reward-metadata-tier-centric.js MyCollection.md`

3. **Upload to IPFS**: `node scripts/upload-to-ipfs.js metadata path/to/metadata --config MyCollection.md`

4. **Update config** with IPFS CID and Base URI

5. **Add to network config** (same as CouponNFT but with `"contractType": "RewardLockedNFT"`)

6. **Deploy**: `HARDHAT_NETWORK={network} npx hardhat run scripts/02_deploy_and_setup_nft_minter.js --network {network}`

## 📋 Configuration File Types

### Network Deployment Configs (`{network}_custom-minter-config.js`)

Main configuration for NFT deployment on specific networks.

**Purpose**:
- Define network settings (RPC, chain ID, API endpoints)
- List all NFT collections to deploy/manage
- Configure controller addresses
- Set admin addresses

**Example Networks**:
- `element_main_custom-minter-config.js` - Element United network
- `custom_custom-minter-config.js` - Generic/localhost testing
- `nerd_test_custom-minter-config.js` - Nerd Core testnet

**Key Fields**:
```javascript
{
  network_environment: "ELEMENT",
  chainId: 19696657,
  coreAPI: "https://api.elementunited.com/",
  nftMintControllerAddress: "0x...",  // Controller contract
  collections: [/* NFT collection configs */],
  contractTypeRegistry: {/* Contract type definitions */}
}
```

### RewardToken Markdown Configs (`NFT_Collection_Config/templates/*.md`)

Tier-centric configuration for RewardLockedNFT collections.

**Purpose**:
- Define collection metadata and token settings
- Configure tier-based rewards and lock durations
- Specify IPFS resources and Storage Space DID
- Generate metadata with tier-specific attributes

**Required Sections**:
1. **IPFS Resources** - CIDs, Base URI, Storage Space DID
2. **Collection Information** - Name, symbol, description, supply
3. **Token Configuration** - Reward token type, oracle settings
4. **Tier Configuration** - Lock durations, rewards, images per tier
5. **Global Attributes** - Collection-wide attributes (can be empty)

**See**: `NFT_Collection_Config/TIER_CENTRIC_TEMPLATE_GUIDE.md` for complete documentation

## 🔑 Key Concepts

### Contract Types

- **CouponNFT**: Standard NFT with mint/burn functionality
- **RewardLockedNFT**: NFT with ETH locking and time-based rewards

Both use the contract type registry for dynamic function resolution.

### Tiers

Collections are divided into tiers with different token ID ranges:
```javascript
"tiers": [
  {"startTokenId": 1, "endTokenId": 100},    // Tier 1: tokens 1-100
  {"startTokenId": 101, "endTokenId": 200}   // Tier 2: tokens 101-200
]
```

**For RewardLockedNFT**: Each tier can have different:
- Lock durations (seconds)
- Reward amounts (token units)
- Bonus multipliers
- Images (locked/unlocked states)
- Custom attributes

### Storage Space DID

Storacha (web3.storage) space identifier for IPFS uploads:
- **Nerd_Stage**: `did:key:z6MkrD9gUeV3KaiN5nmQ8TridGe8n7kthvTWien6MHiBrZi3`
- **Element**: `did:key:z6MkwbVN5ByVL4r3rj6Qvj6iycbU2ccQhs5d8K8qM4RFChrs`

Configured in markdown templates for automatic IPFS uploads.

## 🔧 Common Workflows

### Deploy New Collection

1. Prepare metadata and upload to IPFS
2. Add collection to `{network}_custom-minter-config.js` with `address: ""`
3. Run deployment script
4. Script automatically: deploys contract → configures tiers → initializes discovery → saves address

### Update Existing Collection

1. Modify collection config in `{network}_custom-minter-config.js`
2. Run deployment script (idempotent - only updates what changed)

### Migrate to New Controller

See `MIGRATION.md` for complete migration workflow.

## 📚 Documentation

- **Tier-Centric Templates**: `NFT_Collection_Config/TIER_CENTRIC_TEMPLATE_GUIDE.md`
- **Main Deployment**: `../../CLAUDE.md` (project root)
- **Migration Guide**: `../../MIGRATION.md`
- **API Reference**: `../../docs/api/NFTMintController.md`

## ⚠️ Important Notes

### Security
- **Never commit private keys** - Use environment variables
- **Review configs before deployment** - Mistakes are permanent on blockchain
- **Test on testnet first** - Validate everything before mainnet

### Network Isolation
- Each network has separate config file
- CSV batch minting is network-specific
- State tracking is per-network and per-contract

### IPFS Best Practices
- Upload images first, then metadata
- Verify CIDs before deploying contracts
- Use consistent IPFS gateways (`w3s.link` recommended)
- Store DIDs in markdown configs for automation

## 🆘 Troubleshooting

### "No config file found for network"
- Ensure `{network}_custom-minter-config.js` exists
- Check `HARDHAT_NETWORK` environment variable matches filename

### "Storage Space DID not found"
- Add `- **Storage Space DID**: \`did:key:...\`` to IPFS Resources section
- Verify DID format starts with `did:key:`

### "Collection already deployed"
- Config file contains existing address
- To redeploy: clear address field or deploy to different network

### "Metadata generation failed"
- Check all 4 JSON blocks present in markdown config
- Verify Global Attributes section exists (can be empty array)
- Run with full path: `node scripts/generate-reward-metadata-tier-centric.js scripts/config/NFT_Collection_Config/templates/YourFile.md`

## 📊 Current Production Collections

See individual network config files for deployed collections:
- **Element**: `element_main_custom-minter-config.js`
- **Nerd Test**: Referenced in deployment logs

---

**Last Updated**: October 2025
**Status**: Production Ready ✅

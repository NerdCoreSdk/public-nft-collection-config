# NFT Metadata Form Default Values - Test Reward Token

## IPFS Resources
- **Images Directory CID**: `bafybeib5hxk3427wvbv4jeffvbaxlanj26ulysfjqvft4ffohtzerdmvdy` (Medal GIFs)
- **Metadata Directory CID**: `bafybeif5eganbpbl3frhymyn54csnzn5ickqpvn6tgszp6spaby5dqrbie`
- **Base Token URI**: `https://w3s.link/ipfs/bafybeif5eganbpbl3frhymyn54csnzn5ickqpvn6tgszp6spaby5dqrbie/`
- **Storage Space**: Nerd_Stage (`did:key:z6MkrD9gUeV3KaiN5nmQ8TridGe8n7kthvTWien6MHiBrZi3`)

## Collection Information
```json
{
  "collectionName": "Test Reward Token",
  "collectionSymbol": "TRT",
  "description": "This is a test Reward Token I will be deploying to each Brand for testing",
  "responsibleParty": "Jared",
  "nftType": "RewardToken",
  "standard": "ERC-721",
  "externalUrl": "https://app.dev.nerdunited.net/store/all",
  "totalSupply": 300
}
```

## Token Configuration
```json
{
  "rewardTokenType": "RUNTIME",
  "lockedTokenType": "RUNTIME",
  "priceOracleEnabled": false,
  "defaultETHConversionRate": 1.0
}
```

## Tier Configuration
```json
{
  "tiers": [
    {
      "tierNumber": 1,
      "nftCount": 100,
      "primaryImage": "https://bafybeib5hxk3427wvbv4jeffvbaxlanj26ulysfjqvft4ffohtzerdmvdy.ipfs.w3s.link/goldmedal.gif",
      "activatedImage": "https://bafybeib5hxk3427wvbv4jeffvbaxlanj26ulysfjqvft4ffohtzerdmvdy.ipfs.w3s.link/goldmedal.gif",
      "attributeOverrides": [
        {
          "trait_type": "Medal Type",
          "value": "Gold Medal"
        },
        {
          "trait_type": "Tier",
          "value": "1"
        }
      ]
    },
    {
      "tierNumber": 2,
      "nftCount": 100,
      "primaryImage": "https://bafybeib5hxk3427wvbv4jeffvbaxlanj26ulysfjqvft4ffohtzerdmvdy.ipfs.w3s.link/silvermedal.gif",
      "activatedImage": "https://bafybeib5hxk3427wvbv4jeffvbaxlanj26ulysfjqvft4ffohtzerdmvdy.ipfs.w3s.link/silvermedal.gif",
      "attributeOverrides": [
        {
          "trait_type": "Medal Type",
          "value": "Silver Medal"
        },
        {
          "trait_type": "Tier",
          "value": "2"
        }
      ]
    },
    {
      "tierNumber": 3,
      "nftCount": 100,
      "primaryImage": "https://bafybeib5hxk3427wvbv4jeffvbaxlanj26ulysfjqvft4ffohtzerdmvdy.ipfs.w3s.link/coppermedal.gif",
      "activatedImage": "https://bafybeib5hxk3427wvbv4jeffvbaxlanj26ulysfjqvft4ffohtzerdmvdy.ipfs.w3s.link/coppermedal.gif",
      "attributeOverrides": [
        {
          "trait_type": "Medal Type",
          "value": "Copper Medal"
        },
        {
          "trait_type": "Tier",
          "value": "3"
        }
      ]
    }
  ]
}
```

## Global Attributes (Applied to all NFTs)
```json
{
  "attributes": [
    {
      "trait_type": "Collection Count",
      "value": "#{token_id} of {total_supply}"
    }
  ]
}
```

## Configuration Notes

### Minimal Design Philosophy
This configuration is intentionally minimal to support:

- **Network Flexibility**: No hardcoded reward token types (set at deployment)
- **Runtime Configuration**: Reward amounts, lock durations, and bonus multipliers set at mint time
- **Multi-Network Deployment**: Can be deployed on any EVM network
- **Mint-Time Flexibility**: All reward mechanics configured per-mint rather than in metadata

### Runtime Parameters (Set at Mint Time)
- Lock duration (seconds)
- Reward amount (tokens)
- Bonus multiplier
- Reward token type (network-specific)

### Visual Structure Only
This template provides the visual tier structure (Gold/Silver/Copper medals) with all business logic configured at runtime for maximum deployment flexibility.
# NFT Metadata Form Default Values - Reward Token Test Configuration

## IPFS Resources
- **Images Directory CID**: `bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy`
- **Metadata Directory CID**: `bafybeicf433kocana6jinmen5wygx4jnmsdd5623sswlsl3dwop3vsxadq`
- **Base Token URI**: `https://w3s.link/ipfs/bafybeicf433kocana6jinmen5wygx4jnmsdd5623sswlsl3dwop3vsxadq/`
- **Storage Space**: Nerd_Stage (`did:key:z6MkrD9gUeV3KaiN5nmQ8TridGe8n7kthvTWien6MHiBrZi3`)

## Collection Information
```json
{
  "collectionName": "LACE Reward Example",
  "collectionSymbol": "LACE_REWARD Test",
  "description": "This is an Example NFT Collection using LACE because this is deployed on the NERD Testnet. It has 200 total NFTs, within 2 Tiers  each representing a unique reward tier and lock duration.",
  "nftType": "RewardToken",
  "standard": "ERC-721",
  "externalUrl": "https://app.nerdcore.blockfabric.net/store/all",
  "totalSupply": 200
}
```

## Token Configuration
```json
{
  "rewardTokenType": "LACE",
  "lockedTokenType": "LACE",
  "priceOracleEnabled": false,
  "defaultETHConversionRate": 1.0
}
```

## NFT Attributes (Required for RewardToken nftType)
```json
{
  "attributes": [
    {
      "trait_type": "REWARD_TIER",
      "tiers": [
        {
          "NFT_Count": 100,
          "value":"1-Minute HODL WITH Bonus Yield",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-1-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-1-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value": "Instant REWARD",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-2-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-2-unlocked.svg"
        }
      ]
    },
    {
      "trait_type": "Lock Duration",
      "tiers": [
        {
          "NFT_Count": 100,
          "value":"60",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-1-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-1-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value": "0",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-2-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-2-unlocked.svg"
        }
      ]
    },
    {
      "trait_type": "REWARD Amount in USD",
      "tiers": [
        {
          "NFT_Count": 100,
          "value":"$50.00",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-1-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-1-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value": "$150.00",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-2-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-2-unlocked.svg"
        }
      ]
    },
    {
      "trait_type": "Reward Bonus",
      "tiers": [
        {
          "NFT_Count": 100,
          "value":"1.5 X",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-1-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-1-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value": "1.0 X",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-2-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeia6iebvstpra4kqezcrv4m7oboad67e7b7nhz2mouwsqwmbthshuy/tier-2-unlocked.svg"
        }
      ]
    },
    {
      "trait_type": "Collection Count",
      "value": "#{token_id} of {total_supply}"
    }
  ]
}
```
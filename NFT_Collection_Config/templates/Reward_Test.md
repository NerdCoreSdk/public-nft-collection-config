# NFT Metadata Form Default Values - Reward Token Test Configuration

## IPFS Resources
- **Images Directory CID**: `bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq`
- **Metadata Directory CID**: `bafybeieje6i36hqq43q2qef7zwva2lvrt2wamimjxsumxr6zqqn4yjfgkq`
- **Base Token URI**: `https://w3s.link/ipfs/bafybeieje6i36hqq43q2qef7zwva2lvrt2wamimjxsumxr6zqqn4yjfgkq/`
- **Storage Space**: Nerd_Stage (`did:key:z6MkrD9gUeV3KaiN5nmQ8TridGe8n7kthvTWien6MHiBrZi3`)

## Collection Information
```json
{
  "collectionName": "Test Reward Time Lock",
  "collectionSymbol": "REWARD_TEST",
  "description": "Reward Time Lock NFTs allow users to lock native ETH for specified periods and earn ETH rewards. Each NFT represents a time-locked position that generates rewards based on the lock duration and tier multiplier. Perfect for HODLing strategies and time-based reward systems.",
  "nftType": "RewardToken",
  "standard": "ERC-721",
  "externalUrl": "https://app.nerdcore.blockfabric.net/store/all",
  "totalSupply": 150
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
          "NFT_Count": 50,
          "value":"5-Minute REWARD Starter",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-starter-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-starter-unlocked.svg"
        },
        {
          "NFT_Count": 30,
          "value": "15-Minute REWARD Basic",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-basic-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-basic-unlocked.svg"
        },
        {
          "NFT_Count": 20,
          "value": "1-Hour REWARD Premium",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-premium-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-premium-unlocked.svg"
        },
        {
          "NFT_Count": 50,
          "value": "Instant REWARD Elite",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-elite-unlocked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-elite-unlocked.svg"
        }
      ]
    },
    {
      "trait_type": "Lock Duration",
      "tiers": [
        {
          "NFT_Count": 50,
          "value":"300",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-starter-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-starter-unlocked.svg"
        },
        {
          "NFT_Count": 30,
          "value": "900",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-basic-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-basic-unlocked.svg"
        },
        {
          "NFT_Count": 20,
          "value": "3600",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-premium-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-premium-unlocked.svg"
        },
        {
          "NFT_Count": 50,
          "value": "0",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-elite-unlocked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-elite-unlocked.svg"
        }
      ]
    },
    {
      "trait_type": "REWARD Amount in USD",
      "tiers": [
        {
          "NFT_Count": 50,
          "value":"$1.00",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-starter-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-starter-unlocked.svg"
        },
        {
          "NFT_Count": 30,
          "value": "$5.00",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-basic-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-basic-unlocked.svg"
        },
        {
          "NFT_Count": 20,
          "value": "$15.00",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-premium-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-premium-unlocked.svg"
        },
        {
          "NFT_Count": 50,
          "value": "$20.00",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-elite-unlocked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-elite-unlocked.svg"
        }
      ]
    },
    {
      "trait_type": "Reward Bonus",
      "tiers": [
        {
          "NFT_Count": 50,
          "value":"1.5 X",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-starter-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-starter-unlocked.svg"
        },
        {
          "NFT_Count": 30,
          "value": "1.75 X",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-basic-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-basic-unlocked.svg"
        },
        {
          "NFT_Count": 20,
          "value": "2.0 X",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-premium-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-premium-unlocked.svg"
        },
        {
          "NFT_Count": 50,
          "value": "1.0 X",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-elite-unlocked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-elite-unlocked.svg"
        }
      ]
    },
    {
      "trait_type": "Rarity",
      "tiers": [
        {
          "NFT_Count": 50,
          "value": "Common",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-starter-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-starter-unlocked.svg"
        },
        {
          "NFT_Count": 30,
          "value": "Uncommon",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-basic-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-basic-unlocked.svg"
        },
        {
          "NFT_Count": 20,
          "value": "Rare",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-premium-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-premium-unlocked.svg"
        },
        {
          "NFT_Count": 50,
          "value": "Epic",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-elite-unlocked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibwrw5xridzfqpcs6xwqa63vf43gh5kxy7lkbyu6wsbip5bp7sveq/reward-elite-unlocked.svg"
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
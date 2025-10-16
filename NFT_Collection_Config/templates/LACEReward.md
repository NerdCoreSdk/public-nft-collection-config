# NFT Metadata Form Default Values - Reward Token Test Configuration

## IPFS Resources
- **Images Directory CID**: `bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy`
- **Metadata Directory CID**: `bafybeiax6lznbqaeps4butppdw6cw56ya3qthjrjwi3tq5xf7o6szegvne`
- **Base Token URI**: `https://w3s.link/ipfs/bafybeiax6lznbqaeps4butppdw6cw56ya3qthjrjwi3tq5xf7o6szegvne/`
- **Storage Space**: Nerd_Stage (`did:key:z6MkrD9gUeV3KaiN5nmQ8TridGe8n7kthvTWien6MHiBrZi3`)

## Collection Information
```json
{
  "collectionName": "LACE Reward",
  "collectionSymbol": "LACE_REWARD",
  "description": "This is an Example NFT Collection using LACE because this is deployed on the NERD Testnet. It has 200 total NFTs, within 2 Tiers  each representing a unique reward tier and lock duration.",
  "nftType": "RewardToken",
  "standard": "ERC-721",
  "externalUrl": "https://app.nerdcore.blockfabric.net/store/all",
  "totalSupply": 300
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
      "trait_type": "Reward Tier",
      "tiers": [
        {
          "NFT_Count": 100,
          "value":"1-Minute HODL WITH Bonus Yield",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier1-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier1-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value":"5-Minute HODL WITH Bonus Yield",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier2-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier2-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value": "Instant REWARD",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier3-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier3-unlocked.svg"
        }
      ]
    },
    {
      "trait_type": "Lock Duration in Seconds",
      "tiers": [
        {
          "NFT_Count": 100,
          "value":"60",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier1-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier1-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value": "300",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier2-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier2-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value": "0",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier3-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier3-unlocked.svg"
        }
      ]
    },
    {
      "trait_type": "Reward Amount",
      "tiers": [
        {
          "NFT_Count": 100,
          "value":"$50.00",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier1-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier1-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value": "$100.00",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier2-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier2-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value": "$50.00",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier3-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier3-unlocked.svg"
        }
      ]
    },
    {
      "trait_type": "Reward Bonus",
      "tiers": [
        {
          "NFT_Count": 100,
          "value":"1.5 X",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier1-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier1-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value": "2.0 X",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier2-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier2-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value": "1.0 X",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier3-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier3-unlocked.svg"
        }
      ]
    },
    {
      "trait_type": "Total Yield",
      "tiers": [
        {
          "NFT_Count": 100,
          "value":"75",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier1-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier1-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value": "200",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier2-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier2-unlocked.svg"
        },
        {
          "NFT_Count": 100,
          "value": "50",
          "override_primaryImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier3-locked.svg",
          "override_activatedImage": "https://w3s.link/ipfs/bafybeibnwscm2t4ngf4q473qnufglo6azkjmdvyzmpljdifgay67tvupoy/lace-reward-tier3-unlocked.svg"
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
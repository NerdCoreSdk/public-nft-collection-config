# NFT Metadata Form Default Values - Element Heirloom Voucher NFT Configuration

## IPFS Resources
- **Images Directory CID**: `bafybeibq2yfk7etp6jjzeerft4gqs2f54wl7yk2e6noxieteayea3r2bj4`
- **Metadata Directory CID**: `bafybeiezkhcanmjdzffv2hpcauu5gsgda5w3kvisxfokamuwvkmlqdzkwq`
- **Base Token URI**: `https://w3s.link/ipfs/bafybeiezkhcanmjdzffv2hpcauu5gsgda5w3kvisxfokamuwvkmlqdzkwq/`
- **Storage Space**: Element United
- **Storage Space DID**: `did:key:z6MkwbVN5ByVL4r3rj6Qvj6iycbU2ccQhs5d8K8qM4RFChrs`

## Collection Information
```json
{
  "collectionName": "Element Heirloom Voucher NFT",
  "collectionSymbol": "EHV-RT",
  "description": "The Element Heirloom NFT is a digital certificate that allows you to turn a cherished heirloom into a unique and permanent NFT complete with photos, videos, audio recordings, and stories. Preserve any item's legacy securely on the blockchain. When activated, the wallet will receive double the price of the NFT in ELMT ($98 worth).",
  "responsibleParty": "ALI SABADO",
  "nftType": "RewardToken",
  "standard": "ERC-721",
  "externalUrl": "https://app.elementunited.com/store",
  "totalSupply": 500
}
```

## Token Configuration
```json
{
  "rewardTokenType": "ELMT-P",
  "lockedTokenType": "ELMT-P",
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
      "nftCount": 500,
      "lockDuration": 0,
      "rewardAmount": 200000,
      "rewardBonusType": "Fixed",
      "rewardBonusAmount": 0,
      "primaryImage": "https://bafybeibq2yfk7etp6jjzeerft4gqs2f54wl7yk2e6noxieteayea3r2bj4.ipfs.w3s.link/HeirloomNFTVoucher_Sep2025.jpg",
      "activatedImage": "https://bafybeibq2yfk7etp6jjzeerft4gqs2f54wl7yk2e6noxieteayea3r2bj4.ipfs.w3s.link/GoldHeirloomNFT_Ring%20Small_Sep2025.gif",
      "attributeOverrides": [
        {
          "trait_type": "Creation Link",
          "value": "https://forms.gle/KJR6yAHMWrioaJwd6"
        },
        {
          "trait_type": "Creation Guide",
          "value": "https://elementunited.notion.site/Creating-Your-Heirloom-NFT-Step-by-Step-Walkthrough-28c3022b2ffc80c9a446e4a946d51571"
        }
      ]
    }
  ]
}
```

## Global Attributes (Applied to all NFTs)
```json
{
  "attributes": []
}
```

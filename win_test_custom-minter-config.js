module.exports = {
    network_environment: "WIN_DEV",
    batchSize: 1000, // Can be adjusted based on gas limits
    voucherBatchSize: 50, // Maximum NFTs per voucher
    
    nftMintControllerAddress: "0x644102AfC0081c7CeDa01F2d98E671717Aa54b64",
    nftMintVoucherAddress: "0xF5E0bC0fa749754a22CB2fb7FE01602a561b619B",
    coreAPI: "https://api.dev.connectunited.com/",
    chainID: 2666328,
    admins: [
        { address: "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F" }, // Manual Deployment Address
        { address: "0xAdBee901963233232bd6C93d0F6b0C3e9c5B499C" }, // Disbursement Minting Address
    ],
    collections: [
    {
      "address": "0x4723dA3301d51682bEd89F10CF49a230E14dF5bf",
      "name": "WIN DEV Test NFT Collection",
      "symbol": "WDTNFT",
      "baseURI": "https://bafybeienfi3u6c6dlovmustmvztdjdqvrahjgw7ichblr67jthodtez65y.ipfs.w3s.link/",
      "maxSupply": 500
    },
    {
      "address": "0x100f9D711850f058ABbac216A1c76b9B2Df7824d",
      "name": "WIN DEV Test NFT Collection",
      "symbol": "WDTNFT",
      "baseURI": "https://bafybeienfi3u6c6dlovmustmvztdjdqvrahjgw7ichblr67jthodtez65y.ipfs.w3s.link/",
      "maxSupply": 500
    },
    {
      "address": "0xAA346A5fa0860132625Ed2E6F88D0C9A964ef7Ec",
      "name": "Win-Testnet-Boost-1-Day",
      "symbol": "WTDNFT",
      "maxSupply": 500
    },
    {
      "address": "0x3a589074BaA9B3E368064A7Ca6ABc87f2eD749fb",
      "name": "WIN Legendary Node NFT Boost (Collection 1)",
      "symbol": "WINNBL1",
      "maxSupply": 5000
    },
  ]
};
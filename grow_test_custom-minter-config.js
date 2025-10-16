module.exports = {
    network_environment: "GROW_STAGE",
    batchSize: 1000, // Can be adjusted based on gas limits
    voucherBatchSize: 50, // Maximum NFTs per voucher
    
    nftMintControllerAddress: "0xAA346A5fa0860132625Ed2E6F88D0C9A964ef7Ec",
    nftMintVoucherAddress: "0xc84889E7F0846742350fB6C047Eaf3Dd20d909Cf",
    coreAPI: "https://api.stage.growblockchain.net/",
    chainID: 71519,
    admins: [
        { address: "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F" }, // Manual Deployment Address
        { address: "0xE228BA811cBF3Dc22Af643ED039511D4A018286b" }, // Disbursement Minting Address
    ],
    collections: [
    {
      "address": "0x23030A74ebdc574A73738E842f2002135Df9D1bE",
      "name": "Grow Stage Test NFT Collection",
      "symbol": "GSTNFT",
      "baseURI": "https://bafybeienfi3u6c6dlovmustmvztdjdqvrahjgw7ichblr67jthodtez65y.ipfs.w3s.link/",
      "maxSupply": 500
    }
  ]
};
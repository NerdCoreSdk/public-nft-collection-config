// This should not get added to any of the branches

module.exports = {
    network_environment: "GALVAN_TESTNET", // Change to "GALVAN_MAINNET" for production
    batchSize: 1000, // Can be adjusted based on gas limits
    voucherBatchSize: 50, // Maximum NFTs per voucher
    
    nftMintControllerAddress: "",
    nftMintVoucherAddress: "",
    coreAPI: "https://api.stage.galvan.health/",
    chainId: 80,
    admins: [   
        { address: "0x58f1a71C79FB6685a75Ada2Cd5717Bb2Fb70515F" }, // Manual Deployment Address     
        { address: "0x6131Abd6664E87B6C38B1f1E92A5AF4d0812c993" }, // Disbursement Minting Address
    ],
    collections: [
        {
            address: "",
            name: "Test Galvan Stage NFT Collection",
            symbol: "TSTNFTGS",
            baseURI: "https://bafybeienfi3u6c6dlovmustmvztdjdqvrahjgw7ichblr67jthodtez65y.ipfs.w3s.link/",
            maxSupply: 500
        },
    ]
};
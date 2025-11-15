module.exports = {
  "googleSheetsId": "12lXIHk-rhD5Lo3iEMAsumKDDLG3VTEmgeqilSXVQNPw",
  "brands": [
    {
      "brandName": "Test Brand",
      "accounts": [
        {
          "account": "0x2201374e803Ec5Ca1dCB6550673669b42D9A5B70",
          "roles": [
            "DEFAULT_ADMIN_ROLE"
          ]
        },
        {
          "account": "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
          "roles": [
            "MINTER_ROLE"
          ]
        },
        {
          "account": "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
          "roles": [
            "MINTER_ROLE"
          ]
        }
      ],
      "rewardTokenAddress": "0xAAF62976ee828b91f06615f2007f995d2400699c",
      "rewardTokenSymbol": "TEST",
      "rewardTokenDecimals": 18,
      "collections": [
        {
          "name": "Test HODL Reward NFT 1",
          "tiers": [
            {
              "name": "Tier 1",
              "lockAmountUSD": 1000,
              "baseRewardAmount": 0,
              "lockDurationSeconds": 300
            },
            {
              "name": "Tier 2",
              "lockAmountUSD": 3000,
              "baseRewardAmount": 0,
              "lockDurationSeconds": 600
            },
            {
              "name": "Tier 3",
              "lockAmountUSD": 5000,
              "baseRewardAmount": 0,
              "lockDurationSeconds": 86400
            }
          ],
          "symbol": "tHODL-1",
          "address": "0x753E259Db0C5341a6aa143fc30886645E32e032C",
          "baseURI": "https://test-metadata.example.com/hodl1/",
          "maxSupply": 50,
          "royaltiesPercentage": 500,
          "royaltiesReceiver": "0x2201374e803Ec5Ca1dCB6550673669b42D9A5B70",
          "rewardTokenAddress": "0xAAF62976ee828b91f06615f2007f995d2400699c",
          "rewardTokenDecimals": 18,
          "initialRewardPoolSize": "0"
        },
        {
          "name": "Test HODL Reward Unlimited",
          "tiers": [
            {
              "name": "Tier 1",
              "lockAmountUSD": 1000,
              "baseRewardAmount": 0,
              "lockDurationSeconds": 300
            },
            {
              "name": "Tier 2",
              "lockAmountUSD": 3000,
              "baseRewardAmount": 0,
              "lockDurationSeconds": 600
            },
            {
              "name": "Tier 3",
              "lockAmountUSD": 5000,
              "baseRewardAmount": 0,
              "lockDurationSeconds": 86400
            }
          ],
          "symbol": "tHODL-UNL",
          "address": "0x9726F3a5Afc81bA49D0EA359a553c03dAbdF4662",
          "baseURI": "https://test-metadata.example.com/hodl1/",
          "maxSupply": 0,
          "royaltiesPercentage": 500,
          "royaltiesReceiver": "0x2201374e803Ec5Ca1dCB6550673669b42D9A5B70",
          "rewardTokenAddress": "0xAAF62976ee828b91f06615f2007f995d2400699c",
          "rewardTokenDecimals": 18,
          "initialRewardPoolSize": "0"
        }
      ]
    }
  ]
};

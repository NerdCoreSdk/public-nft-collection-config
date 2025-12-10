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
          "name": "Test HODL Reward Unlimited",
          "tiers": [
            {
              "name": "Tier 1",
              "baseRewardAmount": 0,
              "lockDurationSeconds": 300
            },
            {
              "name": "Tier 2",
              "baseRewardAmount": 0,
              "lockDurationSeconds": 600
            },
            {
              "name": "Tier 3",
              "baseRewardAmount": 0,
              "lockDurationSeconds": 86400
            }
          ],
          "symbol": "tHODL-UNL",
          "address": "0xB38D7fA76591DfB744f7E07d8eA5114F16b03B04",
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

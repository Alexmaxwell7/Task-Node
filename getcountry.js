const fs=require('fs');
let inputJson = {
    "countryIsoAlpha2": "CN",
    "burdenResultsRange": "A10:C20",
    "countryLabelName": "China",
    "isSupported": false,
    "paramValues": [
     {
      "name": "currency",
      "defaultValue": "CNY",
      "description": "Select Currency",
      "type": "string",
      "rowNumber": 1,
      "values": [
       "CNY",
       "USD"
      ]
     },
     {
      "name": "salary",
      "rowNumber": 2,
      "defaultValue": 65000,
      "description": "Salary",
      "values": 65000,
      "type": "number"
     },
     {
      "name": "salarybasis",
      "defaultValue": "Monthly",
      "description": "Monthly/Annual",
      "type": "string",
      "rowNumber": 3,
      "values": [
       "Monthly",
       "Annual"
      ]
     },
     {
      "name": "icp",
      "defaultValue": "VGChina",
      "description": "ICP",
      "type": "string",
      "rowNumber": 4,
      "values": [
       "Song Hong",
       "VGChina",
       "TKing"
      ]
     },
     {
      "name": "nationality",
      "description": "Nationality",
      "defaultValue": "Localnational",
      "type": "string",
      "rowNumber": 5,
      "values": [
       "Localnational",
       "Expat",
       "Skip"
      ]
     },
     {
      "name": "province",
      "description": "Province",
      "defaultValue": "ShangHai",
      "type": "string",
      "rowNumber": 6,
      "values": [
       "Beijing",
       "Chengdu",
       "Dongguan",
       "Hangzhou",
       "Suzhou - Urban Area",
       "ShangHai",
       "Shenzhen",
       "Ningbo",
       "Nantong",
       "FuZhou",
       "Chongqing",
       "Jinhua",
       "Zibo"
      ]
     }
    ]
   }

   fs.writeFile("data.json", JSON.stringify(inputJson), function (err) {
    if (err) {
        throw err;
    }
    console.log("json file created")
})

//    fs.writeFileSync("country.json", JSON.stringify(inputJson), 'utf8');
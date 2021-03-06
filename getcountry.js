var obj = {
  countryIsoAlpha2: "CN",
  burdenResultsRange: "A10:C20",
  countryLabelName: "China",
  isSupported: false,
  paramValues: [
    {
      name: "currency",
      defaultValue: "CNY",
      description: "Select Currency",
      type: "string",
      rowNumber: 1,
      values: ["CNY", "USD"],
    },
    {
      name: "salary",
      rowNumber: 2,
      defaultValue: 65000,
      description: "Salary",
      values: 65000,
      type: "number",
    },
    {
      name: "salarybasis",
      defaultValue: "Monthly",
      description: "Monthly/Annual",
      type: "string",
      rowNumber: 3,
      values: ["Monthly", "Annual"],
    },
    {
      name: "icp",
      defaultValue: "VGChina",
      description: "ICP",
      type: "string",
      rowNumber: 4,
      values: ["Song Hong", "VGChina", "TKing"],
    },
    {
      name: "nationality",
      description: "Nationality",
      defaultValue: "Localnational",
      type: "string",
      rowNumber: 5,
      values: ["Localnational", "Expat", "Skip"],
    },
    {
      name: "province",
      description: "Province",
      defaultValue: "ShangHai",
      type: "string",
      rowNumber: 6,
      values: [
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
        "Zibo",
      ],
    },
  ],
};
exports.getcountry = (req, res) => {
  var data = [obj];
  try {
    var result_data = data.map((item) => {
      let constants = [
        {
          name: item.paramValues[1].name,
          description: item.paramValues[1].description,
          value: item.paramValues[1].values,
          type: item.paramValues[1].type,
        },
      ];
      let parameters = [];
      var i,
        i,
        j,
        x = "";
      for (i in obj.paramValues) {
        let count = 0;
        for (j in obj.paramValues[i].values) {
          count++;
          x += JSON.stringify({
            name: obj.paramValues[i].name,
            description: obj.paramValues[i].description,
            order: count,
            value: obj.paramValues[i].values[j],
          });
        }
      }

      let final_data = {
        countryIsoAlpha2: item.countryIsoAlpha2,
        currencyCode: item.paramValues[0].defaultValue,
        constants,
        parameters,
        options: [x],
      };
      return final_data;
    });
    console.log(result_data);
    res.status(201).json({ result_data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


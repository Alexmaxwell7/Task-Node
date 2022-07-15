const express = require('express');
const mongoose = require('mongoose');
const app= express();
const url = 'mongodb://localhost/ProductDB'
const cors = require("cors");
const bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on("open",()=>{
    console.log("Server Connected")
})
app.use(express.json())
//router
app.use('/product',require('./router/product'));
app.listen(5000,()=>{
    console.log("server Started")
})
// app.use('/country',require('./getcountry'));
//getcountry code

// const json_data=require('./country.json');

// let data=[json_data];

// let result_data=data.map((item)=>{
//     let constants=[{name:item.paramValues[1].name,description:item.paramValues[1].description,  value:item.paramValues[1].values,type:item.paramValues[1].type}];
//     let parameters=[];
//     let options=[
//     {
//         name:item.paramValues[0].name,
//         description:item.paramValues[0].description,
//         order:item.paramValues[0].rowNumber,
//         value:item.paramValues[0].values[0]
//     },
//     {
//         name:item.paramValues[0].name,
//         description:item.paramValues[0].description,
//         order:item.paramValues[0].rowNumber+1,
//         value:item.paramValues[0].values[1]
//     },
//     {
//         name:item.paramValues[2].name,
//         description:item.paramValues[2].description,
//         order:item.paramValues[2].rowNumber,
//         value:item.paramValues[2].values[0]
//     },
//     {
//         name:item.paramValues[2].name,
//         description:item.paramValues[2].description,
//         order:item.paramValues[2].rowNumber+1,
//         value:item.paramValues[2].values[1]
//     },
//     {
//         name:item.paramValues[3].name,
//         description:item.paramValues[3].description,
//         order:item.paramValues[3].rowNumber,
//         value:item.paramValues[3].values[0]
//     },
//     {
//         name:item.paramValues[3].name,
//         description:item.paramValues[3].description,
//         order:item.paramValues[3].rowNumber,
//         value:item.paramValues[3].values[1]
//     },
//     {
//         name:item.paramValues[3].name,
//         description:item.paramValues[3].description,
//         order:item.paramValues[3].rowNumber,
//         value:item.paramValues[3].values[2]
//     },
//     {
//         name:item.paramValues[4].name,
//         description:item.paramValues[4].description,
//         order:item.paramValues[4].rowNumber,
//         value:item.paramValues[4].values[0]
//     },
//     {
//         name:item.paramValues[4].name,
//         description:item.paramValues[4].description,
//         order:item.paramValues[4].rowNumber,
//         value:item.paramValues[4].values[1]
//     },
//     {
//         name:item.paramValues[4].name,
//         description:item.paramValues[4].description,
//         order:item.paramValues[4].rowNumber,
//         value:item.paramValues[4].values[2]
//     },
//     {
//         name:item.paramValues[5].name,
//         description:item.paramValues[5].description,
//         order:item.paramValues[5].rowNumber,
//         value:item.paramValues[5].values[0]
//     },
//     {
//         name:item.paramValues[5].name,
//         description:item.paramValues[5].description,
//         order:item.paramValues[5].rowNumber,
//         value:item.paramValues[5].values[1]
//     },
//     {
//         name:item.paramValues[5].name,
//         description:item.paramValues[5].description,
//         order:item.paramValues[5].rowNumber,
//         value:item.paramValues[5].values[2]
//     },
//     {
//         name:item.paramValues[5].name,
//         description:item.paramValues[5].description,
//         order:item.paramValues[5].rowNumber,
//         value:item.paramValues[5].values[3]
//     },
//     {
//         name:item.paramValues[5].name,
//         description:item.paramValues[5].description,
//         order:item.paramValues[5].rowNumber,
//         value:item.paramValues[5].values[4]
//     },
//     {
//         name:item.paramValues[5].name,
//         description:item.paramValues[5].description,
//         order:item.paramValues[5].rowNumber,
//         value:item.paramValues[5].values[5]
//     },
//     {
//         name:item.paramValues[5].name,
//         description:item.paramValues[5].description,
//         order:item.paramValues[5].rowNumber,
//         value:item.paramValues[5].values[6]
//     },
//     {
//         name:item.paramValues[5].name,
//         description:item.paramValues[5].description,
//         order:item.paramValues[5].rowNumber,
//         value:item.paramValues[5].values[7]
//     },
//     {
//         name:item.paramValues[5].name,
//         description:item.paramValues[5].description,
//         order:item.paramValues[5].rowNumber,
//         value:item.paramValues[5].values[8]
//     },
//     {
//         name:item.paramValues[5].name,
//         description:item.paramValues[5].description,
//         order:item.paramValues[5].rowNumber,
//         value:item.paramValues[5].values[9]
//     },
//     {
//         name:item.paramValues[5].name,
//         description:item.paramValues[5].description,
//         order:item.paramValues[5].rowNumber,
//         value:item.paramValues[5].values[10]
//     },
//     {
//         name:item.paramValues[5].name,
//         description:item.paramValues[5].description,
//         order:item.paramValues[5].rowNumber,
//         value:item.paramValues[5].values[11]
//     },
//     {
//         name:item.paramValues[5].name,
//         description:item.paramValues[5].description,
//         order:item.paramValues[5].rowNumber,
//         value:item.paramValues[5].values[12]
//     },
//     ];
//     let final_data={countryIsoAlpha2:item.countryIsoAlpha2,currencyCode:item.paramValues[0].defaultValue,constants,parameters,options}
//     return final_data;
// })
// console.log("final",result_data);


module.exports = app;


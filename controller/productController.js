const Proudct = require('../models/product');
const mongoose = require('mongoose');
const { Parser } = require("json2csv");
const fs = require("fs");
exports.creatproduct = async (req, res) => {
    const product = req.body;
    const newproduct = new Proudct(product);
    try {
        await newproduct.save();
        res.status(201).json({ msg: 'success', newproduct });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getproduct = async (req, res) => {
    try {
        const product = await Proudct.find({ approved: true });
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


exports.updateproduct = async (req, res) => {
    var productToUpdate = req.params.id;
    var data = req.body;

    Proudct.update({ _id: mongoose.Types.ObjectId(productToUpdate) }, data, (err, result) => {
        res.send(
            (err === null) ? { msg: 'sucess', data } : { msg: err }
        );
    });
}

exports.deleteproduct = async (req, res) => {
    try {
        await Proudct.deleteOne({ _id: req.params.id });
        res.status(201).json("product deleted Successfully");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

var data = [
    {
        "name": "abc",
        "city": "mdu",
    },
    {
        "name": "xyz",
        "city": "try"
    }
]
const jsoncsv = new Parser();
const csv = jsoncsv.parse(data);
fs.writeFile("data.csv", csv, function (err) {
    if (err) {
        throw err;
    }
    console.log("csv file created")
})

exports.getcsv = async (req, res) => {
    try {
        const jsoncsv = new Parser();
        const csv = jsoncsv.parse(data);
        res.attachment("data.csv");
        res.status(200).send(csv);
     }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

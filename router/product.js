var express = require('express')
var router = express.Router()
const ProductController = require('../controller/productController')
const countryController=require('../getcountry');




router.post('/createproduct',ProductController.creatproduct);
router.get('/getproduct',ProductController.getproduct);
router.put('/updateproduct/:id',ProductController.updateproduct);
router.delete('/deleteproduct/:id',ProductController.deleteproduct);
router.get('/getcsv',ProductController.getcsv);
router.get('/getcountry',countryController.getcountry);



module.exports = router

var express = require('express')
var router = express.Router()
const ProductController = require('../controller/productController')




router.post('/createproduct',ProductController.creatproduct);
router.get('/getproduct',ProductController.getproduct);
router.put('/updateproduct/:id',ProductController.updateproduct);
router.delete('/deleteproduct/:id',ProductController.deleteproduct);
router.get('/getcsv',ProductController.getcsv);



module.exports = router

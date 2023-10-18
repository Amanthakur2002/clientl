const express = require('express');
const productsRouter = express.Router();
const { getProducts, getProductsOne } = require('../../controller/products/Products');



productsRouter.get('/getProducts', getProducts)
productsRouter.get('/getProductsOne', getProductsOne)

module.exports=productsRouter;

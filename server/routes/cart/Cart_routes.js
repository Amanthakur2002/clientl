const express = require('express');
const cartRouter = express.Router();
const { AddtoCart } = require('../../controller/cart/Cart');

cartRouter.post('/addproduct',AddtoCart)

module.exports=cartRouter;
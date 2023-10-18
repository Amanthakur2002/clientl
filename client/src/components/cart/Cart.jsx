import React, { useState, useEffect } from 'react'
import './cart.css';
import { Divider } from '@mui/material'
import axios from "axios"
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  // state for products 
  let [products, getProducts] = useState([])

  const { id } = useParams("")  //getting product id from slide.js
  const params = {
    id: id
  };
  // console.log("params", params)
  console.log("id", id)
  console.log("params.id",params.id)

  // =============getting product table data ===================
  async function getData() {
    let response = await axios.get(`http://localhost:8050/api/customer/getProductsOne`, {
      params,
      withCredentials: true,
      credentials: "include"
    }
    )
    products = response.data[0]
    getProducts(products)
    // console.log("responseData",response.data)
    console.log("products", products)

  }
  useEffect(() => {
    getData()
  }, [id])
  //  ===================== getting product table data complete ===========

const navigate = useNavigate();

   const handleClickBuy = () => {
    navigate('/buynow')
   }

  //  const handleClickCart = () => {
  //   Swal.fire('You have added product to the cart !', 'success')
  //   console.log("params",params)
  //  }

  async function handleClickCart(){
          
    const config = {
        headers: {
            'content-type': 'application/json',
        }, 
        withCredentials: true,
        credentials:"include"
    }  
    console.log("here")
    let response = await axios.post(`http://localhost:8050/api/customer/addproduct?product_id=${params.id}`,config).then((response) => {
      console.log("params2.id",params.id)
            console.log(response)
        })
    Swal.fire('You have added product to the cart !', 'success')
    // console.log(response)
  }


  
  return (
    <div className='cart_section'>
      <div className="cart_container">
        <div className="left_cart">
           <img src={products.product_image} alt="cart_img" />  {/*here is the bug resolve kr rha*/}
          <div className="cart_btn">
            <button className='cart_btn1'onClick={handleClickCart} >Add to cart</button>
            <button className='cart_btn2' onClick={handleClickBuy}>Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>{products.item_name}</h3>
          <h4>{products.company_name} </h4>
          <Divider />
          <p className='mrp'>M.R.P. : ${products.price} </p>
          <p>Deal of the day : <span style={{ color: "#B12704" }}>$614</span></p>
          <p>You Save : :<span style={{ color: "#B12704" }}>$300 (50%)</span></p>

          <div className="discount_box">
            <h5>Discount : <span style={{ color: "#111" }}>Extra 10% off</span></h5>
            <h4>FREE Delivery : <span style={{ color: '#111', fontWeight: "600" }}> Oct18 - 21 </span>Details</h4>
            <p>fastest delevery: <span style={{ color: '#111', fontWeight: "600" }}>Tomorrow 11 AM</span></p>
          </div>
          <p className='description'>About the item : <span style={{ color: "#565959", fontSize: 17, fontWeight: 500, letterSpacing: "0.4px" }}> {products.description}. </span></p>
        </div>
      </div>
    </div>
  )
}

export default Cart
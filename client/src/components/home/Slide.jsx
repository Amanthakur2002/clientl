import React, { useState, useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "@mui/material"
// import { products } from './productdata';
import "../home/slide.css"
import axios from "axios"
import {NavLink} from "react-router-dom";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Slide = ({ title }) => {

  // state for products 
  const [products, getProducts] = useState([])

  // =============getting product table data ===================
  async function getData() {
    let response = await axios.get('http://localhost:8050/api/customer/getProducts', {
      withCredentials: true,
      credentials: "include"
    }
    )
    getProducts(response.data)
    console.log("products",response.data)
  }
  useEffect(() => {
    getData()
  }, [])
  //  ===================== getting product table data complete ===========



  return (
    <div className="products_section">
      <div className="products_deal">
        <h3>{title}</h3>
        <button className='view_btn'>View All</button>
      </div>

      <Divider />

      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {
          products.map((e) => {
            return (
              <NavLink to={`getproductsone/${e.product_id}`}>
                <div className="products_items" >
                <div className="product_img">
                  <img src={e.product_image} alt="productitem" />
                </div>
                <p className='products_name'>{e.item_name}</p>
                <p className='products_offer'>{e.price}</p>
                <p className='products_explore'>{e.company_name}</p>
              </div>
              </NavLink>
            )
          })
        }
      </Carousel >
    </div>
  )
}

export default Slide
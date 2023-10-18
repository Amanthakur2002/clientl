import React from 'react';
import './buynow.css';
import { Divider } from '@mui/material'
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';

const Buynow = () => {
    return (
        <div className='buynow_section'>
            <div className="buynow_container">
                <div className="left_buy">
                    <h1>Shopping Cart</h1>
                    <p>Select All items</p>
                    <span > Price</span>
                    <Divider />
                    <div className="item_containert">
                        <img src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" alt="cart_img" />
                        <div className="item_details">
                            <h3> TITLE : Lorem, ipsum dolor sit amet consectetur adipisicing </h3>
                            <h3>Smart watches</h3>
                            <h3 className='diffrentprice'>$4000</h3>
                            <p className='unusuall'>Usually dispatched in 8 days</p>
                            <p>Eligible for free shipping</p>
                            {/* <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" /> */}
<Option />
                        </div>
                        <div className="item_price">
                          <h3 className='item_price'>  $4000  </h3>
                        </div>
                        
                    </div>
                    <Divider/>
                   

                    <Subtotal/>
                </div>
                <div className="right_buy">
<Right />
                </div>
            </div>
        </div>
    )
}

export default Buynow
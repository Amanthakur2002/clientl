import React from 'react'
import './newnav.css'

const Newnav = () => {
  return (
   <div className="new_nav">
     <div className='nav_data'>
        <div className="left_data">
            <p>All</p>
            <p>Mobile</p>
            <p>Bestseller</p>
            <p>Fashion</p>
            <p>Customer Service</p>
            <p>Electronics</p>
            <p>Today's Deals</p>
            {/* <p>Prime</p> */}
            {/* <p>Amazon Pay</p> */}
        </div>
        <div className="right_data">
{/* <img src="nav.jpg" alt='image' /> */}
        </div>
        </div>
   </div>
  )
}

export default Newnav
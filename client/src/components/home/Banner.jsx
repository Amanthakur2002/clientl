import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "../home/banner.css"

const data = [
    // "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
    // " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
    // "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    // "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
    "ShoePoster.f27a1e157c593951c055.png",
    "gogglePoster.7abc5f9df07a744799f8.png",
    "JacketPoster.6752e9b91a16507477c2.png",
    "shirtPoster.3ed2fbc5e0d5e86b194c.png"


]

const Banner = () => {
  return (
    <>
    <Carousel className='carasousel'
    autoPlay={true}
    animation='slide'
    indicators={false}
    navButtonsAlwaysVisible={true}
    cycleNavigation={true}
    navButtonsWrapperProps={
        {
            style:{
                // backgroundColor: "#fff",
                   color:"#494949",
                   borderRadius:0,
                   marginTop: 90,
                //    height:"104px"
                   height:"300px"
                    }
        }
    }
    >
{
    data.map((image,i)=>{
        return(
            <img src={image} alt="images" className='banner_img'/>
        )
    })
}
    </Carousel>
    </>
  )
}

export default Banner
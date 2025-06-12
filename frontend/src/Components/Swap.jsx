import React from 'react'
import "slick-carousel/slick/slick.css"
//import "slick-carousel/slick/slick/slick-theme.css"
import slider from 'react-slick';
import Slider from 'react-slick/lib/slider';

const Swap = () => {

    const setting={
        dots:true,
        Infinite:true,
        speed:500,
       
      
       

    };

  return (
    <div style={{
        background:'#4CAF50',
        color:'white',
        borderTopLeftRadius:'20px',
        borderTopRightRadius:'20px',
        padding:'20px',
        marginTop:'20px'
    }} >
        <Slider {...setting} >
            <div className="col">
                <h4>hq</h4>
                <p>fdsdfsfgsa</p>
                <p>sdfsrgrdg</p>
            </div>
            <div className="col">
                <h4>hq</h4>
                <p>fdsdfsfgsa</p>
                <p>sdfsrgrdg</p>
            </div>
            <div className="col">
                <h4>hq</h4>
                <p>fdsdfsfgsa</p>
                <p>sdfsrgrdg</p>
            </div>
        </Slider>
        
    </div>
  )
}

export default Swap
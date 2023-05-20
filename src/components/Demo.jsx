import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


const Demo = () => {

    const Customwrapper = styled.div`
        height:500px;
        .items{
            background-color:red;
            flex: 1 1 30%;
            height:200px;
        }
    `

    const Settings={
        dots:true,
        infinite:false,
        speed:500,
        slidesToShow:4,
        slidesToScroll:4,
        initialSlide:0
    }

    return (
    <Customwrapper>
        <Slider {...Settings}>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>
        <div className='items'>
            one
        </div>

        </Slider>
    </Customwrapper>
  )
}

export default Demo
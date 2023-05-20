import React from 'react'
import location from '../assets/images/location3.png'


const Areacountingtiles = ({villageName,noOfStudent,fetchArea}) => {

    const getArea=()=>{
      fetchArea(villageName);
    }

  return (
    <section className='list' onClick={getArea}>
        <div className='image_container'>
            <img src={location} alt="area counting image"/>
            <span>{noOfStudent}</span>
        </div>
        <span>{villageName}</span>                        
    </section>
  )
}

export default Areacountingtiles
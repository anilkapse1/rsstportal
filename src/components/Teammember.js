import React from 'react'
import boy from '../assets/images/male.png'
import girl from '../assets/images/female.png'

const Teammember = (props) => {
    const {name,middlename,surname,resident,position,contact,gender} = props;
  return (
    <div className='card'>
        <div className='image_container'>
          <div className='card_image'>
          {gender==="male"?<img src={boy} alt="student image"/>:<img src={girl} alt="girl student profile pic"/>}
          </div>
        </div>
        <div className='card_details'>
        <h4>{name} {middlename} {surname} - {position}</h4>
        <h5>{resident}</h5>
        <h6>{contact}</h6>
        </div>
    </div>  
)
}

export default Teammember
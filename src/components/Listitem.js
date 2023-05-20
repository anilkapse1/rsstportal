import React from 'react'
import boy from '../assets/images/male.png'
import girl from '../assets/images/female.png'
import toper from '../assets/images/topper.png'



const Listitem = ({data,sr}) => {
  console.log(data);

  const {id,name,middle_name,surname,gender,area,stream,std,topper,university,achievement_details,achievement_image,college_name,profile_image,academic_year} = data;
  return (
        <>
            <tr>
                <td>{sr}</td>
                <td>{name} {middle_name} {surname}</td>
                <td>{std} {stream}</td>
                <td>{academic_year}</td>
            </tr>
        </>
  )
}

export default Listitem
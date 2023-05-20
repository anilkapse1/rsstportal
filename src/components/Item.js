import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import boy from '../assets/images/male.png'
import girl from '../assets/images/female.png'
import toper from '../assets/images/topper.png'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from 'react-router-dom';



const Item = ({data}) => {
  console.log(data);
  const {id,name,middle_name,surname,gender,area,stream,std,semester,topper,university,achievement_details,achievement_image,college_name,profile_image} = data;
  let first_letter=name.substr(0,1);

  const navigate = useNavigate();
  const redirectSingle=()=>{
    navigate(`/studentprofile/${id}`);
    window.scrollTo(0,0);

  }

  return (
     <section onClick={redirectSingle}>
        <span className='topper'>
          {topper && <img src={toper} alt="demo"/>}
        </span>  
        
          <div className='front'>
            <h1>{first_letter}</h1>
            <div className='front_data'>
                <p>Hi, I'm {name} {middle_name} {surname} from {area}, pursuing {semester} {std} {stream} from {college_name} college from {university} university.</p>
            </div>
        </div>
        <div className='back'>
            <div className='profile_image'>
                {gender==="boy"?<img src={boy} alt="student image"/>:<img src={girl} alt="girl student profile pic"/>}
            </div>
            <div className='profile_data'>
            <span>{name} {surname}</span><span>{std}</span><span>{area}</span>
            </div>
        </div>
    </section>

  )
}

export default Item
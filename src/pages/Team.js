import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import leftbg from "../assets/images/left-bg.png";
import Teammember from '../components/Teammember';
import Herosmall from '../components/Herosmall';





const Team = () => {
  const Teamwrapper = styled.div`
    position: relative;
    background-color: white;
    background-image: url(${leftbg});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top left;
  h3{
     color:${({theme})=>theme.colors.headeractive};
     font-family:inherit;
     margin-bottom:20px;
     margin-top:0px!important;
   }
   span{
        color:${({theme})=>theme.colors.text7};
        position: relative;
        font-size:14px;
  }

  .team_member{
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    gap:20px;
    margin-top: 20px;
    .card{
      flex:0 1 300px;
      padding:16px;
      background:transparent;
      align-items: center;
      border:none;
      .image_container{
          width:200px;
          height:200px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          border: 1px solid ${({theme})=>theme.colors.headeractive};

        .card_image{
          border-radius:50%;
          overflow:hidden;
          width:60%;
          position:relative;
          width:150px;
          height:150px;
      }

      }
      .card_details{
        margin-top:20px;
        h4{
          font-size: 16px;
          margin-top:12px;
        }
        h5{
          font-size:14px;
        }
        h6{
          font-size: 18px;
          font-weight: 300;
          letter-spacing: 2px;
        }
      }
    }
  }



  `


  const [team, setTeam]= useState([]);

  useEffect(()=>{
    const fetchData= async()=>{
      try{
        const response = await fetch('./data/teammember.json');
        const data = await response.json();
        setTeam(data.teams)
      }catch(err){
        console.error(err);
      }
    }

    fetchData();
  },[])
  
  console.log('team page');
  console.log(team);
  
  return (
    <>
    <Herosmall 
      pageName="team"
      areaTotalStudent={team.length}
      field="education wing members"
    />
    <Teamwrapper>
      <Container className='announcementwrapper common_margin'>
        <Typography variant="h3" className='mt-3'>Teams</Typography>
        <span>below are the education wing members list:</span>
        <section className='team_member'>
          {
            team.map((val,idx)=>{
              return (
                <Teammember
                  key={idx}
                  {...val}

                />
              )
            })
          }
        
        </section>
      </Container>
    </Teamwrapper>

    </>
  )
}

export default Team
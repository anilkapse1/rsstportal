import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import leftbg from "../assets/images/left-bg.png";
import Herosmall from '../components/Herosmall';
import Announcementlist from '../components/Announcementlist';
import Typography from '@mui/material/Typography';

const Announcement = () => {
  const Announcementrwrapper=styled.div`
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
     word-break: break-all;
    word-wrap: break-word;
   }
   span{
        color:${({theme})=>theme.colors.text7};
        position: relative;
        font-size:14px;
  }

  .accordion_section{
    margin-top: 20px;
  }

`

const [announcement, setAnnouncement]= useState([]);

useEffect(()=>{
  const fetchData= async()=>{
    try{
      const response = await fetch('./data/announcement.json');
      const data = await response.json();
      setAnnouncement(data.announcement)
    }catch(err){
      console.error(err);
    }
  }

  fetchData();
},[])

console.log('announcement page');
console.log(announcement);


  return (
    <>
    <Herosmall 
      pageName="announcement"
      areaTotalStudent={announcement.length}
      field="announcement"
    />

    <Announcementrwrapper>
      <Container className='announcementwrapper common_margin'>
        <Typography variant="h3" className='mt-3'>Announcement</Typography>
        <span>below are the announcement list:</span>
        <div className='accordion_section'>
        {
          announcement.map((val,idx)=>{
            return (
              <Announcementlist key={idx} {...val}/>
            )
          })
        }
        </div>
      </Container>
    </Announcementrwrapper>

    </>
  )
}

export default Announcement
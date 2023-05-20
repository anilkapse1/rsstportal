import React from 'react'
import Typography from '@mui/material/Typography';
import Item from './Item';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Streamseparation = ({data,id,groupName}) => {
    console.log("item page--------------");
    console.log(`id:${id} group name:${groupName} length:${data.length}`);
    console.dir(data);

    const  Streamwrapper=styled.div`
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

        .count_head{
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            gap:10px;
            @media (min-width: 768px) {
                flex-direction:row;
                align-items:center;
            }
            .count_stream{
                width:35px;
                height:35px;
                display:inline-block;
                display:grid;
                place-items: center;
                border-radius: 50%;
                background-color: rgb(106,106,179,.5);
                color:white;
                font-weight:bold;
                @media (min-width: 768px) {
                    margin-left:20px;
                }
                
            }
            .group_from{
            color:#c32775;
            display:inline-block;
            text-decoration:underline;
           
        }
        }
        .item_container{
            flex:none;
            justify-content:start;
            display:block;
            margin-bottom:100px;
            .slick-track{
                margin-left:initial;
            }
            .slick-slide > div{
                margin:0px 10px;
            }
            .slick-list{
                margin:0px -10px;
                @media (max-width: 480px) {
                    width: 90%; /* Adjust the width as per your requirements */
                    margin: 0 auto; /* Center the slide within the carousel */
                }
            }
            .slick-prev{
                @media (max-width: 480px) {
                    left:0px;
                }
            }
            .slick-next{
                @media (max-width: 480px) {
                    right:0px;
                }
            }

        }

    `

    const Settings={
        dots:false,
        infinite:false,
        speed:500,
        slidesToShow:3,
        slidesToScroll:3,
        initialSlide:0,
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                },
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2,
                },
            },
            {
                breakpoint:767,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,

                },
            },

        ]

    }

    let groupFrom;
    if(groupName==="pre primary stage"){
        groupFrom="nursery, junior kg, senior kg"
    }else if(groupName==="primary stage"){
        groupFrom="std 1st to 4th"
    }else if(groupName==="middle stage"){
        groupFrom="std 5th to 8th"
    }else if(groupName==="secondary stage"){
        groupFrom="std 9th to 10th"
    }else if(groupName==="higher secondary stage"){
        groupFrom="std 11th to 12th"
    }else if(groupName==="graduate"){
        groupFrom="graduate"
    }else if(groupName==="post graduate"){
        groupFrom="post graduate"
    }else if(groupName==="engineer"){
        groupFrom="engineer"
    }else if(groupName==="medical science"){
        groupFrom="medical science"
    }else if(groupName==="diploma"){
        groupFrom="diploma"
    }else if(groupName==="iti"){
        groupFrom="iti"
    }else{
        groupFrom="";
    }

    return (
    <Streamwrapper>
        <Typography variant="h3" className='mt-3'>{groupName}</Typography>
        <span className='count_head'>
            total no of student from <span className='group_from'> {groupFrom}:</span> <span className='count_stream'>{data.length}</span>
        </span>
        
        <div className="item_container">
        <Slider {...Settings}>

        {
            data.map((val,idx)=>{
                return (
                    <Item key={idx} id={idx} data={val} />
                )
            })
        }
        </Slider>
        </div>


    </Streamwrapper>
  )
}

export default Streamseparation
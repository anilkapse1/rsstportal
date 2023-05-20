import React from 'react'
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Listitem from './Listitem';
import Table from 'react-bootstrap/Table';


const Listseparation = ({data,id,groupName}) => {
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
            padding-left:5px;
            text-decoration:underline;
        }
    }
    .list_container{
        margin:20px 0px;
    }
    `;

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
            total no of student from <span className='group_from'> {groupFrom}</span>: <span className='count_stream'>{data.length}</span>
        </span>
        <div className="list_container">
        <Table striped bordered hover responsive>
            <thead>
                <th>#</th>
                <th>full name</th>
                <th>std/course</th>
                <th>academic year</th>
            </thead>
            <tbody>

            {
                data.map((val,idx)=>{
                    return (
                        <Listitem key={idx} sr={idx=idx+1} id={idx} data={val} />
                    )
                })
            }
            </tbody>
        </Table>

        </div>


    </Streamwrapper>
  )
}

export default Listseparation
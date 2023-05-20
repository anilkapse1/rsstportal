import React, { useContext } from 'react'
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Skewleft from './Skewleft';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Areacountingtiles from './Areacountingtiles';
import { PageIndex } from '../Context';
import { useNavigate } from 'react-router-dom';



const Areacounting = () => {
    const Countingwrapper = styled.section`
        display:flex;
        position:relative;
        .counting_section{
            margin-top:120px;
            .parent{
                div{
                }
                .label{
                    margin-bottom:15px;
                    h3{
                    color:${({theme})=>theme.colors.headeractive};
                    font-family:inherit;
                    }
                    span{
                        color:${({theme})=>theme.colors.text7};
                        position: relative;
                        font-size:14px;

                    }
                }
                .list_details{
                    display:flex;
                    flex-wrap:wrap;
                    flex-direction:row;
                    gap:20px;   
                    .list{
                        flex:1 1 30%;
                        text-align:center;
                        padding:15px;
                        box-shadow: 0 6px 16px rgb(52 105 203 / 16%);
                        border-top-right-radius: 10%;
                        border-bottom-left-radius: 10%;
                        @media (min-width: 768px) {
                            flex:0 1 30%;
                        }
                        @media (min-width: 1024px) {
                            flex:0 1 17%!important;
                        }
                        .image_container{
                            width:80%;
                            margin:auto;
                            position:relative;
                            img{
                                object-fit:cover;
                                width:75%;
                            }
                            span{
                                color: ${({theme})=>theme.colors.text7};
                                display: block;
                                font-weight: 700;
                            }
                        }
                        span{
                            color:${({theme})=>theme.colors.text7};
                            position: relative;
                            font-size:14px;

                        }
                        &:hover{
                            cursor:pointer;
                        }
                    }
                }
            }
        }
    
    `;

    //fetch student list from store
    const studentList = useSelector((state)=>{
        return state.student;
    })

    const groupArea = studentList.reduce((acc,value)=>{
        (acc[value.area]=acc[value.area] || []).push(value);
          return acc
    },[])

    //fetch a area name
    const {filteredarea, setFilteredArea} = useContext(PageIndex)
    const navigate = useNavigate();
    const areaFetchHandler=(data)=>{
        console.log(data);
        setFilteredArea(data);
        navigate('/area');
        window.scrollTo(0,0);
    }



  return (
    <Countingwrapper>
        <Skewleft/>
        <Container className="counting_section common_margin">
            <div className='parent'>
                <div className='label'>
                    <Typography variant="h3" className='mt-3'>Let's check</Typography>
                    <span>No. of student by Area</span>
                </div>
                <div className='list_details'>
                    {
                        Object.keys(groupArea).map((key,idx)=>{
                            return <Areacountingtiles key={idx} villageName={key} noOfStudent={groupArea[key].length} fetchArea={areaFetchHandler}/>;
                        })
                    }
                    
                </div>
            </div>
        </Container>
    </Countingwrapper>
  )
}

export default Areacounting
import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import logo from '../assets/images/logo.png'
import book from '../assets/images/book.png'
import Button from '@mui/material/Button';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import rightbg from '../assets/images/right-bg.png';
import Skewright from './Skewright';
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../redux/actions/studentActions";


const Hero = () => {
    const Hero=styled.section`
        margin-top:74px;
        position: relative;
        background-image:url(${rightbg});
        background-size: contain;
        background-repeat: no-repeat;
        background-position:right;
        @media (min-width:768px){
            height: calc(100vh - 64px);
            margin-top:64px;
        } 
        .parent{
            display:flex;
            flex-wrap:wrap;
            align-content:center;
            flex-direction:column;
            @media (min-width:768px){
                flex-direction:row;
                height:70vh;
            }

            .section{
                flex: 1 1 50%;
            }
            .logo{
                display: flex;
                flex-wrap: wrap;
                align-content: center;
                flex-direction: column;
                justify-content: center;
                img{
                    max-width:40%;
                    align-self:center;
                }
                Button{
                    align-self: center;
                }
                h3{
                    color:${({theme})=>theme.colors.headeractive};
                    font-family:inherit;
                    font-size:1.5rem;
                    margin-top: 30px!important;
                    margin-bottom: 30px!important;
                    @media (min-width:768px){
                        font-size:1.6rem;
                    }
                    @media (min-width:1280px){
                        font-size:2.5rem;
                    }
                }
            }
            .image{
                display: flex;
                position:relative;
                justify-content: center;
                margin-bottom:100px;
                @media (min-width:768px){
                    justify-content: flex-end;
                    margin-bottom:unset;
                }
                img{
                    max-width:80%;
                    animation: moving 20s linear infinite;

                    @media (min-width:768px){
                        max-width:80%;
                    }
                    @media (min-width:1280px){
                        max-width:65%;
                    }

                }
                .student_count{
                    position: absolute;
                    box-sizing: border-box;
                    font-size: 25px;
                    color: #c32775;
                    font-weight: 500;
                    width: 65%;
                    height: 100%;
                    display: grid;
                    place-items: center;
                    border-radius: 50%;
                    overflow: hidden;
                    @media (min-width:768px){
                        font-size: 25px;
                        width:80%;
                    }
                     @media (min-width:1280px){
                        font-size:2.5rem;
                        width:65%;
                    }
                    &::after{
                        content: "Total students (2022-23)";
                        position: absolute;
                        width: 50%;
                        z-index: -1;
                        font-size: 3vw;
                        color: rgba(0,0,0,.5);
                        animation: 5s ease-in-out 0s infinite alternate-reverse both running magicc;
                        top: 56%;
                        @media (min-width:768px){
                            font-size: 15px;
                        }
                        @media (min-width:1024px){
                            font-size: 20px;
                        }
                    }                
                }
            }
            
        }

        @keyframes moving{
            0%{
                transform:rotate(0deg);
                
            }
            100%{
                transform:rotate(360deg);
            }
        }

        @keyframes magic{
                0%{
                    transform:scale(.5)
                }
                100%{
                    transform:scale(1)
                }
            }

    `;

    const navigate = useNavigate();

    //fetch student details
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStudent());
    }, []);

    //get student list from store
    const studentList = useSelector((state) => {
        return state.student;
    });



  return (
    <Hero className='page_hero'>
        <Container>
           <div className='parent'>
            <div className='logo section'>
                <img src={logo} alt="student logo"/>
                <Button onClick={()=>navigate('/topper')} variant="contained" className='mt-3 common_button' startIcon={<StarBorderIcon />}>
                    Topper
                </Button>
                <Typography variant="h3" className='mt-3'>
                
                        <Typewriter options={{
                            autoStart:true,
                            loop:true,
                            delay:40,
                            strings:[
                                "I want to be a Doctor",
                                "I want to be an Engineer",
                                "I want to be a Teacher"
                        ]
                        }}/>
                    
                </Typography>
                
                
            </div>
            <div className='image section text-center'>
                <img src={book} alt="student logo"/>
                <div className='student_count'>
                    {studentList.length}<br/>
                </div>
            </div>
           </div>
        </Container>
        <Skewright/>
    </Hero>
  )
}

export default Hero
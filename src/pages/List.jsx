import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import leftbg from "../assets/images/left-bg.png";
import Herosmall from "../components/Herosmall";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../redux/actions/studentActions";
import { useState } from "react";
import { useEffect } from "react";
import Filterarea from "../components/Filterarea";
import emptyImage from "../assets/images/empty.png";
import Listseparation from "../components/Listseparation";
import IconButton from '@mui/material/IconButton';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { useContext } from "react";
import { PageIndex } from '../Context';



const List = () => {
  const Listwrapper = styled.div`
    position: relative;
    background-color: white;
    background-image: url(${leftbg});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top left;
    .listwrapper {
      h3 {
        color: ${({ theme }) => theme.colors.headeractive};
        font-family: inherit;
        margin-bottom: 20px;
        margin-top: 0px !important;
      }
      span {
        color: ${({ theme }) => theme.colors.text7};
        position: relative;
        font-size: 14px;
      }
      .filter_area {
        margin-bottom: 30px;
        .css-fyalig {
          margin: 0px;
        }

      }
      .print_section{
        position: fixed;
        right: 0px;
        bottom: 100px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        button{
            background-color:#5a1466;
            color: white;
        }
      }
    }
  `;

  //fetch student details
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudent());
  }, []);

  //get student list from store
  const studentList = useSelector((state) => {
    return state.student;
  });

  const { filteredarea, setFilteredArea } = useContext(PageIndex);

  //get total no of student from area
  const totalStudentbyarea = studentList.filter((val, idx) => {
    return val.area === filteredarea;
  });

  console.log(totalStudentbyarea.length);

  const groupArea = studentList.reduce((acc, value) => {
    acc[value.area] = acc[value.area] || {};
    acc[value.area][value.group] = acc[value.area][value.group] || [];
    acc[value.area][value.group].push(value);
    return acc;
  }, []);

  console.log("list page");
  console.log(groupArea);
  const filterOption = Object.keys(groupArea);

  console.log("group by area", filteredarea);
  const result = groupArea[filteredarea];
  console.log(result);
  console.log("-------------------------");

  //------display search data using condition
  let displayData;
  if (result == undefined) {
    displayData = (
      <img src={emptyImage} alt="empty list" className="emptyImage" />
    );
  } else {
    displayData = Object.keys(result).map((val, idx) => {
      return (
        <Listseparation key={idx} id={idx} groupName={val} data={result[val]} />
      );
    });
  }

  const filterChangeHandler = (val) => {
    setFilteredArea(val);
  };

  const handlePrint=()=>{
    window.print();
  }

  //fetching no.of girls
  const girlCount =  totalStudentbyarea.filter((val,idx)=>{
    return val.gender=='girl'
  })
  
  //fetching no.of boys
  const boyCount =  totalStudentbyarea.filter((val,idx)=>{
    return val.gender=='boy'
  })

  const sharePage= async()=>{
    try {
        await navigator.share({
          title: 'RSST Student portal',
          text: 'Rohit Samaj Seva Trust Student Portal',
          url: window.location.href,
        });
      } catch (error) {
        console.error(error);
      }
  }

  return (
    <>
      <Herosmall
        pageName="list"
        areaName={filteredarea}
        areaTotalStudent={totalStudentbyarea.length}
        field="student"
        girl={girlCount.length}
        boy={boyCount.length}
        showGirlandBoys="true"
      />

      <Listwrapper>
        <Container className="listwrapper common_margin">
            <div className="print_section">
                <IconButton aria-label="delete" size="large">
                    <PrintIcon onClick={handlePrint}/>
                </IconButton>          
                <IconButton aria-label="delete" size="large">
                    <ShareIcon onClick={sharePage} />
                </IconButton>          
            </div>

          <div className="filter_area">
            <Filterarea
              onFilterChange={filterChangeHandler}
              selectedFiltered={filteredarea}
              filterVal={filterOption}
            />
            <Typography variant="h6" className='mt-3 total_by_list'>Total student: {totalStudentbyarea.length}</Typography>

          </div>
          {displayData}
        </Container>
      </Listwrapper>
    </>
  );
};

export default List;

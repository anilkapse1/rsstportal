import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getStudent } from '../redux/actions/studentActions';
import styled from 'styled-components';
import leftbg from "../assets/images/left-bg.png";
import { useEffect } from 'react';
import Streamseparation from '../components/Streamseparation';
import emptyImage from "../assets/images/empty.png";
import Filterarea from '../components/Filterarea';
import Herosmall from '../components/Herosmall';
import { PageIndex } from '../Context';


const Area = () => {
  const Areawrapper=styled.div`
    position: relative;
    background-color: white;
    background-image: url(${leftbg});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top left;
    .filter_area{
      margin-bottom:30px;
      .css-fyalig{
        margin:0px;
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

//calling a context
const {filteredarea, setFilteredArea} = useContext(PageIndex)


//get total no of student from area
const totalStudentbyarea = studentList.filter((val,idx)=>{
  return val.area===filteredarea;
})

console.log(totalStudentbyarea.length);


const groupArea = studentList.reduce((acc,value)=>{
  acc[value.area] = acc[value.area] || {};
  acc[value.area][value.group] = acc[value.area][value.group] || [];
  acc[value.area][value.group].push(value)
  return acc
},[])

console.log('area page');
console.log(groupArea);
const filterOption = Object.keys(groupArea);

console.log('group by area',filteredarea);
const result = groupArea[filteredarea];
console.log(result);
console.log('-------------------------');

//fetching no.of girls
const girlCount = totalStudentbyarea.filter((val,idx)=>{
  return val.gender=='girl'
})

//fetching no.of boys
const boyCount = totalStudentbyarea.filter((val,idx)=>{
  return val.gender=='boy'
})


  //------display search data using condition
  let displayData;
  if (result == undefined) {
    displayData = (
      <img src={emptyImage} alt="empty list" className="emptyImage" />
    );
  } else {
    displayData = Object.keys(result).map((val, idx) => {
      return <Streamseparation key={idx} id={idx} groupName={val} data={result[val]}  />;
    })
  }


  const filterChangeHandler=(val)=>{
    setFilteredArea(val)
  }

  return (
    <>
    <Herosmall 
      pageName="area"
      areaName={filteredarea}
      areaTotalStudent={totalStudentbyarea.length}
      field="student"
      girl={girlCount.length}
      boy={boyCount.length}
      showGirlandBoys="true"
    />    
    <Areawrapper>
      <Container className='areawrapper common_margin'>
      <div className='filter_area'>
        <Filterarea  
          onFilterChange={filterChangeHandler}
          selectedFiltered={filteredarea}
          filterVal={filterOption}
          />
      </div>
      {
         displayData
      }
      </Container>
    </Areawrapper>

    </>
  )
}

export default Area
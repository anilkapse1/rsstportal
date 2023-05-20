import React from 'react'
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import leftbg from "../assets/images/left-bg.png";
import { useEffect } from 'react';
import { getStudent } from '../redux/actions/studentActions';
import Streamseparation from '../components/Streamseparation';
import Herosmall from '../components/Herosmall';






const Stream = () => {
  const Streamwrapper=styled.div`
    position: relative;
    background-color: white;
    background-image: url(${leftbg});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top left;

    .streamwrapper{
     
    }
  `

  //fetch student details
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudent());
  }, []);

  
//get student list from store
const studentList = useSelector((state) => {
  return state.student;
});


console.log('stream pages');

const groupArea = studentList.reduce((acc,value)=>{
  (acc[value.group]=acc[value.group] || []).push(value);
    return acc
},[])

//fetching no.of girls
const girlCount = studentList.filter((val,idx)=>{
  return val.gender=='girl'
})

//fetching no.of boys
const boyCount = studentList.filter((val,idx)=>{
  return val.gender=='boy'
})

console.log(groupArea);
console.log(Object.keys(groupArea));
console.log(Object.values(groupArea));

return (
  <>
    <Herosmall 
      pageName="stream"
      areaTotalStudent={studentList.length}
      field="students from all area by category"
      girl={girlCount.length}
      boy={boyCount.length}
      showGirlandBoys="true"
      
    />
    <Streamwrapper>
      <Container className='streamwrapper common_margin'>
        {
          Object.keys(groupArea).map((val, idx) => {
            return <Streamseparation key={idx} id={idx} groupName={val} data={groupArea[val]} />;
          })
        }
      </Container>
    </Streamwrapper>

  </>
  )
}

export default Stream
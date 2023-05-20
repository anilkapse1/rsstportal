import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStudent } from "../redux/actions/studentActions";
import Item from "../components/Item";
import Typography from "@mui/material/Typography";
import leftbg from "../assets/images/left-bg.png";
import Herosmall from "../components/Herosmall";

const Topper = () => {
  const Topperwrapper = styled.div`
    position: relative;
    background-color: white;
    background-image: url(${leftbg});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top left;
    .topperwrapper {
      h3 {
        color: ${({ theme }) => theme.colors.headeractive};
        font-family: inherit;
        margin-bottom: 20px;
        margin-top: 0px !important;
      }
      .count_head {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.text7};
        position: relative;
        font-size: 14px;
        .count_stream {
          width: 35px;
          height: 35px;
          display: inline-block;
          margin-left: 20px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background-color: rgb(106, 106, 179, 0.5);
          color: white;
          font-weight: bold;
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

  console.log("topper page start");
  console.log(studentList);

  const result = studentList.filter((val, idx) => {
    return val.topper === true;
  });

  console.log("topper result");
  console.log(result);

  //fetching no.of girls
const girlCount = result.filter((val,idx)=>{
  return val.gender=='girl'
})

//fetching no.of boys
const boyCount = result.filter((val,idx)=>{
  return val.gender=='boy'
})

  return (
    <>
      <Herosmall
        pageName="topper"
        areaTotalStudent={result.length}
        field="topper student"
        girl={girlCount.length}
        boy={boyCount.length}
        showGirlandBoys="true"
      />
      <Topperwrapper>
        <Container className="topperwrapper common_margin">
          <Typography variant="h3" className="mt-3">
            Topper list
          </Typography>
          <span className="count_head">
            total no of topper student:{" "}
            <span className="count_stream">{result.length}</span>
          </span>

          <div className="item_container">
            {result.map((val, idx) => {
              return <Item key={idx} id={idx} data={val} />;
            })}
          </div>
        </Container>
      </Topperwrapper>
    </>
  );
};

export default Topper;

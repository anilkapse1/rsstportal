import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import leftbg from "../assets/images/left-bg.png";
import Herosmall from "../components/Herosmall";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../redux/actions/studentActions";
import { useEffect } from "react";
import boy from "../assets/images/male.png";
import girl from "../assets/images/female.png";
import toper from "../assets/images/topper.png";
import StudentSingle from "../components/StudentSingle";




const Studentprofile = () => {
  let { id } = useParams(); //get the student id
  console.log("student profile");
  console.log(id);

  //fetch student details
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudent());
  }, []);

  //get student list from store
  const studentList = useSelector((state) => {
    return state.student;
  });

  const student_detail = [{...studentList[id]}];
  console.log(student_detail);

  let displayData;
  displayData = student_detail.map((val, idx) => {
    return <StudentSingle key={idx} data={val} />;
  });

  return (
    <>
     {displayData}
    </>
  );
};

export default Studentprofile;

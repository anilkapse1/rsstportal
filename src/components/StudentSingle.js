import React from 'react'
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import leftbg from "../assets/images/left-bg.png";
import boy from "../assets/images/male.png";
import girl from "../assets/images/female.png";
import toper from "../assets/images/topper.png";
import Herosmall from "./Herosmall";

const StudentSingle = ({data}) => {
    console.log('from student single page');
    const {
        academic_year,
        achievement_details,
        achievement_image,
        area,
        college_name,
        gender,
        group,
        id,
        middle_name,
        name,
        profile_image,
        std,
        stream,
        surname,
        topper,
        university
    } = data;

const Studentprofilewrapper = styled.div`
    position: relative;
    background-color: white;
    background-image: url(${leftbg});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top left;
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

    .student_details {
      display: flex;
      flex-direction: column-reverse;
      flex-wrap: wrap;
      margin-top: 30px;
      gap:20px;
      @media (min-width:768px){
        flex-direction: row;
      }

      section {
        ul {
          li {
            h5 {
              margin-bottom: 20px;
              display: flex;
              flex-direction: row;
              label{
                @media (max-width:768px){
                  flex:1 1 50%
                }
              }
              
              span {
                font-size: 20px;
                font-weight: 400;
                padding-left: 20px;
                @media (max-width:768px){
                  flex:1 1 50%
                }
              }
            }
          }
        }
      }
      .part1 {
        flex: 1 1 70%;
      }
      .part2 {
        flex: 1 1 25%;
        img{
          max-width:100%;
          @media (min-width:768px){
            max-width:100%;
          }
        }
      }
    }
  `;

  return (
    <>
         <Herosmall
        studentName={name}
        studentMiddle={middle_name}
        studentSurname={surname}
        from={area}
      />
      <Studentprofilewrapper>
        <Container className="announcementwrapper common_margin">
          <span>
            below are the academic information of {name} {surname}:
          </span>
          <div className="student_details">
            <section className="part1">
              <ul type="circle">
                <li>
                  <h5>
                    <label>full name</label>:
                    <span>
                      {name} {middle_name}{" "}
                      {surname}
                    </span>
                  </h5>
                </li>
                <li>
                  <h5>
                    <label>sex{" "}</label>:
                    <span>
                      {gender === "boy" ? "male" : "female"}
                    </span>
                  </h5>
                </li>
                <li>
                  <h5>
                    <label>area</label>:<span>{area}</span>
                  </h5>
                </li>
                <li>
                  <h5>
                  <label>stream</label>: <span>{stream}</span>
                  </h5>
                </li>
                <li>
                  <h5>
                    <label>standard</label>: <span>{std}</span>
                  </h5>
                </li>
                <li>
                  <h5>
                  <label>university</label>: <span>{university}</span>
                  </h5>
                </li>
                <li>
                  <h5>
                    <label>academic year</label>: <span>{academic_year}</span>
                  </h5>
                </li>
                <li>
                  <h5>
                    <label>achievement details</label>:{" "}
                    <span>{achievement_details}</span>
                  </h5>
                </li>
              </ul>
            </section>
            <section className="part2">
              {gender === "boy" ? (
                <img src={boy} alt="student image" />
              ) : (
                <img src={girl} alt="girl student profile pic" />
              )}
            </section>
          </div>
        </Container>
      </Studentprofilewrapper>
    </>
  )
}

export default StudentSingle
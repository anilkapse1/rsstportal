import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import book from "../assets/images/book.png";
import Button from "@mui/material/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import rightbg from "../assets/images/right-bg.png";
import hero from "../assets/images/hero1.png";
import Skewright from "./Skewright";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

const Herosmall = (props) => {
  const Hero = styled.section`
    margin-top: 64px;
    margin-bottom: 50px;
    position: relative;
    background-image: url(${hero});
    background-color: rgb(106, 106, 179, 0.5);
    background-size: cover;
    background-repeat: no-repeat;
    @media (min-width:768px){
      background-size: 100%;
    }

    .parent {
      display: flex;
      flex-direction: column;
      padding: 20px 0px;
      justify-content: space-around;
      .section {
        flex-basis: 100%;
      }
      .part1 {
        h1 {
          position: relative;
          overflow: hidden;
          padding-left: 20px;
          color: white;
          font-weight: 200;
          letter-spacing: 2px;
          &::before {
            content: "";
            position: absolute;
            width: 40px;
            height: 40px;
            background: #ff9898;
            transform: rotate(42deg);
            left: -22px;
            top: -19px;
          }
          span {
            font-weight: 400;
          }
        }
      }
      .part2 {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        article {
          border-left: 1px solid #dfb6b6;
          flex-basis: 30%;
          padding-left: 10px;
          h6 {
            color: #ff9898;
            font-size: 20px;
            font-weight: 400;
            span {
              font-weight: 300;
              color: #ff9898;
            }
          }
          span {
            font-size: 21px;
            color: white;
            font-weight: 600;
          }
        }
        @media (min-width:768px){
          flex-direction: row;

       }

      }
      @media (min-width:1024px){
        height:40vh;
      }

    }
  `;

  const {
    pageName,
    areaName,
    areaTotalStudent,
    field,
    studentName,
    studentSurname,
    studentMiddle,
    from,
    girl,
    boy,
    showGirlandBoys
  } = props;
  console.log("areatotal");
  console.log(areaTotalStudent);
  const navigate = useNavigate();

  return (
    <Hero className="page_hero">
      <Container>
        <div className="parent">
          <div className="section part1">
            {studentName && (
              <h1>
                {" "}
                Hi, I'm{" "}
                <span>
                  {studentName} {studentMiddle} {studentSurname}
                </span>
              </h1>
            )}
            <h1>
              {pageName} <span>{areaName}</span>
            </h1>
          </div>
          {from && (
            <div className="section part2">
              <article>
                <h6>from </h6>
                <span>{from}</span>
              </article>
            </div>
          )}

          {areaTotalStudent !== undefined ? (
            <div className="section part2">
              <article>
                <h6>
                  total <span>{areaName}</span> {field}
                </h6>
                <span>{areaTotalStudent}</span>
              </article>
              {
                
                showGirlandBoys && (
                    <>
                    <article>
                <h6>total girls</h6>
                <span>{girl}</span>
              </article>
              <article>
                <h6>total boys</h6>
                <span>{boy}</span>
              </article>

                    </>

                 )
              }
            </div>
          ) : (
            ""
          )}
        </div>
      </Container>
    </Hero>
  );
};

export default Herosmall;

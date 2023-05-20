import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import footer_logo from "../assets/images/footer_logo.png";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const Footerwrapper = styled.section`

    background: rgb(152,71,127);
    background: linear-gradient(
      126deg,
      rgba(152, 71, 127, 1) 28%,
      rgba(100, 40, 102, 1) 71%,
      rgba(64, 19, 85, 1) 100%
    );
    display: flex;
    height: auto;

    @media (min-width: 1281px) {
      height: 100vh;
    }
    .widget {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding-bottom: 50px;
      padding-bottom: 50px;
      border-bottom: 1px solid #8b8b8b;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      .footer_logo {
        img {
          width: 60%;
        }
      }
      section {
        flex: 1 1 25%;
        color: white;
        padding: 16px;
        h1 {
          font-size: 1rem;
          text-transform: uppercase;
          font-weight: 500;
        }
        span,
        address {
          font-weight: 200;
        }
        address p {
          margin-bottom: 5px;
        }
      }
    }
    .copyright {
      padding: 10px;
      width: 50%;
      margin: 50px auto 0 auto;
      text-align: center;
      span {
        font-weight: 200;
        color: white;
        a {
          color: white;
        }
      }
      button {
        margin: 10px 15px;
        background-color:#5a1466;
        color:white;
      }
    }
  `;

  const navigate = useNavigate();
  const sharePage = async () => {
    try {
      await navigator.share({
        title: "RSST Student portal",
        text: "Rohit Samaj Seva Trust Student Portal",
        url: window.location.href,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Footerwrapper className="page_footer">
      <Container className="common_footer_margin">
        <div className="widget">
          <section className="footer_logo">
            <img src={footer_logo} alt="demo" />
          </section>

          <section>
            <h1>topper</h1>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/topper")}
            >
              topper list
            </span>
          </section>
          <section>
            <h1>announcement</h1>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/announcement")}
            >
              announcement list
            </span>
            <span></span>
          </section>
          <section>
            <h1>contact us</h1>
            <address>
              <p>Rohit Samaj Seva Trust,</p>
              <p>
                101 A, Shri OM Co. Operative Housing Society, Behind Kumar
                School
              </p>
              <p>vapi 396191 gujarat</p>
              <p>+91-9909250102</p>
              <p>rohitsamaj.st@gmail.com</p>
            </address>
          </section>
        </div>
        <div className="copyright">
          <Fab size="small" aria-label="add">
            <HomeIcon onClick={() => navigate("/studentportfolio")} />
          </Fab>
          <Fab size="small" aria-label="add">
            <ShareRoundedIcon onClick={sharePage} />
          </Fab>
          <div className="my-4">
            <span>
              Handcrafted with <FavoriteIcon />{" "}
              <a href="https://anilkapse1.github.io/kapsecode/" target="_blank">
                kapsecode.in
              </a>{" "}
              &copy; {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </Container>
    </Footerwrapper>
  );
};

export default Footer;

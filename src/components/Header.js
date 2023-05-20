import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";


const Header = () => {
  const Header = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    position: fixed;
    width: 100%;
    z-index: 9999;
    padding: 10px 0px;
    top: 0px;
    height:64px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
              0 4px 8px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
        box-shadow:unset;    
    } 

    .desktop {
        ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: right;
      list-style-type: none;
      margin: 0px;
      align-item: center;
      li {
        display: inline-block;
        a {
          padding: 10px 10px;
          display: block;
          color: ${({ theme }) => theme.colors.header};
          font-weight: 500;
          &:hover {
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
              rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
          }
          &.active {
            font-weight: 500;
            color: ${({ theme }) => theme.colors.headeractive};
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
              rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
          }
        }
      }
    }
    }

    .mobile_head{
        font-size:22px;
        line-height: calc(64px/1.5);
        margin: 0px;
        color:#75482d;
        @media (min-width: 768px) {
            display:none;
        } 
    }


    .hamburger {
      width: 32px;
      height: 32px;
      display: inline-block;
      position: absolute;
      right: 12px;
        top: 15px;
      padding: 5px;
      cursor: pointer;
      @media (min-width: 768px) {
        display: none;
      }
    }

    span,
    span::before,
    span::after {
      content: "";
      height: 2px;
      width: 22px;
      position: absolute;
      top: 46%;
      background-color: #000;
      display: block;
      transition: all 0.5s ease;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
    }

    span::before {
      top: -6px;
    }

    span::after {
      top: 6px;
    }

    .change span {
      width: 0;
    }

    .change span::before {
      transform: translate(0px, 6px) rotate(45deg);
    }
    .change span::after {
      transform: translate(0px, -6px) rotate(-45deg);
    }

    /* hamburger end */

    .desktop {
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    }

    .mobile {
        position: absolute;
        left: 0;
        top: 64px;
        right: 0;
        display: none;
      @media (min-width: 768px) {
        display: none;
      }

      ul.menu {
        position: relative;
        list-style-type: none;
        background: #c32775;
        margin: 0;
        padding: 0;
      }

      ul.menu li {
        display: block;
      }
      ul.menu li a {
        color: #fff;
        text-transform: uppercase;
        padding: 10px;
        text-decoration: none;
        display: block;
        font-size: 13px;
      }
      ul.menu li a:hover {
        background: #fff;
        color: #000;
      }

      ul.submenu {
        display: none;
        width: 100%;
        background: grey;
        margin: 0;
        padding: 0;
      }
      
    }

    .open{
        display:block;
      }
  `;

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <Header className="page_header">
      <Container>
        <nav className="desktop">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/stream">Stream</NavLink>
            </li>
            <li>
              <NavLink to="/area">Area</NavLink>
            </li>
            <li>
              <NavLink to="/topper">Topper</NavLink>
            </li>
            <li>
              <NavLink to="/list">list</NavLink>
            </li>
            <li>
              <NavLink to="/announcement">Announcement</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
          </ul>
        </nav>


        <h1 className="mobile_head" onClick={()=>navigate('/studentportfolio')}>
            RSST Student Portal
        </h1>
        <div className={`hamburger ${isMenuOpen ? 'change' : ''}`} onClick={toggleMenu}>
          <span></span>
        </div>
        <nav className={`mobile ${isMenuOpen ? 'open' : ''}`}>
          <ul className="menu">
            <li>
              <NavLink to="/studentportfolio" onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/stream" onClick={closeMenu}>Stream</NavLink>
            </li>
            <li>
              <NavLink to="/area" onClick={closeMenu}>Area</NavLink>
            </li>
            <li>
              <NavLink to="/topper" onClick={closeMenu}>Topper</NavLink>
            </li>
            <li>
              <NavLink to="/list" onClick={closeMenu}>list</NavLink>
            </li>
            <li>
              <NavLink to="/announcement" onClick={closeMenu}>Announcement</NavLink>
            </li>
            <li>
              <NavLink to="/team" onClick={closeMenu}>Team</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </Header>
  );
};

export default Header;

import React, { useState } from "react"
import styled from "styled-components"
import { device } from "./responsive/device"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Navbar() {
  const [show, setShow] = useState(false)
  //Query logo
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  //
  return (
    <Header>
      <Img className="logo" fixed={data.image.childImageSharp.fixed} />
      <ToggleMenu onClick={() => setShow(!show)}>
        <div></div>
        <div></div>
        <div></div>
      </ToggleMenu>

      <Navigation display={show} className={show ? "active" : "hidden"}>
        <NavLinks>
          <Link>
            <a href="#">Servicios</a>
          </Link>
          <Link>
            <a href="#">Nosotros</a>
          </Link>
          {/* <!-- Also they go with a underline animation --> */}
          <ContactButton>CONTÁCTANOS</ContactButton>
        </NavLinks>
      </Navigation>
    </Header>
  )
}

const Header = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  height: 65px;

  padding: 0.8rem 0;
  background-color: black;
  .logo {
    margin-left: 1.3rem;
  }
  @media ${device.tablet} {
    padding-top: 0.7rem;
    .logo {
      width: 2.2rem !important;
      height: 2.2rem !important;
      margin-top: 0.3rem;
    }
    //Toggle menu animation
    .hidden {
      transition: all 100ms cubic-bezier(0.65, -1.26, 0.97, 1.06);
      transform-origin: top;
      transform: scaleY(0);
    }
    .active {
      transition: all 100ms cubic-bezier(0.45, 0.84, 0.71, 1);
      transform-origin: top;
      transform: scaleY(1);
    }
  }
`
const ToggleMenu = styled.div`
  display: none;
  &:active {
    background-color: #323232;
  }
  div {
    width: 30px;
    height: 4px;
    background-color: white;
    margin: 6px 0;
  } //Mobile Menu Icon
  @media ${device.tablet} {
    display: block;
    border-radius: 0.3rem;
    padding: 0.3rem 0.8rem;
    margin-right: 0.8rem;
  } //El espacio total a la derecha debe de ser 1.3rem
`
const Navigation = styled.nav`
  padding-right: 0.5rem;
  @media ${device.tablet} {
    margin-top: 0.54rem;
    width: 100%;
    padding-right: 0;
  }
`
const NavLinks = styled.ul`
  @media ${device.tablet} {
    text-align: center;
  }
`
const Link = styled.li`
  display: inline-block;
  padding: 0 0.5rem;
  font-weight: 400;

  a {
    text-decoration: none;
    color: white;
  }
  &:active {
    transition: all 0.2s;
    background-color: #222222;
  }
  //feature this only on Desktop
  @media (min-width: 768px) {
    a::after {
      content: " ";
      display: block;
      width: 100%; //Overflows on the left if bigger
      height: 1px;
      margin-top: 0.1rem;
      background: #ffffff;
      transition: all 0.15s;
      transform: scaleX(0);
    }
    a:hover::after {
      transform-origin: center;
      transform: scaleX(1);
    }
  }
  @media ${device.tablet} {
    padding: 1.3rem;
    background-color: black;
    width: 100%;
    border-top: 1px solid white;
  }
`
const ContactButton = styled.button`
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;

  cursor: pointer;

  border: 0;
  border-radius: 0.25rem;

  background-color: white;
  color: black;
  border: solid 1.5px #fff;

  margin-left: 1rem;
  padding: 0.7rem;

  font-weight: 500;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    &:active {
      border: solid 1.5px #fff;
      transition: all 0.15s;
      background-color: black;
      color: white;
    }
  }

  @media ${device.tablet} {
    margin-left: 0;
    padding: 1.3rem;
    border-radius: 0;
    width: 100%;
    border-bottom: 1.5px solid black;
    &:active {
      transition: all 0.2s;
      background-color: #eaecee;
    }
  }
`

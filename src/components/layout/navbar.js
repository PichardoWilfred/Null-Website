import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { device } from "./responsive/device"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Navbar() {
  const [showNav, setShowNav] = useState(false) //toggle mobile navbar
  const [headerShow, setHeaderShow] = useState(true) //hide navbar on scroll
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset
      if (!showNav)
        setHeaderShow(prevScrollPos > currentScrollPos || currentScrollPos < 50)

      setPrevScrollPos(currentScrollPos)
    }
    window.addEventListener("scroll", handleScroll) //Listen to scroll
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showNav, prevScrollPos, headerShow])

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
  `) //Query logo
  return (
    <Header showThis={headerShow}>
      <Img
        css={`
          margin-left: 1.5rem;
          @media ${device.tablet} {
            margin-left: 1.5rem;
            width: 2.2rem !important;
            height: 2.2rem !important;
            margin-top: 0.3rem;
          }
        `}
        fixed={data.image.childImageSharp.fixed}
      />
      <ToggleMenu onClick={() => setShowNav(!showNav)}>
        <div></div>
        <div></div>
        <div></div>
      </ToggleMenu>

      <Navigation showThis={showNav}>
        <NavLinks>
          <Link>
            <A>Servicios</A>
          </Link>
          <Link>
            <A>Nosotros</A>
          </Link>
          <ContactButton>CONTÁCTANOS</ContactButton>
        </NavLinks>
      </Navigation>
    </Header>
  )
}

const hiddenHeader = css`
  visibility: hidden;
  transition: all 200ms ease-out;
  transform: translate(0, -100%);
`
const visibleHeader = css`
  visibility: visible;
  transition: all 200ms ease-in;
`

const Header = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  ${props => (props.showThis ? visibleHeader : hiddenHeader)}
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  height: 65px;

  padding: 0.8rem 0;
  background-color: black;

  @media ${device.tablet} {
    padding-top: 0.5rem;
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
    display: block; //El espacio total a la derecha debe de ser 1.1rem
    border-radius: 0.3rem;
    padding: 0.3rem 0.8rem;
    margin-right: 0.8rem;
  }
`
const Navigation = styled.nav`
  padding-right: 0.5rem;
  @media ${device.tablet} {
    ${props => (props.showThis ? visibleNav : hiddenNav)}
    margin-top: 0.74rem;
    width: 100%;
    padding-right: 0;
  }
` //Hide Navigation bar
const hiddenNav = css`
  transition: all 100ms cubic-bezier(0.65, -1.26, 0.97, 1.06);
  transform-origin: top;
  transform: scaleY(0);
` //Show Navigation bar
const visibleNav = css`
  transition: all 100ms cubic-bezier(0.45, 0.84, 0.71, 1);
  transform-origin: top;
  transform: scaleY(1);
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
  cursor: pointer;

  @media ${device.tablet} {
    padding: 1.3rem;
    background-color: black;
    width: 100%;
    border-top: 1px solid white;
  }
`
const A = styled.a`
  text-decoration: none;
  color: white;

  &:active {
    transition: all 0.2s;
    background-color: #222222;
  }
  //feature this only on Desktop
  @media (min-width: 768px) {
    &::after {
      content: " ";
      display: block;
      width: 100%; //Overflows on the left if bigger
      height: 1px;
      margin-top: 0.1rem;
      background: #ffffff;
      transition: all 0.15s;
      transform: scaleX(0);
    }
    &:hover::after {
      transform-origin: center;
      transform: scaleX(1);
    }
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
    border-bottom: 1.9px solid black;
    &:active {
      transition: all 0.2s;
      background-color: #eaecee;
    }
  }
`

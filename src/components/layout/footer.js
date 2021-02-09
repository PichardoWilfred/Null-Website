import React from "react"
import styled from "styled-components"
import { device } from "./responsive/device"
import { Link } from "react-scroll" //scrolling options

import Ig from "../../images/contact/ig.svg"
import Mail from "../../images/contact/mail.svg"
import Wsp from "../../images/contact/wsp.svg"

export default function Footer() {
  return (
    <Footer__s>
      {/* Lista */}
      <SocialMedia__list>
        <SocialMedia__element>
          <SocialMedia__Icon src={Wsp} alt="Ig" />
          <SocialMedia__Info>
            <Line>(829) 715-2892</Line>
            <Line>(829) 651-6034</Line>
          </SocialMedia__Info>
        </SocialMedia__element>
        <SocialMedia__element>
          <SocialMedia__Icon src={Ig} alt="Ig" />
          <SocialMedia__Info>@null.systems.official</SocialMedia__Info>
        </SocialMedia__element>
        <SocialMedia__element>
          <SocialMedia__Icon src={Mail} alt="Ig" />
          <SocialMedia__Info>info@null-systems.com</SocialMedia__Info>
        </SocialMedia__element>
      </SocialMedia__list>
      {/* Desarrollo */}
      <Summary>
        <Title>NULL SYSTEMS</Title>
        <Subtitle>
          Desarrollo de Software y Reparación de equipos informáticos
        </Subtitle>
        <Summary__nav>
          <Summary__links>
            <Link to="services" spy smooth offset={-70} duration={500}>
              SERVICIO
            </Link>
          </Summary__links>
          <Summary__links>
            <Link to="about" spy smooth offset={-70} duration={500}>
              NOSOTROS
            </Link>
          </Summary__links>
          <Summary__links>
            <Link to="contact" spy smooth offset={-70} duration={500}>
              CONTACTO
            </Link>
          </Summary__links>
        </Summary__nav>
        <Copyright>© {new Date().getFullYear()} Null Systems</Copyright>
      </Summary>
    </Footer__s>
  )
}

// Social Media Nav
const Footer__s = styled.footer`
  width: 100%;
  background-color: black;
  color: white;

  padding: 3rem;
  margin-top: 1.5rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
    padding: 1.5rem;
  }
`
const SocialMedia__list = styled.ul`
  list-style: none;
`

const SocialMedia__element = styled.li`
  padding: 1rem 0 1rem 0;
  display: flex;
  align-items: center;
`

const SocialMedia__Icon = styled.img`
  width: 2rem;
  vertical-align: middle;
`
const SocialMedia__Info = styled.div`
  height: 100%;
  padding-left: 1.5rem;
  align-items: space-between;
`

const Line = styled.p``

// Nav Links
const Summary = styled.nav`
  width: 60%;
  height: 90%;
  @media ${device.tablet} {
    width: 100%;
    margin-top: 1rem;
  }
`
const Title = styled.h1`
  letter-spacing: calc(0.1vw + 1px);
  font-weight: 200;
  font-size: clamp(18px, 1.8em, 30px);
`
const Subtitle = styled.h2`
  font-weight: 600;
  font-size: clamp(16px, 3.1em, 25px);

  @media ${device.tablet} {
    width: 100%;
    font-size: clamp(12px, 1em, 22px);
  }
  padding-bottom: 0.5em;
  border-bottom: 3px solid white;
`

const Summary__nav = styled.ul`
  list-style: none;
  height: 8rem;
  padding: 1rem 0 1rem 0;
`

const Summary__links = styled.li`
  cursor: pointer;
  padding: 0.5rem 0 0.5rem 0;
  font-size: clamp(15px, 1em, 22px);
  color: #9e9e9e;

  &:active {
    color: white;
  }
`
const Copyright = styled.h2`
  text-align: right;
  color: gray;
  font-size: clamp(12px, 1em, 18px);
  font-weight: 400;
  height: 10%;
  @media ${device.tablet} {
    width: 100%;
    font-size: clamp(12px, 1em, 22px);
    text-align: center;
  }
`

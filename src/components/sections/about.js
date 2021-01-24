import React from "react"
import styled from "styled-components"
import null_tile from "../../images/about/null_tile.svg"
import { device } from "../layout/responsive/device"

export default function About() {
  return (
    <Section>
      <Title id="about">SOBRE NOSOTROS</Title>

      <Background>
        <Img
          src={null_tile}
          alt="Null Tile"
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-easing="ease"
        />
        <Text data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
          Creemos en un mejor futuro para la economía de
          <strong> República Dominicana</strong> y Latinoamérica, por eso
          impulsamos el desarrollo de toda clase de empresas para que con ayuda
          de la tecnología, puedan llegar a cada vez más personas y revolucionar
          los maravillosos servicios que las mismas ofrecen.
          <br /> <br />
          Nos enorgullece tener una cultura de honestidad y transparencia en
          todo lo que ofrecemos, desde nuestros servicios más técnicos a nuestro
          trato con las personas.
        </Text>
      </Background>
    </Section>
  )
}

const Section = styled.section`
  margin-top: 12vh;
  border-top: 1px solid #e5e5e5;
  padding: 35px 0;
  text-align: right;
`
const Title = styled.h1`
  font-weight: 700;
  padding-right: 3rem;
  @media ${device.tablet} {
    padding: 0;
    text-align: center;
    padding-bottom: 10px;
  }
`
const Background = styled.div`
  display: flex;
  background-color: black;
  color: white;

  padding: 50px 3rem;
  width: 100%;

  @media ${device.tablet} {
    display: flex;
    flex-flow: column-reverse;
    padding: 1rem 1rem !important;
    width: 100%;
  }
`
const Img = styled.img`
  width: 25%;
  margin-right: 1rem;
  @media ${device.tablet} {
    margin: 3rem;
    width: 60%;
    align-self: center;
  }
`
const Text = styled.p`
  display: inline-block;
  width: 75%;
  font-size: min(1.3em, 30px);
  @media ${device.tablet} {
    text-align: justify;
    width: 100%;
  }
`
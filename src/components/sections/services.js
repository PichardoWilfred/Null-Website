import React from "react"
import styled from "styled-components"
import { device } from "../layout/responsive/device"
import soft from "../../images/services/soft.svg"
import supp from "../../images/services/supp.svg"
import web from "../../images/services/web.svg"

export default function Services() {
  const services = [
    {
      id: 0,
      name: "Páginas Web",
      icon: web,
      description:
        "Sitios rápidos y estéticos con alto posicionamiento de búsqueda",
    },
    {
      id: 1,
      name: "Desarrollo de Software",
      icon: soft,
      description:
        "Sistemas empresariales de uso sencillo y funcionalidades múltiples.",
    },
    {
      id: 2,
      name: "Soporte técnico",
      icon: supp,
      description:
        "Reparación de equipos y optimización de laptops o computadores de escritorio",
    },
  ]

  return (
    <Section id="services">
      <Title>NUESTROS SERVICIOS</Title>
      <Service service={services} />
    </Section>
  )
}

const Section = styled.section`
  margin-top: 12vh;
  border-top: 1px solid #e5e5e5;
  padding: 35px clamp(0px, 10vw - 5rem, 10vw);

  @media ${device.tablet} {
    padding-top: 20px;
  }
`
const Title = styled.h1`
  font-weight: 700;
  @media ${device.tablet} {
    text-align: center;
    padding-bottom: 10px;
  }
`

const Service = ({ service }) => {
  const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    text-align: center;
  `

  const Frame_service = styled.div`
    display: inherit;
    flex-direction: column;
    background-color: black;
    color: white;

    align-items: center;
    justify-content: center;

    width: clamp(30%, 34vw, 33.3%);
    height: clamp(350px, 40vw, 1000px);
    border-left: 0.8px solid white;
    border-right: 0.8px solid white;

    font-size: min(1em, 18px);
    padding: 0 1rem;

    @media ${device.tablet} {
      height: 75vh;
      padding: 0 2.3rem;
      font-size: min(1.2em, 30px);
      border-left: 0;
      border-right: 0;
      border-bottom: 1px solid white;
      width: 100%;
    }
  `

  const Icon_service = styled.img`
    width: calc(1vw + 5.5rem);
    margin-bottom: 1rem;
  `

  const Title_service = styled.p`
    font-weight: 600;
    font-size: 1.1em;
  `

  const Desc_service = styled.p`
    font-weight: 300;
  `

  const lista = service.map(({ name, description, icon, id }) => (
    <Frame_service key={id}>
      <Icon_service src={icon} alt={name} />
      <Title_service>{name}</Title_service>
      <Desc_service>{description}</Desc_service>
    </Frame_service>
  ))
  return <Container>{lista}</Container>
}

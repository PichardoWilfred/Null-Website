import React from "react"
import styled from "styled-components"
import { device } from "../../layout/responsive/device"
import Form from "./forms/form"

export default function Contact() {
  return (
    <Section id="contact">
      <Title>CONTÁCTANOS</Title>
      <Form />
    </Section>
  )
}

//Contact email

//Elements
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 12vh;
  padding: 35px 0;
  border-top: 1px solid #e5e5e5;
`
const Title = styled.h1`
  font-weight: 700;
  padding-bottom: 0.5rem;
  text-align: center;
  @media ${device.tablet} {
    padding: 0 0;
    text-align: center;
  }
`

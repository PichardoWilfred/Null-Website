import React from "react"
import styled, { keyframes } from "styled-components"
import portrait from "../../images/portrait/portrait_bg.svg"
export default function Portrait() {
  return (
    <>
      <Section>
        <Title>NULL SYSTEMS</Title>
        <Subtitle>
          Provee el mejor servicio para la digitalización de su empresa
        </Subtitle>
      </Section>
    </>
  )
}
const duration = `0.8s`

const fade_in_bottom = keyframes`
  from {
    opacity:0;
    transform: translateY(60px);
  }

  to {
    opacity:1;  
    transform: translateY(0);

  }
`
const fade_in = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;  
  }
`

const Section = styled.section`
  background-color: black;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
  padding: 0 1.5rem 2rem 1.5rem;

  background-image: url(${portrait});
  background-repeat: no-repeat;
  background-size: clamp(33rem, 100vw, 73rem);
  background-position: left max(calc(65vw - 30rem), -3rem) bottom
    clamp(-22rem, -22vw, 10rem);
  animation: ${fade_in} 1s ease-out 1;
  z-index: 0; //for the animation to not overlay the navbar
`

const Title = styled.h1`
  //when loading
  animation: ${fade_in_bottom} ${duration} ease-out 1;

  letter-spacing: calc(0.5vw + 4px);
  margin-top: calc(1vw - 3rem);
  font-weight: 300;
  font-size: 1em;
`

const Subtitle = styled.h2`
  width: clamp(20rem, 55rem, 100%);
  font-weight: 600;
  font-size: 1.5em;
  animation: ${fade_in_bottom} ${duration} ease-out 1;
`

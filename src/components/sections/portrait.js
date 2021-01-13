import React from "react"
import styled, { keyframes } from "styled-components"
import portrait from "../../images/portrait/portrait_bg.svg"

export default function Portrait() {
  return (
    <>
      <Section>
        <Title>Null Systems</Title>
        <Subtitle>
          Provee el mejor servicio para la digitalización de su empresa
        </Subtitle>
      </Section>
      <Division></Division>
    </>
  )
}

const Section = styled.section`
  background-color: black;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;

  font-size: clamp(14px, 4vw, 2.4rem);

  background-image: url(${portrait});
  background-repeat: no-repeat;
  background-size: clamp(33rem, 100vw, 73rem);
  background-position: left max(calc(65vw - 30rem), -3rem) bottom
    clamp(-22rem, -22vw, 10rem);
`

const rotate = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;  
  }
`
const Title = styled.h1`
  //when loading
  animation: ${rotate} 0.5s ease-out 1;

  letter-spacing: calc(0.5vw + 4px);
  margin-top: calc(1vw - 3rem);
  font-weight: 300;
  text-transform: uppercase;
  font-size: 1em;
`

const Subtitle = styled.h2`
  width: clamp(20rem, 55rem, 100%);
  font-weight: 600;
  font-size: 1.5em;
`

const Division = styled.div`
  width: 100%;
  height: 10vh;
  &:after {
    content: "";
    display: block;
    background-color: red;
    height: 1px;
    width: 100%;
  }
`

import React from "react"
import styled, { keyframes } from "styled-components"
import { device } from "../../../layout/responsive/device"
//Form handler
import { useForm } from "react-hook-form"
//Importing Inputs
import { Input } from "./inputs"

export default function Form({ handler }) {
  const { register, errors, handleSubmit } = useForm({
    mode: "onTouched",
  })

  const form_attr = [
    {
      bold: true,
      placeholder: "Empresa",
      name: "enterprice",
      form_reference: register({
        minLength: { value: 4, message: "Mínimo 4 caracteres" },
        maxLength: { value: 120, message: "Máximo 120 caracteres" },
      }),
    },
    {
      placeholder: "Nombre del contacto",
      name: "name",
      form_reference: register({
        required: "Este campo es requerido.",
        minLength: { value: 10, message: "Mínimo 10 caracteres." },
        maxLength: { value: 120, message: "Máximo 120 caracteres." },
      }),
    },
    {
      placeholder: "Correo electrónico",
      name: "mail",
      form_reference: register({
        required: "Este campo es requerido.",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Ingrese una dirección de correo válida.",
        },
      }),
    },
    {
      placeholder: "Descripción del proyecto",
      name: "desc",
      form_reference: register({
        required: "Este campo es requerido.",
        minLength: { value: 40, message: "Mínimo 40 caracteres." },
        maxLength: { value: 820, message: "Máximo 820 caracteres." },
      }),
      big: true,
    },
  ]

  return (
    <Form__contact autoComplete="off" onSubmit={handleSubmit(handler)}>
      {form_attr.map(
        ({ big, bold, placeholder, name, form_reference }, index) => {
          return (
            <Input
              big={big}
              bold={bold}
              placeholder={placeholder}
              name={name}
              form_reference={form_reference}
              err={errors}
              key={index}
            />
          )
        }
      )}
      <ButtonInput type="submit">ENVIAR</ButtonInput>
    </Form__contact>
  )
}
const Form__contact = styled.form`
  display: flex;
  padding: 1rem 3rem;
  flex-flow: column wrap;
  width: clamp(4rem, 90%, 60rem);
  @media ${device.tablet} {
    padding: 0 0;
  }
`
const fade_out = keyframes`
  from {
    border: 2px solid white;
    background-color: black;
    color: white;

  }

  to {
    border: 2px solid black;
    background-color: white;
    color: black;
  }
`

const fade_in = keyframes`
  from {
    border: 2px solid black;
    background-color: white;
    color: black;


  }

  to {
    border: 2px solid white;
    background-color: black;
    color: white;
  }
`
const ButtonInput = styled.button`
  margin-top: 2rem;
  padding: 0.7rem;

  font-size: 1em;
  font-weight: 300;
  letter-spacing: calc(0.5vw + 4px);

  border-radius: 10px;

  //Animable specs
  color: white;
  background-color: black;
  border: 2px solid white;

  animation: ${fade_in} 400ms;
  &:active {
    animation: ${fade_out} 400ms;
  }
  outline: none;
  cursor: pointer;
`

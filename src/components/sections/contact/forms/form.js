import React from "react"
import styled, { css, keyframes } from "styled-components"
import { device } from "../../../layout/responsive/device"
import { useForm } from "react-hook-form"

export default function Form() {
  const { register, errors, handleSubmit } = useForm({ mode: "onTouched" })
  const onSubmit = data => console.log(data) //debbuging
  return (
    <Form__contact autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Inverted__label>
        <Label state>
          {errors.enterprice ? errors.enterprice?.message : "No obligatorio"}
        </Label>
        <Input
          name="enterprice"
          placeholder="Empresa"
          ref={register({
            minLength: { value: 4, message: "Mínimo 4 caracteres" },
            maxLength: { value: 120, message: "Máximo 120 caracteres" },
          })}
          bold
        />
      </Inverted__label>
      <Inverted__label>
        <Label state={errors.name}>
          {errors.name ? errors.name?.message : "Contact"}
        </Label>
        <Input
          name="name"
          placeholder="Nombre del Contacto"
          ref={register({
            required: "Este campo es requerido",
            minLength: { value: 10, message: "Mínimo 10 caracteres" },
            maxLength: { value: 120, message: "Máximo 120 caracteres" },
          })}
        />
      </Inverted__label>
      <Inverted__label>
        <Label state={errors.mail}>
          {errors.mail ? errors.mail?.message : "Mail"}
        </Label>
        <Input
          name="mail"
          placeholder="Correo Electrónico"
          ref={register({
            required: "Este campo es requerido",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Este correo no es válido",
            },
          })}
        />
      </Inverted__label>
      <Inverted__label>
        <Label state={errors.desc}>
          {errors.desc ? errors.desc?.message : "Desc"}
        </Label>
        <TextArea
          name="desc"
          placeholder="Descripción de su solicitud"
          state={errors.desc}
          ref={register({
            required: "Este campo es requerido",
            minLength: { value: 40, message: "Mínimo 40 caracteres" },
            maxLength: { value: 820, message: "Descripción muy extensa" },
          })}
        ></TextArea>
      </Inverted__label>
      <Button type="submit">ENVIAR</Button>
    </Form__contact>
  )
}
//Contact Form components---------------//enterprice//contact//email//prjct_desc
const input_border = "1.8px"

const Input__Styles = css`
  width: ${props =>
    props.bold ? "clamp(25rem, 30%, 35rem)" : "clamp(30rem, 45%, 50rem)"};
  padding: 0.7rem;
  margin-top: 1.1rem;
  font-size: min(1.2em, 25px);
  font-weight: ${props => (props.bold ? "700" : "400")};
  background-color: #eeeeee;
  border-radius: 10px;
  border: ${input_border} solid #eeeeee;
  transition: 180ms border ease-in-out;

  &::placeholder {
    color: #424242;
  }

  &:focus {
    outline: none;
    border: ${input_border} solid black;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`
const Form__contact = styled.form`
  display: flex;
  padding: 1rem 3rem;
  flex-flow: column wrap;
  width: clamp(4rem, 90%, 60rem);
  @media ${device.tablet} {
    padding: 0 0;
  }
`

//permanent label
const Label = styled.label`
  padding: 0.5rem 0rem 0rem 0.2rem;
  font-size: min(1em, 12px);
  visibility: ${props => (props.state ? `visible` : `hidden`)};
  /* opacity: ${props => (props.state ? `1` : `0`)}; */
  /* transition: opacity 400ms ease-out; */
`

const Input = styled.input`
  ${Input__Styles}
`
const TextArea = styled.textarea`
  ${Input__Styles}
  width: 100%;
  height: calc(10vh + 15rem);
  resize: none;
`

//Animation
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

const Button = styled.button`
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
  //asasdasd
  animation: ${fade_in} 400ms;
  &:active {
    animation: ${fade_out} 400ms;
  }

  outline: none;
  cursor: pointer;
`

const Inverted__label = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

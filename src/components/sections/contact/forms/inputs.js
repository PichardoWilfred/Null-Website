import React from "react"
import styled, { css } from "styled-components"
import { device } from "../../../layout/responsive/device"

export function Input({
  err,
  form_reference,
  name,
  placeholder,
  bold,
  big,
  size,
}) {
  return (
      <NullInput__container big={big} bold={bold} size={size}>
        {bold && <NullInput__Label>No obligatorio</NullInput__Label>}
        {!big ? (
          <Null_Input
            bold={bold}
            name={name}
            placeholder={placeholder}
            ref={form_reference}
          />
        ) : (
          <Null_TextArea
            name={name}
            placeholder={placeholder}
            ref={form_reference}
          ></Null_TextArea>
        )}
        <NullInput__Error>{err[name]?.message}</NullInput__Error>
      </NullInput__container>
   
  )
}

const NullInput__container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => props.size.desktop};
  @media ${device.tablet} {
    height: ${props => props.size.mobile};
    margin-bottom: 0.9em;
  }
  margin-bottom: 0.9em;
`

const border_size = "1.8px"

const NullInput__Styles = css`
  width: ${props =>
    props.bold ? "clamp(25rem, 30%, 35rem)" : "clamp(30rem, 45%, 50rem)"};
  padding: 0.7rem;

  font-size: min(1.2em, 25px);
  font-weight: ${props => (props.bold ? "700" : "400")};
  background-color: #eeeeee;
  border-radius: 10px;
  border: ${border_size} solid #eeeeee;
  transition: 180ms border ease-in-out;

  &::placeholder {
    color: #424242;
  }

  &:focus {
    outline: none;
    border: ${border_size} solid black;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`
const NullInput__Error = styled.label`
  padding: 0.3rem 0rem 0rem 0.2rem;
  font-size: min(1em, 12px);
  visibility: visible;
`
const NullInput__Label = styled.label`
  padding: 0rem 0rem 0.3rem 0.2rem;
  font-size: min(1em, 12px);
  visibility: visible;
`
const Null_Input = styled.input`
  ${NullInput__Styles}
`
const Null_TextArea = styled.textarea`
  ${NullInput__Styles}
  width: 100%;
  height: calc(10vh + 15rem);
  resize: none;
`

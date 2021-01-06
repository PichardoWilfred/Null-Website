import React from "react"
import Navbar from "./navbar"

import { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
  }
  main{
    margin-top: 69px;
  }
`

const layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    <main>{children}</main>
    <div className="footer"></div>
  </>
)
layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default layout

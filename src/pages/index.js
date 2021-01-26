import React from "react"
import Layout from "../components/layout/layout"
import Portrait from "../components/sections/portrait"
import Services from "../components/sections/services"
import About from "../components/sections/about"
import Contact from "../components/sections/contact/contact"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Inicio" />
      <Portrait />
      <Services />
      <About />
      <Contact />
    </Layout>
  )
}

export default IndexPage

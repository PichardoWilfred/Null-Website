import React from "react"
import Layout from "../components/layout/layout"
import Portrait from "../components/sections/portrait"
import Services from "../components/sections/services"
import About from "../components/sections/about"
import Contact from "../components/sections/contact/contact"
import SEO from "../components/seo"

const IndexPage = () => {
  // const sections = []
  // for (let i = 0; i < 3; i++) {
  //   sections.push(<Section key={i} number={i} />)
  // }

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

// const Section = ({ number }) => (
//   <div>
//     <h2>Title Example {number}</h2>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
//       expedita quibusdam quod nulla placeat ex nesciunt recusandae velit omnis
//       aperiam cupiditate sit fugit eum dolorum, in labore veritatis ad quas.
//     </p>
//   </div>
// )

export default IndexPage

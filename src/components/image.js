import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query thisImage {
      Image: file(relativePath: { eq: "/portrait/portrait_bg.svg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.Image?.childImageSharp?.fluid) {
    return <div>Not Found</div>
  }

  return <Img fluid={data.Image.childImageSharp.fluid} />
}

export default Image

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageQuery = ({ alt, className, imagen }) => {
  return (
    <StaticQuery
      query={
        graphql`
        query {
          allFile(filter: {relativeDirectory: {eq: "locucion"}}) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    originalName
                  }
                }
              }
            }
          }
        }

      `
      }

      render={data => {
        const image = data.allFile.edges.find(
          edge => {
            return edge.node.childImageSharp.fluid.originalName === imagen
          }
        )
        if (!image) {
          return null
        }

        return <Img
          fluid={image.node.childImageSharp.fluid}
          alt={alt}
          className={className} />
      }}
    />
  )
}

export default ImageQuery;
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MyImg = ({ alt, className, imagen }) => {
  return (
    <StaticQuery
      query={
        graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }

      `
      }

      render={data => {
        const image = data.allImageSharp.edges.find(
          edge => {
            return edge.node.fluid.originalName === imagen
          }
        )

        if (!image) {
          return null
        }

        return <Img
          fluid={image.node.fluid}
          alt={alt}
          className={className} />
      }}
    />
  )
}

export default MyImg;
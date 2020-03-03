import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
// compornents
import Img from 'gatsby-image'

const Image = ({ className, imagen, alt }) => {
  const data = useStaticQuery(graphql` 
  query {
    allImageSharp {
      edges {
        node {
          fluid (maxWidth: 591){
            ...GatsbyImageSharpFluid
            originalName
          }
          fixed (width: 591){
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
    }
  }
  `)
  const imageQuery = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === imagen
  )

  return (
    <Img
      className={className}
      style={{ width: '100%', margin: '0 auto', objectFit: 'contain' }}
      fluid={imageQuery.node.fluid}
      objectFit="none"
      // objectPosition="50% 50%"
      alt={alt}
    />
  )
}
export default Image
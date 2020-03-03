import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
// compornents
import Img from 'gatsby-image'

const Image = ({ className, imagen }) => {
  const data = useStaticQuery(graphql` 
  query {
    allImageSharp {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
            originalName
          }
          fixed (width: 591, height:354){
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
    }
  }
  `)
  const imageQuery = data.allImageSharp.edges.find(
    edge => edge.node.fixed.originalName === imagen
  )

  return (
    <Img
      className={className}
      style={{ width: '100%', margin: '0 auto' }}
      fixed={imageQuery.node.fixed}
      objectFit="contain"
      objectPosition="50% 50%"
      fadeIn="true"
    />
  )
}
export default Image
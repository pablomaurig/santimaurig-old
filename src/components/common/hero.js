import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { Grid, Typography, Container } from '@material-ui/core'

const Hero = () => {
  const data = useStaticQuery(graphql` 
    query HeroImage{
      image: file(relativePath: {eq: "hero-image.jpg"}) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const HeroContainer = styled.div`
    position: relative;
    background-color: #4c1e08;
    height: 100vh;
    background-size: cover;
    background-image: ${`url(${data.image.childImageSharp.fluid.src})`};
    &:before{
      position: absolute;
      left: 0;
      top: 0;
      right:0;
      bottom: 0;
      background: rgba(115, 57, 16, 0.5);
      content: "";
      z-index: 2;
    }
    .container{
      height: 100%;
      z-index: 3;
      position: relative;
    }
  `
  return (
    <HeroContainer className="hero" style={{ height: '100vh' }}>
      <Container className="container">
        <Grid container alignItems="center" style={{ height: '100%' }}>
          <Grid item xs={12}>
            <Typography align="center" variant="h2" style={{ color: "white" }}>LeckerBissen</Typography>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  )
}


export default Hero
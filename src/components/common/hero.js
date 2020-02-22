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
    border: 2rem solid white;
    box-sizing: border-box;

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
            <Typography align="center" variant="h2" style={{ color: "white" }}>IMPACTA EN TUS CLIENTES</Typography>
            <Typography align="center" variant="h4" style={{ color: "white" }}>CON UNA VOZ PROFESIONAL, NATURAL Y VERSATIL</Typography>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  )
}


export default Hero
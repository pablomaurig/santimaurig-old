import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { Grid, Typography, Container } from '@material-ui/core'

const Hero = ({ props }) => {
  const data = useStaticQuery(graphql` 
    query HeroImage{
      image: file(relativePath: {eq: "back-hero.png"}) {
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
    background-color: #fff;
    height: 100vh;
    background-size: cover;
    background-image: ${`url(${data.image.childImageSharp.fluid.src})`};
    border: 2rem solid #fff;
    box-sizing: border-box;
    
    .MuiTypography-h2{
      font-size: 3.75rem;
      @media screen and (max-width: 800px){
        font-size: 2.2rem;
      }
      @media screen and (max-width: 500px){
        font-size: 1.8rem;
      }
    }
    .MuiTypography-h4{
      font-size: 2.125rem;
      @media screen and (max-width: 800px){
        font-size: 1.125rem;
      }
      @media screen and (max-width: 500px){
        font-size: 1rem;
      }
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
          <Grid item xs={12} style={{ border: "10px solid", padding: "10px" }}>
            <Typography align="center" variant="h2" style={{ color: "#000" }}>{props.heroTop}</Typography>
            <Typography align="center" variant="h4" style={{ color: "#000" }}>{props.heroBottom}</Typography>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  )
}


export default Hero
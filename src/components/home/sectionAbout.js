import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
// compornents
import Img from 'gatsby-image'
import { Grid, Container, Box, Typography } from '@material-ui/core'


const SectionAbout = ({ titulo, texto, imagen, id }) => {
  const data = useStaticQuery(graphql` 
  query {
    allImageSharp {
      edges {
        node {
          fluid (maxWidth: 500, maxHeight: 330){
            ...GatsbyImageSharpFluid
            originalName
          }
          fixed (width: 500, height:400){
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
    <StyledBox id={id} component="section" py={10}>
      <Container>
        <Grid container spacing={3} justify="space-between">
          <Grid className='order' item xs={12} sm={6} md={4}>
            <Typography className='titleYear' align="left" gutterBottom variant="p" component="h2">
              {titulo}
            </Typography>
            <Typography align="justify" gutterBottom component="p">
              {texto}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            {!!imageQuery &&
              <Img
                style={{ width: '100%', margin: '0 auto' }}
                fluid={imageQuery.node.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                fadeIn="true"
              />
            }
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  )
}
export default SectionAbout

const StyledBox = styled(Box)`
  @media screen and (min-width: 600px){
    .order{
      order: 2;
    }
  }
  .titleYear{
    position: relative;
    font-weight: bold;
    font-size: 1.1em;
    font-family: "Roboto Condensed", sans-serif;
    margin-bottom:1.5em;
    margin-top:1.5em;
    &:before{
      content: "1985";
      position: absolute;
      right: 0;
      top: -.6em;
      color: rgba(0,0,0,.1);
      font-weight: bold;
      font-size:6rem;
      font-family: "Oswald", Arial, Helvetica, sans-serif;
    }
  }
`
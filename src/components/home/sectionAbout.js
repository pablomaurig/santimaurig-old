import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
// compornents
import Img from 'gatsby-image'
import { Grid, Container, Box, Typography } from '@material-ui/core'


const SectionAbout = ({ titulo, texto, imagen, id }) => {
  const data = useStaticQuery(graphql` 
  query {
    allImageSharp {
      edges {
        node {
          fluid {
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
    edge => edge.node.fixed.originalName === imagen
  )

  return (
    <Box id={id} component="section" py={5}>
      <Container>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={6}>
            <Typography align="center" gutterBottom variant="h5" component="h2">
              {titulo}
            </Typography>
            <Typography align="center" gutterBottom component="p">
              {texto}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            {!!imageQuery &&
              <Img
                style={{ width: '100%', margin: '0 auto' }}
                fixed={imageQuery.node.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
                fadeIn="true"
              />
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default SectionAbout
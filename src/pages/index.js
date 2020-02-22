import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/common/layout'
import SEO from '../components/common/seo'
import Hero from '../components/common/hero'
import SectionAbout from '../components/home/sectionAbout'
import { Grid, Divider, Container, Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query Home{
      homeJson {
        descripcion
        imagen
      }
      allProductosJson {
        edges {
          node {
            name
            excerp
            image
            path
          }
        }
      }
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
  return (
    < Layout >
      <SEO title="Home" />
      <div>pedrito</div>
      <Hero />
      <SectionAbout texto={data.homeJson.descripcion} imagen={data.homeJson.imagen} />
      <Container><Divider /></Container>
      <Box component="section" py={5}>
        <Container>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12}>
              <Typography align="center" gutterBottom variant="h5" component="h2">
                Nuestros productos
              </Typography>
            </Grid>

            {data.allProductosJson.edges.map((product) => {

              let imageQuery = data.allImageSharp.edges.find(
                edge => edge.node.fixed.originalName === product.node.image
              )
              return (
                <Grid item xs={12} sm={6} key={product.node.name}>
                  <Link to={`/${product.node.path}`}>
                    <Card >
                      <CardActionArea>
                        <CardMedia
                          style={{ backgroundImage: `url(${imageQuery.node.fixed.src})`, height: '260px' }}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {product.node.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {product.node.excerp}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>)
            }
            )}

          </Grid>
        </Container>
      </Box>
      <Divider />
    </Layout >
  )
}

export default IndexPage

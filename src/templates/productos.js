import React from 'react'
import { graphql } from 'gatsby'
//components
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'
import HeroHalf from '../components/common/HeroHalf'
import SectionAbout from '../components/common/sectionAbout'
import Producto from '../components/common/Producto'
import { Grid, Divider, Container, Box, Typography } from '@material-ui/core'

export default (data) => {
  const productos = data.data.allProductosJson.edges[0].node
  return (
    <Layout>
      <SEO title="Page two" />
      <HeroHalf
        align="flex-end"
        text={productos.name}
        variant="h3"
      />
      <SectionAbout texto={productos.content} imagen={productos.image} />
      <Container><Divider /></Container>
      <Box component="section" py={5}>
        <Container>
          <Grid
            container
            spacing={3}
            justify="center"
            alignItems="stretch">
            <Grid item xs={12}>
              <Typography align="center" gutterBottom variant="h5" component="h2">
                Nuestros productos
            </Typography>
            </Grid>
            {productos.productos.map((producto, key) => <Producto
              key={key}
              nombre={producto.name}
              descripcion={producto.excerp}
              imagen={producto.prod_image}
            />)}
          </Grid>
        </Container>
      </Box>
      <HeroHalf
        align="center"
        text={productos.path === 'barritas' ? 'Probá también los brownies!' : 'Probá también las barritas!'}
        variant="h4"
      />


    </Layout >

  )
}
export const data = graphql`
query($id: String!) {
  allProductosJson(filter: {id: { eq: $id }}) {
    edges{
      node{
        path
        name
        content
        image
        productos{
          name
          excerp
          prod_image
        }
      }
    }
  }
}
`
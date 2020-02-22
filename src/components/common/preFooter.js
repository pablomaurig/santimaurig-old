import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { Grid, Container, Box, Typography, Button } from '@material-ui/core'

const PreFooter = () => {
  const data = useStaticQuery(graphql`
  query papu{
    allProductosJson {
      edges {
        node {
          name
          path
        }
      }
    }
  }
`)
  return <PFooter>
    <Box component="section" py={5}>
      <Container>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={2}>
            <Typography gutterBottom variant="h6" component="h3">
              LeckerBissen
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography gutterBottom variant="h6" component="h3">
              Productos
            </Typography>

            {data.allProductosJson.edges.map((menuItem) =>
              <div key={menuItem.node.name}>
                <Button component={Link} to={`/${menuItem.node.path}`} color="inherit">{menuItem.node.name}</Button>
              </div>
            )}
          </Grid>
          <Grid item xs={12} sm={5} style={{ textAlign: 'right' }}>
            <Typography gutterBottom variant="h6" component="h3">
              Contacto
            </Typography>
            <Typography gutterBottom variant="p" component="p">
              info@leckerbissen.com.ar
            </Typography>
            <Typography gutterBottom variant="p" component="p">
              +54 11 5582 9412
            </Typography>
            <Typography gutterBottom variant="p" component="p">
              Av. directorio 0000 - CABA - Argentina
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </PFooter>
}
const PFooter = styled.div`
  .MuiButton-root{
    padding: 0;
    text-transform: capitalize;

    &:hover{
      background: none;
    }
  }
`;

export default PreFooter
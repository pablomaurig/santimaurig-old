import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

const Producto = ({ nombre, descripcion, imagen }) => {
  const data = useStaticQuery(graphql` 
  query {
    allImageSharp {
      edges {
        node {
          fluid {
            src
            srcSet
            originalName
          }
          fixed (width: 900, height:700){
            src
            srcSet
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
    < Grid item xs={12} sm={4} style={{ display: 'flex' }}>
      <Card>
        <CardActionArea>
          {!!imageQuery &&
            <CardMedia
              style={{ backgroundImage: `url(${imageQuery.node.fixed.src})`, height: '260px' }}
            />
          }
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {nombre}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default Producto
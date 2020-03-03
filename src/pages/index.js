import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
// components
import Img from "gatsby-image"
import Image from '../components/common/image'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'
import Hero from '../components/common/hero'
import SectionAbout from '../components/home/sectionAbout'
import { Grid, Divider, Container, Box, Typography } from '@material-ui/core'
import siteConfig from '../data/siteConfig'

const IndexPage = () => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', {
      offset: 64
    })
  }
  const data = useStaticQuery(graphql`
    query Home{
      file(name: {eq: "barritas"}) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
`)
  return (
    < Layout >
      <StyleContainer>
        <SEO
          title="Santiago Maurig"
          description="" />
        <Hero props={siteConfig} />
        <Box component="section" py={5}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12}>
                <Typography align="center" gutterBottom variant="h5" component="h2">
                  Marcas
              </Typography>
              </Grid>
              {siteConfig.brandsTop.map((brand, i) =>
                <Grid key={i} item xs={6} sm={4} md={3}>
                  <Image alt={brand.alt} className='img-responsive' imagen={brand.image} />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
        <Container><Divider /></Container>
        <Box id='locucion' component="section" py={5}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} sm={3}>
                <Typography align="center" gutterBottom variant="h5" component="h2">
                  Locución
              </Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Grid container spacing={3} justify="center">
                  <Grid item xs={6} sm={4}>
                    <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container><Divider /></Container>
        <Box component="section" py={5}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} sm={5}>
                <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
              </Grid>
              <Grid item xs={12} sm={7}>
                <Typography align="left" gutterBottom variant="h5" component="h2">
                  Combate
                </Typography>
                <Typography align="left" gutterBottom component="p">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} sm={5}>
                <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
              </Grid>
              <Grid item xs={12} sm={7}>
                <Typography align="left" gutterBottom variant="h5" component="h2">
                  Vorterix
                </Typography>
                <Typography align="left" gutterBottom component="p">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container><Divider /></Container>
        <Box component="section" py={5}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12}>
                <Typography align="center" gutterBottom variant="h5" component="h2">
                  Marcas 2
              </Typography>
              </Grid>
              {siteConfig.brandsTop.map((brand, i) =>
                <Grid key={i} item xs={6} sm={4} md={3}>
                  <Image alt={brand.alt} className='img-responsive' imagen={brand.image} />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
        <Container><Divider /></Container>
        <SectionAbout id='about' titulo={siteConfig.aboutTitle} texto={siteConfig.about} imagen={siteConfig.aboutImage} />
        <Box component="section" py={5}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} sm={3} style={{ order: '2' }}>
                <Typography align="center" gutterBottom variant="h5" component="h2">
                  Doblaje
              </Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Grid container spacing={3} justify="center">
                  <Grid item xs={6} sm={4}>
                    <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Img className='img-responsive' fixed={data.file.childImageSharp.fixed} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container><Divider /></Container>
        <Box id='docencia' component="section" py={5}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} sm={8} >
                <Typography align="center" gutterBottom variant="h5" component="h2">
                  Docencia
                </Typography>
                <Typography align="center" gutterBottom component="p">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                </Typography>
              </Grid>
              <Grid container spacing={3} justify="center">
                <Grid item xs={12} sm={4} >
                  <Typography align="center" gutterBottom component="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </Typography>
                </Grid>
                <Grid item xs={12} sm={4} >
                  <Typography align="center" gutterBottom component="p">
                    Lorem Ipsum is simply dummy ty of type and scrambled it to make a type specimen book. It has survived not only
                </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box component="section" py={5}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12}>
                <Typography align="center" gutterBottom variant="h5" component="h2">
                  Contacto
              </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </StyleContainer>
    </Layout >
  )
}
const StyleContainer = styled.div`
  .img-responsive{
    width: 100%;
    height: auto;
    
  }
`
export default IndexPage

import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// components
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'
import Hero from '../components/common/hero'
import SectionAbout from '../components/home/sectionAbout'
import { Grid, Divider, Container, Box, Typography } from '@material-ui/core'
import siteConfig from '../data/siteConfig'
import ImageQuery from '../components/common/imageQuery'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

const IndexPage = () => {
  const [open, setOpen] = useState(false)
  const [videoId, setVideoId] = useState('')

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', {
      offset: 64
    })
  }
  const data = useStaticQuery(graphql` 
    query backgroundImages{
      locucion: file(name: {eq: "locucion"}) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid (maxWidth: 1400){
            ...GatsbyImageSharpFluid
          }
        }
      }
      programas: file(name: {eq: "programas"}) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid (maxWidth: 1400){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const BoxLocucion = styled(Box)`
    background-color: #E4EAE6;
    background-size: cover;
    background-image: ${`url(${data.locucion.childImageSharp.fluid.src})`};
    background-blend-mode: screen;
  `
  const BoxProgramas = styled(Box)`
    background-size: cover;
    background-image: ${`url(${data.programas.childImageSharp.fluid.src})`};
  `
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
                  {siteConfig.clave}
                </Typography>
              </Grid>
              {siteConfig.brandsTop.map((brand, i) =>
                <Grid key={i} item xs={4} sm={3} md={2}>
                  <ImageQuery alt={brand.alt} className='img-responsive' imagen={brand.image} />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
        <BoxLocucion id='locucion' component="section" py={10}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} sm={4} lg={3}>
                <Typography align="left" gutterBottom variant="h5" component="h2">
                  {siteConfig.locucionTitle}
                </Typography>
                {siteConfig.locucionReeles.map((lreel, key) =>

                  <Typography key={key} align="left" gutterBottom component="p">
                    <span className='link' onClick={() => {
                      setVideoId(lreel.id)
                      handleOpen()
                    }} onKeyPress={() => {
                      setVideoId(lreel.id)
                      handleOpen()
                    }} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>{lreel.name}</span>
                  </Typography>

                )}

              </Grid>
              <Grid item xs={12} sm={8} lg={9}>
                <Grid container spacing={3} justify="left">
                  {siteConfig.locucionWork.map((work, key) =>
                    <Grid item xs={6} sm={4} lg={3} key={key}>
                      <div className='link' onClick={() => {
                        setVideoId(work.id)
                        handleOpen()
                      }} onKeyPress={() => {
                        setVideoId(work.id)
                        handleOpen()
                      }} role="button" tabIndex="0" style={{ display: 'inline-flex', cursor: 'pointer' }}>
                        <img style={{ marginBottom: '0' }} src={`https://img.youtube.com/vi/${work.id}/0.jpg`} alt={work.name} />
                      </div>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </BoxLocucion>
        <Box component="section" pt={10} pb={2}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} style={{ maxWidth: '90%' }}>
                <Typography className='enjoy' align="center" gutterBottom component="p">
                  {siteConfig.enjoy}
                </Typography>
                <Typography className='love' align="center" gutterBottom component="p">
                  {siteConfig.love}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <BoxProgramas component="section" pt={15} pb={10}>
          <Container>
            {siteConfig.featuredWork.map((work, key) =>
              <Grid key={key} container spacing={3} justify="center" style={{ marginBottom: '1em' }}>
                <Grid item xs={12} sm={4}>
                  <ImageQuery alt={work.title} className='img-responsive' imagen={work.image} />
                </Grid>
                <Grid item xs={12} sm={8} className='box-programa'>
                  <Typography align="left" gutterBottom variant="h5" component="h2">
                    {work.title}
                  </Typography>
                  <Typography align="left" gutterBottom component="p">
                    {work.rol}
                  </Typography>
                  <Typography align="left" gutterBottom component="p"
                    dangerouslySetInnerHTML={{ __html: work.staff }}></Typography>
                </Grid>
              </Grid>
            )}
          </Container>
        </BoxProgramas>
        <Box component="section" py={5}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12}>
                <Typography align="center" gutterBottom variant="h5" component="h2">
                  Marcas 2
              </Typography>
              </Grid>
              {siteConfig.brandsBottom.map((brand, i) =>
                <Grid key={i} item xs={4} sm={3} md={2}>
                  <ImageQuery alt={brand.alt} className='img-responsive' imagen={brand.image} />
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
              <Grid item xs={12} sm={4} lg={3} className='doblaje-item'>
                <Typography align="left" gutterBottom variant="h5" component="h2">
                  {siteConfig.doblajeTitle}
                </Typography>
                {siteConfig.doblajeReeles.map((dreel, key) =>

                  <Typography key={key} align="left" gutterBottom component="p">
                    <span className='link' onClick={() => {
                      setVideoId(dreel.id)
                      handleOpen()
                    }} onKeyPress={() => {
                      setVideoId(dreel.id)
                      handleOpen()
                    }} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>{dreel.name}</span>
                  </Typography>

                )}
              </Grid>
              <Grid item xs={12} sm={8} lg={9}>
                <Grid container spacing={3} justify="left">
                  {siteConfig.doblajeWork.map((work, key) =>
                    <Grid item xs={6} sm={4} lg={3} key={key}>
                      <div className='link' onClick={() => {
                        setVideoId(work.id)
                        handleOpen()
                      }} onKeyPress={() => {
                        setVideoId(work.id)
                        handleOpen()
                      }} role="button" tabIndex="0">
                        <img src={`https://img.youtube.com/vi/${work.id}/0.jpg`} alt={work.name} />
                      </div>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box id='docencia' component="section" py={5} style={{ backgroundColor: "#FFE3E5" }}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} sm={8} >
                <Typography align="center" gutterBottom variant="h5" component="h2">
                  {siteConfig.teachingTitle}
                </Typography>
                <Typography align="center" gutterBottom component="p">
                  {siteConfig.teaching}
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
      >
        <DialogC id="alert-dialog-description">
          <iframe title="modal" width="560" height="315" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </DialogC>
      </Dialog>
    </Layout >
  )
}
const StyleContainer = styled.div`
  .MuiTypography-h1,
  .MuiTypography-h2,
  .MuiTypography-h3,
  .MuiTypography-h4,
  .MuiTypography-h5,
  .MuiTypography-h6{
    font-family: "Oswald", Arial, Helvetica, sans-serif;
  }
  .MuiTypography-body1{
  font-family: "Roboto Condensed", sans-serif;
  }
  .img-responsive{
    width: 100%;
    height: auto;
    
  }
  .enjoy{
    font-size: 2em;
    line-height: 1.2em;
  }
  .love{
    font-size: 1.35em;
    line-height: 1.2em;
  }
  @media screen and (max-width: 500px){
    .enjoy{
      font-size: 1.5em;
    }
    .love{
      font-size: 1.1em;
    }
  }
  @media screen and (min-width: 768px){
    .box-programa{
      padding-top: 1.5em!important;
    }
  }
  
  @media screen and (min-width: 600px){
    .doblaje-item{
      order: 2;
      *{
        text-align: right;
      }
    }
  }
  .doblaje-item{

  }
`
const DialogC = styled(DialogContent)`
    padding: 0!important;
    iframe{
      margin: 0;
      margin-bottom: -7px;
    }
`
export default IndexPage

import React, { useState } from 'react'
import styled from 'styled-components'
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
        <Box id='locucion' component="section" py={5} style={{ backgroundColor: "#E4EAE6" }}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} sm={3}>
                <Typography align="center" gutterBottom variant="h5" component="h2">
                  Locución
              </Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Grid container spacing={3} justify="center">
                  {siteConfig.locucionWork.map((work, key) =>
                    <Grid item xs={6} sm={4} key={key}>
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
        <Box component="section" py={5} style={{ backgroundColor: "#F3F0DF" }}>
          <Container>
            {siteConfig.featuredWork.map((work, key) =>
              <Grid key={key} container spacing={3} justify="center">
                <Grid item xs={12} sm={4}>
                  <ImageQuery alt={work.title} className='img-responsive' imagen={work.image} />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography align="left" gutterBottom variant="h5" component="h2">
                    {work.title}
                  </Typography>
                  <Typography align="left" gutterBottom component="p">
                    {work.rol}
                  </Typography>
                  <Typography align="left" gutterBottom component="p">
                    {work.staff}
                  </Typography>
                </Grid>
              </Grid>
            )}
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
              <Grid item xs={12} sm={3} style={{ order: '2' }}>
                <Typography align="center" gutterBottom variant="h5" component="h2">
                  Doblaje
              </Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Grid container spacing={3} justify="center">
                  {siteConfig.doblajeWork.map((work, key) =>
                    <Grid item xs={6} sm={4} key={key}>
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
`
const DialogC = styled(DialogContent)`
    padding: 0!important;
    iframe{
      margin: 0;
      margin-bottom: -7px;
    }
`
export default IndexPage

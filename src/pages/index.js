import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import SVG from 'react-inlinesvg'
// components
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'
import Hero from '../components/common/hero'
import SectionAbout from '../components/home/sectionAbout'
import { Grid, Container, Box, Typography, Button } from '@material-ui/core'
import siteConfig from '../data/siteConfig'
import ImageQuery from '../components/common/imageQuery'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { FaYoutubeSquare, FaInstagram, FaTwitterSquare, FaFacebookSquare, FaRegEnvelope, FaLinkedin } from "react-icons/fa"
import logo from '../images/logo-santiago-maurig.svg'

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
      doblaje: file(name: {eq: "doblaje"}) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid (maxWidth: 1400){
            ...GatsbyImageSharpFluid
          }
        }
      }
      docencia: file(name: {eq: "docencia"}) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid (maxWidth: 1400){
            ...GatsbyImageSharpFluid
          }
        }
      }
      contacto: file(name: {eq: "contacto"}) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid (maxWidth: 1400){
            ...GatsbyImageSharpFluid
          }
        }
      }
      c1985: file(name: {eq: "1985"}) {
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
    background-position: center;
  `
  const BoxProgramas = styled(Box)`
    background-size: cover;
    background-position-x: center;
    background-image: ${`url(${data.programas.childImageSharp.fluid.src})`};
  `
  const BoxDoblaje = styled(Box)`
    background-color: #b5c0b9;
    background-size: cover;
    background-position: center;
    background-image: ${`url(${data.doblaje.childImageSharp.fluid.src})`};
    background-blend-mode: screen;
  `
  const BoxDocencia = styled(Box)`
    background-size: cover;
    background-color: #FFE3E5;
    background-position-x: center;
    background-image: ${`url(${data.docencia.childImageSharp.fluid.src})`};
  `
  const BoxContacto = styled(Box)`
    background-size: cover;
    background-color: #FFE3E5;
    background-position-x: right;
    background-position-y: bottom;
    background-image: ${`url(${data.contacto.childImageSharp.fluid.src})`};
    @media screen and (min-width: 768px){
      .MuiTypography-h5{
      font-size: 2.125rem;
      }
      .span{
        font-size: 1.3rem;
      }
      .email{
        font-size: 1.4rem;
      }
    }

  `
  const Box1985 = styled(SectionAbout)`
    background-size: cover;
    background-color: #FFE3E5;
    background-position-x: center;
    background-image: ${`url(${data.c1985.childImageSharp.fluid.src})`};
  `
  return (
    < Layout >
      <StyleContainer>
        <SEO
          title="Santiago Maurig"
          description="" />
        <Hero props={siteConfig} />
        <Box component="section" pt={2} pb={10}>
          <Container style={{ maxWidth: '930px' }}>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12}>
                <Typography className='workLove' align="center" gutterBottom component="p"
                  dangerouslySetInnerHTML={{ __html: siteConfig.clave }}></Typography>
              </Grid>
              {siteConfig.brandsTop.map((brand, i) =>
                <Grid key={i} item xs={4} sm={2} md={2}>
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
                <Typography align="left" gutterBottom variant="h4" component="h2">
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
                  {siteConfig.locucionWork.slice(0, 12).map((work, key) =>
                    <Grid item xs={6} sm={4} lg={3} key={key}>
                      <div className='link' onClick={() => {
                        setVideoId(work.id)
                        handleOpen()
                      }} onKeyPress={() => {
                        setVideoId(work.id)
                        handleOpen()
                      }} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>
                        <ImageQuery alt={work.name} className='img-responsive' imagen={work.thumnail} />
                      </div>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={0} style={{ marginTop: '2rem' }} justify="center">
              <Grid item>
                <Link to='/#contacto'><Button className="squareButton" variant="outlined">{siteConfig.locucionButton}</Button></Link>
              </Grid>
            </Grid>
          </Container>
        </BoxLocucion>
        <Box component="section" pt={13} pb={8}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} style={{ maxWidth: '90%' }} align="center">
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
              <Grid key={key} container spacing={3} justify="center" style={{ marginBottom: '1em', maxWidth: '1000px' }}>
                <Grid item xs={12} sm={4}>
                  <div className='link' onClick={() => {
                    setVideoId(work.id)
                    handleOpen()
                  }} onKeyPress={() => {
                    setVideoId(work.id)
                    handleOpen()
                  }} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>
                    <ImageQuery alt={work.title} className='img-responsive' imagen={work.image} />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} className='box-programa'>
                  <Typography align="left" style={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="h2">
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
            <Grid container spacing={0} style={{ marginTop: '2rem' }} justify="center">
              <Grid item>
                <Link to='/#contacto'><Button className="squareButton" variant="outlined">{siteConfig.teamWork}</Button></Link>
              </Grid>
            </Grid>
          </Container>
        </BoxProgramas>
        <Box component="section" py={10}>
          <Container style={{ maxWidth: '930px' }}>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12}>
                <Typography className='workLove' align="center" gutterBottom component="p"
                  dangerouslySetInnerHTML={{ __html: siteConfig.workLove }}></Typography>
              </Grid>
              {siteConfig.brandsBottom.map((brand, i) =>
                <Grid key={i} item xs={4} sm={2} md={2}>
                  <ImageQuery alt={brand.alt} className='img-responsive' imagen={brand.image} />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
        <BoxDoblaje id="doblaje" component="section" py={10}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} sm={4} lg={3} className='doblaje-item'>
                <Typography align="left" gutterBottom variant="h4" component="h2">
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
                  {siteConfig.doblajeWork.slice(0, 12).map((work, key) =>
                    <Grid item xs={6} sm={4} lg={3} key={key}>
                      <div className='link' onClick={() => {
                        setVideoId(work.id)
                        handleOpen()
                      }} onKeyPress={() => {
                        setVideoId(work.id)
                        handleOpen()
                      }} role="button" tabIndex="0">
                        <ImageQuery alt={work.name} className='img-responsive' imagen={work.thumnail} />
                      </div>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={0} style={{ marginTop: '2rem' }} justify="center">
              <Grid item>
                <Link to='/#contacto'><Button className="squareButton" variant="outlined">{siteConfig.doblajeButton}</Button></Link>
              </Grid>
            </Grid>
          </Container>
        </BoxDoblaje>
        <Box component="section" py={13}>
          <Container>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} style={{ maxWidth: '90%' }} align="center">
                <Typography className='enjoy' align="center" gutterBottom component="p">
                  {siteConfig.theVoice}
                </Typography>
                <Typography className='love' align="center" gutterBottom component="p">
                  {siteConfig.voiceChannel}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <BoxDocencia id='docencia' component="section" py={12}>
          <Container style={{ maxWidth: '800px' }}>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} sm={8}>
                <Typography align="center" gutterBottom variant="h4" component="h2">
                  {siteConfig.teachingTitle}
                </Typography>
                <Typography align="center" gutterBottom component="p" style={{ maxWidth: '410px', margin: '0 auto' }}
                  dangerouslySetInnerHTML={{ __html: siteConfig.teaching }}></Typography>
              </Grid>
              <Grid container spacing={3} justify="center" align="center">
                <Grid item xs={12} >
                  <Typography className="experience" align="center" variant="h5" component="h2" style={{ marginTop: '1em' }}>
                    EXPERIENCIA LABORAL
                    </Typography>
                </Grid>
                {siteConfig.experience.map(exp =>
                  <Grid item xs={12} sm={4} >
                    <Typography align="center" gutterBottom component="p"
                      dangerouslySetInnerHTML={{ __html: exp.work }}></Typography>
                  </Grid>
                )}
              </Grid>
              <Grid container spacing={0} style={{ marginTop: '2rem' }} justify="center">
                <Grid item>
                  <Link to='/#contacto'><Button className="squareButton" variant="outlined">{siteConfig.teachingButton}</Button></Link>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </BoxDocencia>
        <Box1985 titulo={siteConfig.aboutTitle} texto={siteConfig.about} imagen={siteConfig.aboutImage} />
        <BoxContacto id="contacto" component="section" py={10}>
          <Container>
            <Grid container spacing={3} justify="left">
              <Grid item xs={12} className="object">
                <Typography align="left" gutterBottom variant="h5" component="h2" style={{ marginBottom: "2rem" }}
                  dangerouslySetInnerHTML={{ __html: siteConfig.contactTitle }}></Typography>
                <Typography className="span" align="left" gutterBottom component="p" style={{ marginBottom: "2rem" }}
                  dangerouslySetInnerHTML={{ __html: siteConfig.contactObjective }}></Typography>
                <Typography align="right" gutterBottom variant="h5" component="h2"
                  dangerouslySetInnerHTML={{ __html: siteConfig.contact }}></Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3} justify="end" alignItems="flex-end" style={{ marginTop: "2rem" }}>
              <Grid item xs={12} sm={6}>
                <Typography align="left" className='email' gutterBottom component="p">
                  <a className="ic-contact" href="mailto:santiagomaurig@gmail.com"><FaRegEnvelope /><span>santiagomaurig@gmail.com</span></a>
                </Typography>
                <Typography className="network" align="left" gutterBottom component="p">
                  <a href="https://www.youtube.com/channel/UCY7ItejXlm4FcsDkkJk7Eig" target="_blank" rel="noopener noreferrer"><FaYoutubeSquare /></a>
                  <a href="https://www.instagram.com/santimaurig/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href=" https://twitter.com/santimaurig?lang=es" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
                  <a href="https://www.facebook.com/pages/category/Artist/Santiago-Maurig-442741989170516/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
                  <a href="https://www.linkedin.com/in/santiago-maurig-a83a40111" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} align="right">
                <SVG src={logo} className="svg-logo" />
              </Grid>
            </Grid>
          </Container>
        </BoxContacto>
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
    margin-bottom:1.5rem;
  }
  .love{
    font-size: 1.7em;
    line-height: 1.2em;
    color: #fff;
    background: #000;
    display: inline-flex;
    padding: 3px 5px;
  }
  .workLove{
    font-size: 1.85em;
    line-height: 1.2em;
    /* font-weight:bold; */
    p{
      margin-bottom:0.2rem;
    }
  }
  @media screen and (max-width: 500px){
    .enjoy{
      font-size: 1.5em;
    }
    .workLove,
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
  .experience{
    background: black;
    display:inline-flex;
    color: #fff;
    line-height: 1.3em;
    padding: 0 .2em;
    font-family: "Roboto Condensed", sans-serif;
  }
  .object{
    max-width:780px;
    .span{
      span{
        font-size:1.4em;
        background: black;
        color: #fff;
        letter-spacing: 0.1em;
      } 
    }
  }
  #docencia p{
    font-size: 1.2rem;
  }
  .svg-logo{
    width: 160px;
      @media screen and (min-width: 540px){
        width: 220px;
      }
    height: auto;
    svg{
      width: 100%;
    }
    path{
    fill: #000;
    }
  }
  .ic-contact{
    display: flex;
    align-items: center;
    span{
      margin-left: .5em;
    }
  }
  .network{
    display: flex;
    align-items: center;
    a{
      margin-right:.5em;
      font-size: 2em;
    }
  }
  .squareButton{
    border-radius: 0;
    border:6px solid black;
    font-weight:bold;
    font-size:1.3rem;
    padding: .1rem 2.2rem;
  }
  .link{
    cursor: pointer;
    &:hover .img-responsive{
      opacity: .8;
      box-shadow: 0 0 15px inset rgba(0,0,0,.05);
    }
  }
  p .link:hover{
    text-decoration: underline;
  }
`
const DialogC = styled(DialogContent)`
    padding: 0!important;
    iframe{
      margin: 0;
      margin-bottom: -7px;
      width:280px;
      height:157px;
      @media screen and (min-width: 374px){
        width:320px;
        height:168px;
      }
      @media screen and (min-width: 540px){
        width:450px;
        height:253px;
      }
      @media screen and (min-width: 768px){
        width:599px;
        height:337px;
      }
    }
`
// width = "560" height = "315"

export default IndexPage

import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
// components
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Hidden from '@material-ui/core/Hidden'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import logo from '../../images/logo-santiago-maurig.svg'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  return (<StyledContainer>
    <AppBar
      elevation={0}
      className='header'
    >
      <Toolbar className="headerGrid">
        <div>
          <Hidden mdUp>
            <IconButton
              style={{ marginLeft: 'auto' }}
              color="inherit"
              aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to={`/#locucion`}>
                <MenuItem onClick={handleClose}>Locución</MenuItem>
              </Link>
              <Link to={`/#doblaje`}>
                <MenuItem onClick={handleClose}>Doblaje</MenuItem>
              </Link>
              <Link to={`/#docencia`}>
                <MenuItem onClick={handleClose}>Docencia</MenuItem>
              </Link>
              <Link to={`/#contacto`}>
                <MenuItem onClick={handleClose}>contacto</MenuItem>
              </Link>
            </Menu>
          </Hidden>
        </div>
        <div>
          <div className='nav-brand'>
            <Link className='brand' to={`/`}>
              <SVG src={logo} className="svg-logo" />
            </Link>
          </div>
        </div>
        <div className='nav'>
          <Hidden smDown>
            <Typography className='nav-bar' style={{ marginLeft: 'auto', marginRight: '10px' }}>
              <Link activeClassName='active' className='nav-link' to={`/#locucion`}>Locución</Link>
            </Typography>
            <Typography className='nav-bar' style={{ marginRight: '10px' }}>
              <Link partiallyActive={true} activeClassName='active' className='nav-link' to={`/#doblaje`}>Doblaje</Link>
            </Typography>
            <Typography className='nav-bar' style={{ marginRight: '10px' }}>
              <Link activeClassName='active' className='nav-link' to={`/#docencia`}>Docencia</Link>
            </Typography>
            <Typography className='nav-bar'>
              <Link activeClassName='active' className='nav-link' to={`/#contacto`}>Contacto</Link>
            </Typography>
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  </StyledContainer>)
}

const StyledContainer = styled.div`
  header{
    box-shadow: 0 3px 5px rgba(0,0,0,.1);
  }
  .headerGrid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (min-width: 768px){
      grid-template-columns: 1fr 1fr 1fr;
    }
    > div:nth-child(1){
      justify-self: start;
    }
    > div:nth-child(2){
      justify-self: center;
    }
    > div:nth-child(3){
      justify-self: end;
    }
  }
  .MuiToolbar-root{
    /* grid-template-columns: 1fr 1fr 1fr;
    display: grid; */
  }
  .MuiIconButton-label{
    svg{fill: black} 
  }
  .header{
    background: #fff;
  }
  .nav-brand .brand{
    color: black;
    display: flex;
  }
  .nav{
    display: flex;

  }
  .nav-bar{
    .nav-link{
      color: black;
      .active{
        color:red;
      }
    }
    .nav-link{
      margin-left: 40px;
    }
  }
  
  .svg-logo{
    width: 100px;
    height: 50px;
    @media screen and (min-width: 768px){
      width: 80px;
      height: 40px;
    }
    svg{
      width: 100%;
    }
    path{
    fill: #000;
    }
  }
`
export default Header

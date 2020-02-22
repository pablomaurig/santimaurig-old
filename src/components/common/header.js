import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
// components
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Hidden from '@material-ui/core/Hidden'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

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
      <Toolbar>
        <Typography className='nav-brand' variant="h6">
          <Link className='brand' to={`/`}>Santiago Maurig</Link>
        </Typography>
        <Hidden xsDown>
          <Typography className='nav-bar' color='white' style={{ marginLeft: 'auto', marginRight: '10px' }}>
            <Link partiallyActive={true} activeClassName='active' className='nav-link' to={`/#about`}>About</Link>
          </Typography>
          <Typography className='nav-bar' color='white' style={{ marginRight: '10px' }}>
            <Link activeClassName='active' className='nav-link' to={`/#locucion`}>Locución</Link>
          </Typography>
          <Typography className='nav-bar' color='white'>
            <Link activeClassName='active' className='nav-link' to={`/#docencia`}>Docencia</Link>
          </Typography>
        </Hidden>
        <Hidden smUp>
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
            <Link to={`/#about`}>
              <MenuItem onClick={handleClose}>About</MenuItem>
            </Link>
            <Link to={`/#locucion`}>
              <MenuItem onClick={handleClose}>Locución</MenuItem>
            </Link>
            <Link to={`/#docencia`}>
              <MenuItem onClick={handleClose}>Docencia</MenuItem>
            </Link>
          </Menu>
        </Hidden>
      </Toolbar>
    </AppBar>
  </StyledContainer>)
}

const StyledContainer = styled.div`
  .MuiIconButton-label{
    svg{fill: saddlebrown} 
  }
  .header{
    background: #fff;
  }
  .nav-brand .brand{
    color: saddlebrown;
  }
  .nav-bar{
    .nav-link{
      color: saddlebrown;
      .active{
        color:red;
      }
    }
    .nav-link + .nav-link{
      margin-left: 20px;
    }
  }
`
export default Header

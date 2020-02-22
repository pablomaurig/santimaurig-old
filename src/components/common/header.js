import React, { useState } from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
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
  const data = useStaticQuery(graphql`
  query MenuItems{
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
  return (<StyledContainer>
    <AppBar
      elevation={0}
      className='header'
    >
      <Toolbar>
        <Typography className='nav-brand' variant="h6">
          <Link className='brand' to={`/`}>Leckerbissen</Link>
        </Typography>
        <Hidden xsDown>
          <Typography className='nav-bar' color='white' style={{ marginLeft: 'auto' }}>
            {data.allProductosJson.edges.map((menuItem) =>
              <Link key={menuItem.node.name} className='nav-link' to={`/${menuItem.node.path}`}>{menuItem.node.name}</Link>
            )}
            {/* <Link className='nav-link' to={`/contacto`}>Contacto</Link> */}
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
            {data.allProductosJson.edges.map((menuItem) =>
              <Link key={menuItem.node.name} to={`/${menuItem.node.path}`}>
                <MenuItem onClick={handleClose}>{menuItem.node.name}</MenuItem>
              </Link>
            )}
            {/* <Link to={`/contacto`}>
                <MenuItem onClick={handleClose}>Contacto</MenuItem>
              </Link> */}
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
    }
    .nav-link + .nav-link{
      margin-left: 20px;
    }
  }
`
export default Header

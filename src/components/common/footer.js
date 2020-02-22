import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return <Container>
    © {new Date().getFullYear()} | Santiago Maurig
    </Container>
}
const Container = styled.footer`
    padding: 10px 0;
    text-align: center;
    background-color: #D8D8D8;
    color: #6E6E6E;
`;

export default Footer
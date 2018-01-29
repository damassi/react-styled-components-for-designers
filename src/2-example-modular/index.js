import React from 'react'
import { Container, Row } from 'styled-bootstrap-grid'
import AppStyles from './AppStyles'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

export default function ArtworkPage() {
  return (
    <AppStyles>
      <Container fluid>
        <Row>
          <Nav />
        </Row>
        <Row>
          <Main />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </AppStyles>
  )
}

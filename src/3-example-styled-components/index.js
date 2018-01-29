import React from 'react'
import { Container, Row } from 'styled-bootstrap-grid'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

export default function ArtworkPage() {
  return (
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
  )
}

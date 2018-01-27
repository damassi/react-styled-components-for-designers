import React from 'react'
import { AppStyles } from './styles'
import { Container, Row, Col } from 'styled-bootstrap-grid'

export default function ArtworkPage() {
  return (
    <AppStyles>
      <Container className="Content" fluid>
        <Row>
          <Col className="Nav">
            <a href="#about">Home</a>
            <a href="#collect">Collect</a>
            <a href="#auctions">Auctions</a>
            <a href="#magazine">Magazine</a>
          </Col>
        </Row>
        <Row>
          <Col className="Main">
            <Row>
              <Col md={8} className="Artwork">
                <a
                  className="ImageContainer"
                  href="https://artsy.net/artwork/jean-michel-basquiat-untitled-per-capita-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="Image"
                    src="https://d32dm0rphc51dk.cloudfront.net/po39Y4Eza0GxGGHVaaxniQ/larger.jpg"
                    alt=""
                  />
                </a>
              </Col>
              <Col md={4} className="Details">
                <div className="Title">Untitled (Per Capita)</div>
                <div className="Description">
                  Screenprint in colors <br />
                  40 × 40 in <br />
                  101.6 × 101.6 cm <br />
                  Edition of 85
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="Bio">
                <Row>
                  <Col className="Artist" md={3}>
                    JEAN-MICHEL BASQUIAT
                  </Col>
                  <Col className="About" md={9}>
                    A poet, musician, and graffiti prodigy in late-1970s New
                    York, Jean-Michel Basquiat had honed his signature painting
                    style of obsessive scribbling, elusive symbols and diagrams,
                    and mask-and-skull imagery by the time he was 20.
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="Footer">Artsy 2018</Col>
        </Row>
      </Container>
    </AppStyles>
  )
}

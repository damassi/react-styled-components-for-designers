import React, { Fragment } from 'react'
import { Col } from 'styled-bootstrap-grid'

export default function Artwork() {
  return (
    <Fragment>
      <Col className="Artwork" md={8}>
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
      <Col className="Details" md={4}>
        <div className="Title">Untitled (Per Capita)</div>
        <div className="Description">
          Screenprint in colors <br />
          40 × 40 in <br />
          101.6 × 101.6 cm <br />
          Edition of 85
        </div>
      </Col>
    </Fragment>
  )
}

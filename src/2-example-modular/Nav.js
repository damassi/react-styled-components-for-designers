import React from 'react'
import { Col } from 'styled-bootstrap-grid'

export default function Nav() {
  return (
    <Col className="Nav">
      <a href="#about">Home</a>
      <a href="#collect">Collect</a>
      <a href="#auctions">Auctions</a>
      <a href="#magazine">Magazine</a>
    </Col>
  )
}

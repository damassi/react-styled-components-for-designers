import React from 'react'
import { Row, Col } from 'styled-bootstrap-grid'
import Artwork from './Artwork'
import Bio from './Bio'

export default function Main() {
  return (
    <Col className="Main">
      <Row>
        <Artwork />
      </Row>
      <Row>
        <Bio />
      </Row>
    </Col>
  )
}

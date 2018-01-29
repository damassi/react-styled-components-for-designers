import React from 'react'
import { Row, Col } from 'styled-bootstrap-grid'

export default function Bio() {
  return (
    <Col className="Bio">
      <Row>
        <Col className="Artist" md={3}>
          JEAN-MICHEL BASQUIAT
        </Col>
        <Col className="About" md={9}>
          A poet, musician, and graffiti prodigy in late-1970s New York,
          Jean-Michel Basquiat had honed his signature painting style of
          obsessive scribbling, elusive symbols and diagrams, and mask-and-skull
          imagery by the time he was 20.
        </Col>
      </Row>
    </Col>
  )
}

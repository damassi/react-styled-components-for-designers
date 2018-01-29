import React from 'react'
import styled from 'styled-components'
import { Row, Col, media } from 'styled-bootstrap-grid'
import { maxWidth } from 'styles'
import Artwork from './Artwork'
import Bio from './Bio'

export default function Main() {
  return (
    <MainContainer>
      <Row>
        <Artwork />
      </Row>
      <Row>
        <Bio />
      </Row>
    </MainContainer>
  )
}

const MainContainer = styled(Col)`
  min-height: 85vh;

  ${media.giant`
    margin: auto;
    max-width: ${maxWidth}
  `};
`

import React from 'react'
import styled from 'styled-components'
import { Row, Col, media } from 'styled-bootstrap-grid'
import { colors, margins } from 'styles'

export default function Bio() {
  return (
    <BioContainer>
      <Row>
        <Artist md={3}>JEAN-MICHEL BASQUIAT</Artist>
        <About md={9}>
          A poet, musician, and graffiti prodigy in late-1970s New York,
          Jean-Michel Basquiat had honed his signature painting style of
          obsessive scribbling, elusive symbols and diagrams, and mask-and-skull
          imagery by the time he was 20.
        </About>
      </Row>
    </BioContainer>
  )
}

const BioContainer = styled(Col)`
  align-items: center;
  border: 1px solid ${colors.lightGrey};
  display: flex;
  padding-bottom: ${margins.medium};
  padding-top: ${margins.medium};

  ${media.phone`
    margin-top: ${margins.medium};
  `};
`

const Artist = styled(Col)`
  color: ${colors.darkGrey};
`

const About = styled(Col)`
  ${media.phone`
    margin-top: ${margins.medium};
  `};
`

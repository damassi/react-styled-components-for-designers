import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Col, media } from 'styled-bootstrap-grid'
import { colors, margins, typography } from 'styles'

export default function Artwork() {
  return (
    <Fragment>
      <MainArtwork md={8}>
        <ImageContainer
          href="https://artsy.net/artwork/jean-michel-basquiat-untitled-per-capita-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://d32dm0rphc51dk.cloudfront.net/po39Y4Eza0GxGGHVaaxniQ/larger.jpg"
            alt=""
          />
        </ImageContainer>
      </MainArtwork>
      <Details md={4}>
        <Title>Untitled (Per Capita)</Title>
        <Description>
          Screenprint in colors <br />
          40 × 40 in <br />
          101.6 × 101.6 cm <br />
          Edition of 85
        </Description>
      </Details>
    </Fragment>
  )
}

const MainArtwork = styled(Col)`
  display: flex;
  padding: ${margins.medium};
`

const ImageContainer = styled(Col)`
  text-align: center;

  ${media.tablet`
    border-right: 1px solid ${colors.lightGrey};
  `};

  ${media.phone`
    margin: ${margins.medium};
  `};
`

const Image = styled.img`
  height: auto;
  width: 50%;
`

const Details = styled(Col)`
  padding: ${margins.medium};
`

const Title = styled.div`
  font-size: ${typography.large};
  font-weight: bold;
`

const Description = styled.div`
  margin-top: ${margins.small};
`

import React from 'react'
import styled from 'styled-components'
import { Col } from 'styled-bootstrap-grid'
import { colors, margins } from 'styles'

export default function Nav() {
  return (
    <NavContainer>
      <NavItem href="#about">Home</NavItem>
      <NavItem href="#collect">Collect</NavItem>
      <NavItem href="#auctions">Auctions</NavItem>
      <NavItem href="#magazine">Magazine</NavItem>
    </NavContainer>
  )
}

const NavContainer = styled(Col)`
  align-items: center;
  border-bottom: 1px solid ${colors.lightGrey};
  display: flex;
  justify-content: space-between;
  padding: ${margins.medium};
  text-transform: uppercase;
`

const NavItem = styled.div`
  text-decoration: none;
`

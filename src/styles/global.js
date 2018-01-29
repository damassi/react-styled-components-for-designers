import reset from 'styled-reset'
import { injectGlobal } from 'styled-components'
import { injectLayoutBaseCSS } from 'styled-bootstrap-grid'
import { colors, typography } from './index'

injectGlobal`
  ${reset}

  @font-face {
    font-family: 'Arial';
  }

  html, body {
    color: ${colors.darkGrey};
    display: flex;
    flex-direction: column;
    font-family: ${typography.family.regular}, sans-serif;
    height: 100%;
    line-height: 1.3;
    min-height: 100vh;
    width: 100%;
  }
`

injectLayoutBaseCSS()

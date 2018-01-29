import styled from 'styled-components'
import { colors } from 'styles'
import { media } from 'styled-bootstrap-grid'

export default styled.div`
  .Nav {
    align-items: center;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    justify-content: space-between;
    padding: 20px;

    a {
      text-decoration: none;
    }
  }

  .Main {
    min-height: 85vh;

    ${media.giant`
      margin: auto;
      max-width: 1200px;
    `};

    .Artwork {
      display: flex;
      padding: 20px;

      .ImageContainer {
        text-align: center;

        ${media.tablet`
          border-right: 1px solid ${colors.lightGrey};
        `};

        ${media.phone`
          margin: 20px;
        `};

        .Image {
          height: auto;
          width: 50%;
        }
      }
    }

    .Details {
      padding: 20px;

      .Title {
        font-size: 30px;
        font-weight: bold;
      }

      .Description {
        margin-top: 10px;
      }
    }

    .Bio {
      align-items: center;
      border: 1px solid ${colors.lightGrey};
      display: flex;
      padding-bottom: 20px;
      padding-top: 20px;

      ${media.phone`
        margin-top: 20px;
      `};

      .Artist {
      }

      .About {
        ${media.phone`
          margin-top: 20px;
        `};
      }
    }
  }

  .Footer {
  }
`

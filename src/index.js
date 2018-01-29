import './styles/global'
import React from 'react'
import ReactDOM from 'react-dom'
import Example1 from './1-example-css'
import Example2 from './2-example-modular'
import Example3 from './3-example-styled-components'

function getExample(exampleNumber) {
  switch (exampleNumber) {
    case 1:
      return <Example1 />
    case 2:
      return <Example2 />
    case 3:
      return <Example3 />
    default:
      throw new Error(`Invalid example: ${exampleNumber}`)
  }
}

ReactDOM.render(getExample(3), document.getElementById('root'))

if (module.hot) {
  module.hot.accept() // Enable hot-reloading during dev
}

import './styles/global'
import React from 'react'
import ReactDOM from 'react-dom'
import Example1 from './1-example-css'
import Example2 from './2-example-modular'

function getExample(exampleNumber) {
  switch (exampleNumber) {
    case 1:
      return <Example1 />
    case 2:
      return <Example2 />
    default:
      throw new Error(`Invalid example: ${exampleNumber}`)
  }
}

ReactDOM.render(getExample(1), document.getElementById('root'))

// Enable hot-reloading during dev
if (module.hot) {
  module.hot.accept()
}

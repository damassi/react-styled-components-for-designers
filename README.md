# React and Styled Components for Designers

### WIP

This repo contains three example approaches (or phases) for building modern static layouts using [React.js](https://reactjs.org/) and [Styled Components](https://www.styled-components.com/). The [first](https://github.com/damassi/react-styled-components-for-designers/tree/master/src/1-example-css) mimics traditional approaches to layout and css, with a single component being mounted containing all of the HTML laid out and styled via a stylesheet. The [second phase](https://github.com/damassi/react-styled-components-for-designers/tree/master/src/2-example-modular) takes the first a bit further and breaks the HTML apart into individual files / components, showing how a flat file is broken up into multiple files. The [third phase](https://github.com/damassi/react-styled-components-for-designers/tree/master/src/3-example-styled-components) modifies the second by introducing common Styled Components patterns for handling CSS. The first example is typically what is built first; once the layout is responsive and looks right then the second and third phases become production work as markup and CSS is moved from the main file into individual component-files one-by-one.

From a design-to-engineering hand-off perspective the first example approach is typically sufficient. However, the second and third examples are included so that the reader may gain a greater insight into how components finally appear in real-world applications.

Building upon [`create-react-app`](https://github.com/facebook/create-react-app) and [VSCode](https://code.visualstudio.com/) as a development environment, this project aims to make the barrier of entry as low as possible while providing for the fastest possible iteration times. Also included is an excellent 12-column grid-system based on [Bootstrap](https://github.com/dragma/styled-bootstrap-grid).

### Requisites

A basic understanding of HTML + CSS.

### First Time Installation

1. Install [VSCode](https://code.visualstudio.com/)
2. Install VSCode shell command `code` : [Cmd + Shift + P] and search for shell.
3. Install Node.js: https://nodejs.org/en/download/
4. Then open your terminal and enter

```bash
git clone git@github.com:damassi/react-styled-components-for-designers.git
cd react-styled-components-for-designers
npm install -g yarn
yarn install
yarn start
```

This should launch a web browser pointed at http://localhost:3000, as well as VSCode. Changes to source-files will be immediately reflected in the browser, without a refresh.

Back in VSCode, you should see this pop up:

<img width="1027" alt="screen shot 2018-01-28 at 4 28 11 pm" src="https://user-images.githubusercontent.com/236943/35489183-546a38c8-0448-11e8-87a7-d65b3525a167.png">

Be sure to click 'Install All' and once that's complete run `cmd+shift+p > reload window` to reload with new extensions installed. Plugins include [Prettier](https://prettier.io/docs/en/why-prettier.html), an automatic code formatter so you don't have to worry about coding style, as well as [ESLint](https://eslint.org/docs/about/), which will check your code for errors as you type:

<img width="458" alt="screen shot 2018-01-28 at 4 24 59 pm" src="https://user-images.githubusercontent.com/236943/35489151-da6e5608-0447-11e8-82d9-050f69f5de0e.png">

You can open this panel by selecting `View > Problems` from the menu bar.

> **Once the one-time-only setup takes place all that's needed to start coding is `yarn start`. Toggle working examples by modifying the number [located here](https://github.com/damassi/react-styled-components-for-designers/blob/master/src/index.js#L21) and save.**

### A Quick Primer on React and Styled Components

#### React

React is a popular way to build user interfaces and aims to be as simple as possible. For example:

```javascript
function App() {
  return (
    <div>
      <h1>Name</h1>
      <ul>
        <li>Hello</li>
        <li>How</li>
        <li>Are<li>
        <li>You?</li>
      </ul>
    </div>
  )
}
```

is a React component. Look familiar? Yup :) just regular html. And further, individual components can be combined to better describe page structure:

```javascript
function Header() {
  return <h1>Name</h1>
}

function Description() {
  return (
    <ul>
      <li>Hello</li>
      <li>How</li>
      <li>Are</li>
      <li>You?</li>
    </ul>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Description />
    </div>
  )
}
```

If you need to pass data into your component, you can do so with props:

```javascript
function Header(props) {
  return <h1>{props.name}</h1>
}

function Description(props) {
  return <p>{props.description}</p>
}

function App() {
  return (
    <div>
      <Header name="Will Burroughs" />
      <Description description="The place behind the pines" />
    </div>
  )
}
```

When rendered in a web browser, this will output

```javascript
<div>
  <h1>Will Burroughs</h1>
  <p>The place behind the pines</p>
</div>
```

#### Styled Components

Building on our above example, lets add some styles. Before Styled Components, developers would typically use CSS classes to style markup:

```javascript
function App() {
  return (
    <div>
      <div className='name'>
        Leif the Cat
      </div>
      <div className='location'>
        Seattle, WA
      </div>
    </div>
  )
}

// styles.css

.name {
  font-size: 20px;
  font-weight: bold;
}

.location {
  text-align: center;
}
```

With Styled Components, you can write your CSS directly in your JavaScript -- an innovation made possible by the recent addition of [template literals](http://wesbos.com/tagged-template-literals/) to the JavaScript lanaguage.

While the full extent of what's possible will not be covered here, in short template literals allow for an easy way to mix strings and data together (note the back tick characters in the third `introduction` variable):

```javascript
const name = 'Chris'
const location = 'Seattle'
const introduction = `Hello my name is ${name} and I live in ${location}.`
```

And a full example:

```javascript
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
`

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const Location = styled.div`
  text-align: center;
`

function App() {
  return (
    <Container>
      <Name>Leif the Cat</Name>
      <Location>Seattle, WA</Location>
    </Container>
  )
}
```

Breaking this apart a bit, what Styled Components do is allow you to assign a variable to an HTML element (in the above example its a `div`, but can be anything) and then pass in styles between the back-ticks. You then use this variable as a React component. Not only does this markup read well semantically, but it allows one to easily share common properties between styles:

```javascript
const colors = {
  darkGrey: '#333',
  lightGrey: '#ccc'
}

const Name = styled.div`
  color: ${colors.darkGrey};
  font-size: 20px;
`

const Description = styled.div`
  color: ${colors.lightGrey};
`

function App() {
  return (
    <div>
      <Name>Leif the Cat</Name>
      <Description>The best kitty</Description>
    </div>
  )
}
...
```

Combining all of these things together makes for a flexible codebase as more and more things are broken apart into reusable, modular components that can be shared throughout. It also makes the development experience more convenient as the markup and corresponding styles are co-located side-by-side in the same file.

### _WIP_

---

(This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app))

```

```

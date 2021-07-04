// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
function Box(props) {
  let classNameProp = 'box '
  classNameProp += props.size === '' ? '' : 'box--' + props.size

  return (
    <div
      className={classNameProp}
      style={{fontStyle: 'italic', ...props.style}}
    >
      {props.children}
    </div>
  )
}
const smallBox = (
  <div
    className="box--small box"
    style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box--medium box"
    style={{backgroundColor: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box--large box"
    style={{backgroundColor: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box size="large" style={{backgroundColor: 'lightgreen'}}>
        blah
      </Box>
    </div>
  )
}

export default App

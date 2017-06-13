import React from 'react'
import ReactDOM from 'react-dom'

const target = document.getElementById('root')

const state = {
  rain: ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg'],
  fall: [
    '../images/1down1.jpg',
    '../images/1down2.jpg',
    '../images/1down3.jpg',
    '../images/1down4.jpg',
    '../images/1down5.jpg',
    '../images/1down6.jpg'
  ]
}

let image1 = '../images/1.jpg'
let image2 = '../images/2.jpg'
let image3 = '../images/3.jpg'
let text = "DON'T CLICK"
let count = 0

const loop = () => {
  let pic1 = count % 3
  let pic2 = (count+1) % 3
  let pic3 = (count+2) % 3
  image1 = state.rain[pic1]
  image2 = state.rain[pic2]
  image3 = state.rain[pic3]
  count +=1
  render()
}

let fallCount = 0

const fall = () => {
  image1 = state.fall[fallCount]
  image2 = state.fall[fallCount]
  image3 = state.fall[fallCount]
  fallCount += 1
  render()
}

const intervalHandle = setInterval(function(){
  loop()
}, 300)

const stopLoop = () => {
  text = ""
  clearInterval(intervalHandle)
  setInterval(function(){
    fall()
  }, 300)
}

const App = () => {
  return (
    <div>
      <div id="rain">
      {fallCount < 7 ?
        <div>
          <img id="drops" src={image1} />
          <img id="drops" src={image2} />
          <img id="drops" src={image3} />
          <img id="drops" src={image2} />
          <img id="drops" src={image1} />
          <img id="drops" src={image3} />
          <img id="drops" src={image1} />
          <img id="drops" src={image2} />
          <img id="drops" src={image1} />
          <img id="drops" src={image3} />
          <img id="drops" src={image2} />
          <img id="drops" src={image3} />
          <img id="drops" src={image2} />
          <img id="drops" src={image1} />
          <img id="drops" src={image3} />
        </div>
      :
        <h1>hi</h1>
      }
      </div>
      <div id="rain">
        <a href="#" onClick={()=>stopLoop()}><h3>{text}</h3></a>
      </div>
    </div>
  )
}

const render = ()=> {
  ReactDOM.render(<App />, target)
}

render()

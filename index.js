import React from 'react'
import ReactDOM from 'react-dom'

const target = document.getElementById('root')

const render = ()=> {
  ReactDOM.render(<img src="../images/1.jpg" />, target)
}

render()

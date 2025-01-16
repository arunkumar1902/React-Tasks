import React, { Component } from 'react'
import HelloWorld from './HelloWorld.jsx'
import ClassComponent from './ClassComponent.jsx'
import FunctionalComponent from './FunctionalComponent.jsx'

export class App extends Component {
  
  render() {
    return (
      <div>
        <HelloWorld></HelloWorld>
        <ClassComponent name="Arun"></ClassComponent>
        <FunctionalComponent message="Greetings"></FunctionalComponent>
      </div>
    )
  }
}

export default App
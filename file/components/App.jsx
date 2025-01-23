import React from 'react'
import HelloWorld from './HelloWorld.jsx'
import ClassComponent from './ClassComponent.jsx'
import FunctionalComponent from './FunctionalComponent.jsx'
import ClassComponentLifecycle from './Lifecycle/ClassComponentLifecycle.jsx'
import FunctionComponentLifecycle from './Lifecycle/FunctionComponentLifecycle.jsx'
import ControlledForm from './Forms/ControlledForm.jsx'
import UncontrolledForm from './Forms/UncontrolledForm.jsx'
import PropertyDrilling from './context/PropertyDrilling.jsx'
import Context from './context/Context.jsx'
import Sample from './Sample.jsx'
import CodeSplit from './CodeSplitting/CodeSplit.jsx'

 
export default function App() {
  return (
    <div>
      {/* <HelloWorld></HelloWorld> */}
      {/* <ClassComponent name="Arun"></ClassComponent> */}
      {/* <FunctionalComponent message="Greetings"></FunctionalComponent> */}
      {/* <FunctionComponentLifecycle></FunctionComponentLifecycle> */}
      {/* <ClassComponentLifecycle></ClassComponentLifecycle> */}
      {/* <ControlledForm></ControlledForm> */}
      {/* <UncontrolledForm></UncontrolledForm> */}
      {/* <PropertyDrilling value="Welcome"></PropertyDrilling> */}
      {/* <Context message="Hello World"></Context> */}
      {/* <Sample></Sample> */}
      <CodeSplit></CodeSplit>
      
    </div> 
  )
}


import React from 'react'
import HelloWorld from './HelloWorld.jsx'
import ClassComponent from './ClassComponent.jsx'
import FunctionalComponent from './FunctionalComponent.jsx'
import ClassComponentLifecycle from './Lifecycle/ClassComponentLifecycle.jsx'
import FunctionComponentLifecycle from './Lifecycle/FunctionComponentLifecycle.jsx'
import ControlledForm from './Forms/ControlledForm.jsx'
import UncontrolledForm from './Forms/UncontrolledForm.jsx'



export default function App() {
  return (
    <div>
      <HelloWorld></HelloWorld>
      <ClassComponent name="Arun"></ClassComponent>
      <FunctionalComponent message="Greetings"></FunctionalComponent>
      {/* <FunctionComponentLifecycle></FunctionComponentLifecycle> */}
      {/* <ClassComponentLifecycle></ClassComponentLifecycle> */}
      <ControlledForm></ControlledForm>
      <UncontrolledForm></UncontrolledForm>
    </div>
  )
}


import React, { StrictMode } from 'react'
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
import EditTable from './ReviewTask/EditTable.jsx'
import List from './ListKeys/List.jsx'
import LiftingState from './LiftingStateUp/LiftingState.jsx'
import ProfilerDemo from './profiler/ProfilerDemo.jsx'
import CustomHooks from './CustomHook/CustomHooks.jsx'
import Render from './RenderProps/Render.jsx'
import StrictDemo from './strictMode/StrictDemo.jsx'
import ReactWithoutJSX from './reactWithoutJSX/ReactWithoutJSX.jsx'
import UncontrolledComponent from './uncontrolledComponent/UncontrolledComponent.jsx'
import Portal from './Portals/Portal.jsx'
import WebComponent from './webComponent/WebComponent.jsx'

 
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
      {/* <CodeSplit></CodeSplit> */}
      {/* <EditTable></EditTable> */}
      {/* <List></List> */}
      {/* <LiftingState></LiftingState> */}
      {/* <ProfilerDemo></ProfilerDemo> */}
      {/* <CustomHooks></CustomHooks> */}
      {/* <Render></Render> */}
      {/* <StrictMode>     <StrictDemo />  </StrictMode> */}
      {/* <ReactWithoutJSX></ReactWithoutJSX> */}
      {/* <UncontrolledComponent></UncontrolledComponent> */}
      {/* <Portal></Portal> */}
      <WebComponent></WebComponent>
    </div> 
  )
}


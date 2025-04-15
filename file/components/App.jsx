import React, { createContext, StrictMode, useState } from 'react'
import '../assets/styles/App.css'
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
import UseStateHook from './hooks/UseStateHook.jsx'
import UseEffectHook from './hooks/UseEffectHook.jsx'
import UseContextHook from './hooks/UseContextHook.jsx'
import UseRefHook from './hooks/UseRefHook.jsx'
import UseMemoHook from './hooks/UseMemoHook.jsx'
import Counter from './Testing/Counter.jsx'
import GreetingsMessage from './ReactAssessment/GreetingsMessage.jsx'
import CounterComponent from './ReactAssessment/CounterComponent.jsx'
import FormComponent from './ReactAssessment/FormComponent.jsx'
import WelcomeMessage from './ReactAssessment/WelcomeMessage.jsx'
import BackgroundColor from './ReactAssessment/BackgroundChange.jsx'
import Signup from './axios/Signup.jsx'
import UserData from './axios/UserData.jsx'
import UnMounting from './useEffect/UnMounting.jsx'
import ErrorBoundary from './errorBoundries/ErrorBoundaries.jsx'
import Count from './errorBoundries/Count.jsx'
import DomUpdating from './useEffect/DomUpdating.jsx'
import UseMemo from './hooks/UseMemo.jsx'
import UseCallBackParent from './hooks/UseCallBackParent.jsx'
import UseReducer from './hooks/useReducer/Formreducer.jsx'
import CounterReducer from './hooks/useReducer/CounterReducer.jsx'
import TodoList from './hooks/useReducer/TodoList.jsx'
import Timer from './hooks/useRef/Timer.jsx'
import Focus from './hooks/useRef/Focus.jsx'
import CountUsingMemo from './hooks/useMemo/CountUsingMemo.jsx'
import Increment from './hooks/useCallback/Increment.jsx'
import ListComponent from './errorBoundries/ListComponent.jsx'


export const contextDemo = createContext();

export default function App() {

  const [message, setMessage] = useState("Hello World");
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
      {/* <WebComponent></WebComponent> */}
      {/* <UseStateHook></UseStateHook> */}
      {/* <UseEffectHook></UseEffectHook> */}
      {/* <contextDemo.Provider value={{title:"UseContext Hook Demo", message }}> */}
      {/* <UseContextHook></UseContextHook> */}
      {/* </contextDemo.Provider> */}
      {/* <UseRefHook></UseRefHook> */}
      {/* <UseMemoHook></UseMemoHook> */}
      {/* <Counter></Counter> */}

      {/* React assessment task */}
      {/* <GreetingsMessage name="Arun"></GreetingsMessage>
      <CounterComponent></CounterComponent>
      <FormComponent></FormComponent>
      <WelcomeMessage user="Ravi"></WelcomeMessage>
      <WelcomeMessage></WelcomeMessage>
      <BackgroundColor></BackgroundColor> */}

      {/* <Signup></Signup> */}
      {/* <UserData></UserData> */}
      {/* <UnMounting></UnMounting> */}
      {/* <DomUpdating></DomUpdating> */}
      {/* <ErrorBoundary>
        <Count />
      </ErrorBoundary> */}

      {/* <UseMemo></UseMemo> */}
      {/* <UseCallBackParent></UseCallBackParent> */}
      {/* <UseReducer></UseReducer> */}
      {/* <CounterReducer></CounterReducer> */}
      {/* <TodoList></TodoList> */}
      {/* <Timer></Timer> */}
      {/* <Focus></Focus> */}
      {/* <CountUsingMemo></CountUsingMemo> */}
      {/* <Increment></Increment> */}
      <ListComponent></ListComponent>
    </div>
  )
}


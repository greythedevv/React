import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { SimpleCounter } from './counter'
import { PreviousStateCounter } from './previousStateCounter'
import {BatchingCounter} from "./batchingCounter"
import { UserProfile } from './userProfile'
function App() {


  return (
    <>
    <UserProfile/>
    <BatchingCounter/>
    <SimpleCounter/>
     <PreviousStateCounter/>
     <h1>Codevolution React Course</h1>
    </>
  )
}

export default App

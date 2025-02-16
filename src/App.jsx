import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Courses from './components/Courses'
function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <Courses/>
    </>
  )
}

export default App

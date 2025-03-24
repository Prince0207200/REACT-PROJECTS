import React from 'react'
import './App.css'
import Nav from './component/nav/Nav'
import Home from './component/home/Home'
import About from './component/about/About'
import Project from './component/project/Project'
import Contact from './component/contact/Contact'

function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>

    </>
  )
}

export default App
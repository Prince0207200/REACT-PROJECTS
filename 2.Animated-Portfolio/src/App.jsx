import React from 'react'
import './App.css'
import Nav from './component/nav/Nav'
import Home from './component/home/Home'
import About from './component/about/About'
import Project from './component/project/Project'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Skills from './component/skills/Skills'
import Experience from './component/experience/Experience'

function App() {
  return (
    <>
      <Nav/>
      

      <Home/>
      <About/>
     
      <Skills/>
      <Project/>
      <Experience />
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
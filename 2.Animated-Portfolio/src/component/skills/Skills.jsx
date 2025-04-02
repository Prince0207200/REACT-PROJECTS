import React from 'react'
import './Skills.css'
import '../db.js'
import Card from '../card/Card'
import { skill } from '../db.js'
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import dsa from "../../assets/dsa.png"




function Skills() {
 

  return (
    <div id='skills'>
         

        
      <h1 className='ph1'>Skills</h1>
      <div className="slider">
        <Card title={skill[0].title} image={mern}/>
        <Card title={skill[0].title} image={mern}/>
        <Card title={skill[0].title} image={mern}/>
        <Card title={skill[0].title} image={mern}/>
        <Card title={skill[0].title} image={mern}/>
        <Card title={skill[0].title} image={mern}/>
        <Card title={skill[0].title} image={mern}/>
        <Card title={skill[0].title} image={mern}/>
        <Card title={skill[0].title} image={mern}/>
        <Card title={skill[0].title} image={mern}/>
        <Card title={skill[0].title} image={mern}/>
        <Card title={skill[0].title} image={mern}/>
        <Card title={skill[0].title} image={mern}/>
      </div>
      

    </div>
  )
}

export default Skills
import React from 'react'
import './Project.css'
import Card from '../card/Card'
import gma from '../../assets/va.png'
import br from '../../assets/br.png'
import cb from '../../assets/cb.png'
import ise from '../../assets/ise.png'




function Project() {
  return (
    <div id='project'>
      <h1 className='ph'>6+ MONTHS EXPERIENCED IN PROJECT</h1>
      <div className="slider">
      <Card title="GEET MUSIC APP" image={gma}/>
      <Card title="GEET MUSIC APP" image={br}/>
      <Card title="GEET MUSIC APP" image={cb}/>
      <Card title="GEET MUSIC APP" image={ise}/>
      <Card title="GEET MUSIC APP" image={ise}/>
      <Card title="GEET MUSIC APP" image={ise}/>

      </div>
    </div>
  )
}

export default Project
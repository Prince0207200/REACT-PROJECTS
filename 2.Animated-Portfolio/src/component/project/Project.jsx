

import React from 'react';
import './Project.css';
import gma from '../../assets/va.png';
import br from '../../assets/br.png';
import cb from '../../assets/cb.png';
import ise from '../../assets/ise.png';
import CardPro from '../cardpro/CardPro'


import { desc } from '../db.js';

function Project() {
  return (
    <div id='project'>
      <h1 className='ph'>Projects</h1>
      <div className="slider1">
        <CardPro title="GEET MUSIC APP" image={gma} about={desc[0].about} description={desc[0].description} techStack={desc[0].techStack} />
        <CardPro title="BLOG READER" image={br} about={desc[1].about} description={desc[1].description} techStack={desc[1].techStack} />
        <CardPro title="CODE BUDDY" image={cb} about={desc[2].about} description={desc[2].description} techStack={desc[2].techStack} />
        <CardPro title="INSTANT SEARCH ENGINE" image={ise} about={desc[3].about} description={desc[3].description} techStack={desc[3].techStack} />
        <CardPro title="ANOTHER PROJECT" image={ise} about={desc[4].about} description={desc[4].description} techStack={desc[4].techStack} />
        <CardPro title="FINAL PROJECT" image={ise} about={desc[5].about} description={desc[5].description} techStack={desc[5].techStack} />
        
      </div>
    </div>
  );
}

export default Project;

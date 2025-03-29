import React from 'react'
import './Home.css'
import githubIcon from '../../assets/github.png';
import man1 from '../../assets/cartoon2.png'
import { Typewriter } from 'react-simple-typewriter';


function Home() {
 

  return (
    <div id='home'>
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">PRINCE GUPTA</div>
          <div className="line3">
            <Typewriter
              words={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "SOFTWARE TESTER"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={55}
              deleteSpeed={30}
              delaySpeed={1200}
            />
          </div>
          <div className='line4'>
                    <a href='#' target='_blank'>
                        <img src={githubIcon}
                        alt='githubIconImg'
                        className='homepage_left_gitIconImg'/>
                    </a>
                    <a href='#' target='_blank'>
                        <img src={githubIcon}
                        alt='githubIconImg'
                        className='homepage_left_gitIconImg'/>
                    </a>
                   
                </div>
         
                    <div><a href='mailto:princegupta1455@gmail.com'>
                        <button>Get in touch</button>
                    </a></div>
                

        </div>
      </div>
      <div className="righthome">
        <img src={man1} alt="" />
      </div>
    </div>
  )
}

export default Home
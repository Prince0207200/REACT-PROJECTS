import React from 'react'
import './Home.css'
import man from '../../assets/man.png'
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
          <button>HIRE ME</button>

        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home
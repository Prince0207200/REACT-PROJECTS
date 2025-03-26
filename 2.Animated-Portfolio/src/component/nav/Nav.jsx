import React, { useRef } from 'react'
import './Nav.css'
import { Link } from "react-scroll"


function Nav() {
    let menu=useRef()
    let mobile=useRef()
    
   
    return (
        <nav>
            <h1>PORTFOLIO</h1>
            <ul className='desktopmenu'>
                <Link to="home" spy={true} smooth={true} offset={-70} duration={500} activeClass="active"><li>HOME</li></Link>
                <Link to='about'  spy={true} smooth={true} offset={-70} duration={500} activeClass="active"><li>ABOUT</li></Link>
                <Link to='project'  spy={true} smooth={true} offset={-70} duration={500} activeClass="active"><li>PROJECTS</li></Link>
                <Link to='contact'  spy={true} smooth={true} offset={-70} duration={500} activeClass="active"><li>CONTACT</li></Link>



            </ul>
            <div className="hamburger" ref={menu} onClick={()=>{
                mobile.current.classList.toggle("activemobile")
                menu.current.classList.toggle("activeham")
            }}>
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>
            <ul className='mobilemenu' ref={mobile}>
                <Link to="home" spy={true} smooth={true} offset={-70} duration={500} activeClass="active"><li>HOME</li></Link>
                <Link to='about'  spy={true} smooth={true} offset={-70} duration={500} activeClass="active"><li>ABOUT</li></Link>
                <Link to='project'  spy={true} smooth={true} offset={-70} duration={500} activeClass="active"><li>PROJECTS</li></Link>
                <Link to='contact'  spy={true} smooth={true} offset={-70} duration={500} activeClass="active"><li>CONTACT</li></Link>



            </ul>
        </nav>
    )
}

export default Nav
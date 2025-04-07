import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-scroll';

const NAVBAR_TITLE = '<PG>';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <Link to="home" smooth={true} offset={-70} duration={500}>
                <h1>{NAVBAR_TITLE}</h1>
            </Link>
            
            <ul className="desktopmenu">
                {["about", "skills", "project", "experience","contact"].map((section) => (
                    <Link
                        key={section}
                        to={section}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                    >
                        <li>{section.toUpperCase()}</li>
                    </Link>
                ))}
            </ul>

            <div 
                className={`hamburger ${menuOpen ? "activeham" : ""}`} 
                onClick={toggleMenu} 
                role="button" 
                aria-label="Toggle mobile menu"
                aria-expanded={menuOpen}
            >
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>

            <ul className={`mobilemenu ${menuOpen ? "activemobile" : ""}`}>
                {["home", "about", "skills", "project","experience", "contact"].map((section) => (
                    <Link
                        key={section}
                        to={section}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                        onClick={toggleMenu}  // Close menu when clicking a link
                    >
                        <li>{section.toUpperCase()}</li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;

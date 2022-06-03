import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'

import {useState} from 'react'

import { FaTimes, FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 


    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg": "header"}>
        <Link to='/'>
            <img src={Logo} alt='logo' className='logo'/>
        </Link>
    
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/services'>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to='/project' className='btn'>
                        Take Action
                    </Link>
                </li>
                
            </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20}  
            />) : (<FaBars size={20}  
            />
            )}
        </div>
    </div>
  )
}

export default Navbar
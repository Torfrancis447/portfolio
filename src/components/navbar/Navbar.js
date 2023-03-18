import React, {useState} from "react"
import "./navbar.css"
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import { BiBook} from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from "react-icons/bi"

const Navbar = () => {
    const [activeNav, setActiveNav]= useState('#')

    const handleNav=(e)=> {        
    const href = e.currentTarget.getAttribute('href');
    setActiveNav(href);
  
    }
    return (
        <nav>
            <a href='#' onClick={handleNav} class={activeNav === '#' ? 'active': ''}> <AiOutlineHome/> </a>
            <a href='#about' onClick={handleNav} class={activeNav === '#about' ? 'active': ''}> <BiBook/> </a>
            <a href='#experience' onClick={handleNav} class={activeNav === '#experience' ? 'active': ''}> <AiOutlineUser/> </a>
            <a href='#services' onClick={handleNav} class={activeNav === '#services' ? 'active': ''}> <RiServiceLine/> </a>
            <a href='#contact' onClick={handleNav} class={activeNav === '#contact' ? 'active': ''}> <BiMessageSquareDetail/> </a>
        </nav>
    )
};

export default Navbar
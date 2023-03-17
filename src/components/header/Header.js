import React from "react";
import "./header.css";
import ResumeButton from "./ResumeButton";
import profileImage from "/home/tor-f/Development/code/my-projects/portfolio/src/assets/profile-pic.jpg"
const Header = () => {
  return (
    <header>
      <div class="container">
        <h5> Hello I'm</h5>
        <h1>Tor Francis</h1>
        <h5 class="text-light">Fullstack Developer</h5>

        <ResumeButton />

        <div class="profile-pic">
            <img src={profileImage} alt="Headshot" />
        </div>

        <a href="#contact" class="scroll-down"> Scroll Down </a>
        
      </div>
    </header>
  );
};

export default Header;

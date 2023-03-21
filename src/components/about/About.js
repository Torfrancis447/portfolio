import React from "react";
import { FaAward } from "react-icons/fa";
import {FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from 'react-icons/vsc'
import "./about.css";
import headShot from "/home/tor-f/Development/code/my-projects/portfolio/src/assets/IMG_0479.jpg"

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div class="container about-container">
        <div class="about-me">
          <div class="about-me-image">

          <img src={headShot} alt="Image" />
          </div>
        </div>

        
        <div class="about-content">
          <div class="about-cards">
          <article class="about-card">
            <FaAward class="about-icon" />
            <h5> Experience </h5>
            <small> Boot Camp Graduate</small>
          </article>

          <article class="about-card">
            <FiUsers class="about-icon"/>
            <h5> Clients </h5>
            <small> </small>
          </article>

          <article class="about-card">
            <VscFolderLibrary class="about-icon"/>
            <h5> Projects </h5>
            <small> 4+ </small>
          </article>          
        </div>
        <p> Software Engineer with a background in sales and recruiting. 
        I decided to change fields when I was an IT recruiter and started 
        talking to a lot on developers about the interesting projects 
        they have worked on.
        </p>
        <a href='#contact' class='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;

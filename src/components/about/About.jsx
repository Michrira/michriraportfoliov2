import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__contenet">
          <div className="about__cards">
            <article className='about__card'> 
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1 year of working experience</small>
            </article>

            <article className='about__card'> 
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>Currently accepting new clients</small>
            </article>

            <article className='about__card'> 
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>20+ projects completed</small>
            </article>
          </div>
        
          <p>
          Experienced full-stack web developer with a passion for team building and a background in hospitality and sales. Proficient in HTML, CSS, JavaScript, React, and various backend technologies, including Node.js and SQL. Skilled in project management, problem-solving, and delivering high-quality work on tight deadlines. Demonstrated success in increasing sales, reducing costs, and improving customer satisfaction in various management roles. Strong communication skills and a collaborative approach to working with cross-functional teams.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About;

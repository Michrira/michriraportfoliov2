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
            <small>blank working experience</small>
            </article>

            <article className='about__card'> 
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>blank clients</small>
            </article>

            <article className='about__card'> 
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>blank completed projects</small>
            </article>
          </div>
        
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tenetur illo delectus rerum nostrum officia ad eveniet? Tenetur sapiente neque corrupti iste pariatur provident! Aliquam reprehenderit omnis fugit tempora porro!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About;

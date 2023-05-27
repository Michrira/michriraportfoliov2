import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Advanced CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Bootstrap</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Bulma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive web, tablet & mobile design</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proficient Front-End Development. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CSS Frameworks</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>JavaScript Frameworks </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Version Control </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web APIs </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Server-Side Development </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Database Integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Testing and Debugging</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Deployment and Hosting</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Photo Editing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Video Editing </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Audio Editing </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media packages TBD</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum </p> */}
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services
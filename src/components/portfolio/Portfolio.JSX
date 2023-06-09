import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Book Search Engine',
    github: 'https://github.com/Michrira/MRBookSearchEngine.git',
    demo: 'https://limitless-atoll-68861.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Water Battle',
    github: 'https://github.com/Michrira/Waterbattle.git',
    demo: 'https://evening-ocean-56179.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tech Blog',
    github: 'https://github.com/Michrira/MRtechblog.git',
    demo: 'https://glacial-retreat-52294.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
  title: 'Code Quiz',
    github: 'https://github.com/Michrira/mrcodequiz.git',
    demo: 'https://michrira.github.io/mrcodequiz/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Note Taker',
    github: 'https://github.com/Michrira/MRnotetaker.git',
    demo: 'https://mighty-lake-13194.herokuapp.com/notes'
  },
  {
    id: 6,
    image: IMG6,
    title: '5 Day Weather Forecast',
    github: 'https://michrira.github.io/MRweather/',
    demo: 'https://michrira.github.io/MRweather/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github url to projects</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
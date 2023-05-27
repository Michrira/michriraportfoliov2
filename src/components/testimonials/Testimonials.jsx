import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tara Snow',
    review: 'Testimonials coming soon.'
  },
  {
    avatar: AVTR2,
    name: 'Devin Clark',
    review: 'Testimonials coming soon.'
  },
  {
    avatar: AVTR3,
    name: 'Shawn Marks',
    review: 'Testimonials coming soon.'
  },
  {
    avatar: AVTR4,
    name: 'Sabrina Forrester',
    review: 'Testimonials coming soon.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="container testimonials__section">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="Client Avatar" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
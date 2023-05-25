import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/michrira/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/Michrira" target="blank"><FaGithub/></a>
        {/* <a href="https://dribble.com" target="blank"></a> */}
    </div>
  )
}

export default HeaderSocials
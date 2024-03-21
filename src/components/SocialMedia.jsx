import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import {FaFacebookF,FaLinkedinIn,FaGithub} from 'react-icons/fa';

const SocialMedia = () => {
  return (
      <div className='app__social'>
          <div>
              <BsTwitter/>
          </div>
          <div>
             <a href="www.linkedin.com/in/imsa57"><FaLinkedinIn /></a> 
          </div>
          <div>
            <a href="https://github.com/imsa57?tab=repositories"><FaGithub /></a>
          </div>
      
    </div>
  )
}

export default SocialMedia

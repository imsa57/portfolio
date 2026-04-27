import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
      <div className='app__social'>
          <div>
              <BsTwitter/>
          </div>
          <div>
             <a href="https://www.linkedin.com/in/imsa57" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
          <div>
            <a href="https://github.com/imsa57?tab=repositories" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>

    </div>
  )
}

export default SocialMedia

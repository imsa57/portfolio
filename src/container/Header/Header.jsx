import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import my_image from '../../assets/modifedBig1-removebg-preview.png'
import './Header.scss'
import { Wrapper } from '../../wrapper'
import { client } from '../../client'






const sacaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }


  }
}


const Header = () => {

  const [cvLink, setCVLink] = useState('');

  useEffect(() => {
    const query = '*[_type == "personal"]';

    client.fetch(query).then((data) => {
      setCVLink(data[0]?.myCVLink);
    });
  }, [])
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: .5 }}
        className='app__header-info'>

        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className='head-text'>MD SARFRAJ ANSARI</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex"> 
            <p className="p-text app__flex">Shopify Developer</p>
            {cvLink && (
              <p className="p-text">MY CV : <a href={cvLink} target='_blank' rel='noopener noreferrer'>Download</a></p>
            )}
          </div>
        </div> 

      </motion.div>


      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: .5, delayChildren: .5 }}
        className='app__header-img'>

        <img src={my_image} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle' />
      </motion.div>

      <motion.div
        variants={sacaleVariants}
        whileInView={sacaleVariants.whileInView}
        className='app__header-circles'>

        {[images.react,images.shopify,images.node].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}

      </motion.div>

    </div>
  )
}

export default Wrapper(Header, 'home');

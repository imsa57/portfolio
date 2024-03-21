import React, { useState, useEffect } from 'react'
import "./About.scss"
import { motion } from 'framer-motion';
import { imageUrl, client, urlFor } from '../../client';
import {Wrapper,MotionWrap} from '../../wrapper'


// const about = [
//   { title: 'web Development', description: 'I am good web developer', imgUrl: images.about01 },
//   { title: 'web Design', description: 'I am good web developer', imgUrl: images.about02 },
//   { title: 'UI/UX', description: 'I am good web developer', imgUrl: images.about03 },
//   {
//     title: 'web Animation', description: 'I am good web developer',
//     imgUrl: images.about04
//   }
// ]
console.log(client)

const About = () => {

  const [abouts, setAbouts] = useState([]);


 useEffect(() => {
   
   const query = '*[_type == "abouts"]';

   client.fetch(query)
   .then((data)=> setAbouts(data))
 }, [])
 


  return (
    < >
    <h2 className='head-text'>I Know <span>Good Development</span><br /> on <span>These Technology</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: .5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}>
            
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 20 }}>{ about.description}</p>

          </motion.div>
        ))}
      </div>

    </>
  )
}

export default Wrapper(
   MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
)

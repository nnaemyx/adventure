import React from 'react'
import './Heroimage.css'
import HeroImage from '../images/hero-img.jpg'
import { Link } from 'react-router-dom';

const Heroimage = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img src={HeroImage} className='hero-img' alt='heroimage'/>
      </div>
      <div className='content'>
        <p>Explore The Colourful World</p>
        <div className="hr1"><hr /></div>
        <h1>A WONDERFUL GIFT</h1>
        <Link to='/projects' className='btn'>Learn More</Link>

      </div>
    </div>

    


    

  );
}

export default Heroimage
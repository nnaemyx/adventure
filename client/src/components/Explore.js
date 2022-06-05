import React from 'react'
import './Explore.css'
import Hero3 from "../images/hero-hiking.jpg"
import {Link} from 'react-router-dom'

const Explore = () => {
  return (
    <div className='hero-explore'>
        <div className='mask-explore'>
            <img src={Hero3} alt='hiking' className="heroimg-explore"/>
        </div>
        <div className='content-explore'>
            <h1>EXPLORE THE WORLD</h1>
            <div className="hr"><hr /></div>
            <p>Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi. <br/>Fert his. 
                Recessit mentes praecipites locum caligine sui egens erat. 
                <br/>Silvas caeli regna nunc mixtam tanto.
            </p>
            <Link to='/projects' className='btn btn-explore'>
                Learn More
            </Link>
        </div>
    </div>
  )
}

export default Explore
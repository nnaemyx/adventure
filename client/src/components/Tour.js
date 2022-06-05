import React from 'react'
import './Tour.css'
import {Link} from 'react-router-dom'
import Image1 from '../images/image-1.jpg'
import Snow1 from '../images/snow-1.jpg'
import Mountain from '../images/mountain-3.jpg'
import Snow from '../images/snow.jpg'


const Tour = () => {
  return (
    <div className='tour'>
        <div className='text'>
            <h1>UPCOMING TOURS &<br/> DESTINATION</h1>
            <p>Fuerat aestu carentem habentia spectent tonitrua <br/>mutastis locavit liberioris. 
                Sinistra possedit litora ut <br/>nabataeaque. Setucant coepyterunt perveniunt <br/>animal! 
                Concordi aurea 
                nabataeaque seductaque <br/>constaque cepit sublime flexi nullus
            </p>
            <Link to='/projects' className='btn btn-tour'>
                Learn More
            </Link>
        </div>
        <div className='images'>
            <div className='tour-left'>
                <img src={Image1} alt='image1' className='tour-image' />
                <img src={Snow1}  alt='snow1'className='tour-image' />
            </div>
            <div className='tour-right'>
                <img src={Mountain}  alt='mountain'className='tour-image' />
                <img src={Snow}  alt='snow'className='tour-image' />
            </div>
        </div>
    </div>
  )
}

export default Tour
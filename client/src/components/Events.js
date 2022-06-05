import React from 'react'
import './Events.css'
import Event1 from '../images/hiking-v1.jpg'
import Event2 from '../images/walking-v1.jpg'
import { Link } from 'react-router-dom'
const Events = () => {
  return (
    <div className='events'>
        <h1>Upcoming Events</h1>
        <div className='flex'>
            <div className='left'>
                <img src={Event1} alt='hiking' className='event-img' />
                <div className='event-content'>
                    <h4>Everest Camp Trek</h4>
                    <p>Fuerat aestu carentem habentia spectent tonitrua mutastis 
                    locavit liberioris inistra possedit.
                    </p>
                    <Link to='/projects' className='btn btn-event'>
                        Learn More
                    </Link>
                </div>
            </div>

            <div className='right'>
                <img src={Event2} alt='hiking' className='event-img'/>
                <div className='event-content'>
                    <h4>Walking Holidays</h4>
                    <p>Fuerat aestu carentem habentia spectent tonitrua mutastis 
                    locavit liberioris inistra possedit.
                    </p>
                    <Link to='/projects' className='btn btn-event'>
                        Learn More
                    </Link>
                </div>
              
            </div>
        </div>
        
    </div>
  )
}

export default Events
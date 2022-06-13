import React from 'react'
import './Abouthero.css'
import AboutImage from '../images/about-hero.jpg'
import Mission1 from '../images/mission-2.jpg'

const Abouthero = () => {
  return (
    <>
        <div className='about-hero'>
            <img src={AboutImage} alt='about-hero'/>
            <h1>WHO ARE WE?</h1>
        </div>

        <div className='misson'>
            <div className='left-mission'>
                <h1>OUR MISSION</h1>
                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, 
                    adipiscing elit.
                </p>
                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, 
                    pulvinar dapibus leo.

                </p>
            </div>

            <div className='right-mission'>
                <img src={Mission1} alt='mission' className='mission-img'/>
            </div>
        </div>

        <div className='experience'>
            <div className='left-experience'>
                <h1>Extraordinary Experiences</h1>
                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className='p1'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, adipiscing elit.</p>
            </div>

            <div className='right-experience'>
                <h1>Our Core Values</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className='p1'>
                    <p>Locavit liberioris possedit</p>
                    <p>Diremit mundi mare undae</p>
                    <p>Spectent tonitrua mutastis</p>
                </div>
            </div>
        </div>

    </>    
  )
}

export default Abouthero
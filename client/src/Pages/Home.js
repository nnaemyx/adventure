import React from 'react'
import Events from '../components/Events'
import Explore from '../components/Explore'
import Hero2 from '../components/Hero2'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'
import Tour from '../components/Tour'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage/>
      <Hero2/>
      <Events/>
      <Explore/>
      <Tour/>
    </div>
  )
}

export default Home
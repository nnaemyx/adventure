import React from 'react'
import Events from '../components/Events'
import Hero2 from '../components/Hero2'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage/>
      <Hero2/>
      <Events/>
    </div>
  )
}

export default Home
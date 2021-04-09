import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import About from './About'
import HeroSection from './HeroSection'
import Proyects from './Proyects'

function Home() {
    return (
        <> 
          <HeroSection/>
          <Proyects/>
          <About/>
          <Footer/>
        </>
    )
}

export default Home

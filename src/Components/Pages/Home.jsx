import React from 'react'
import Footer from '../Footer'
import Contact from './Contact'
import HeroSection from './HeroSection'
import Proyects from './Proyects'

function Home() {
    return (
        <> 
          <HeroSection/>
          <Proyects/>
          <Contact/>
          <Footer/>
        </>
    )
}

export default Home

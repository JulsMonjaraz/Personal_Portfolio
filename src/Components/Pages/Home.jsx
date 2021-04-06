import React from 'react'
import Navbar from '../Navbar'
import About from './About'
import HeroSection from './HeroSection'
import Proyects from './Proyects'

function Home() {
    return (
        <>
         <Navbar/>
         <HeroSection/>
         <Proyects/>
         <About/>
        </>
    )
}

export default Home

import React from 'react'
import Hero from './Hero'
import Headline from './Headline'
import Content from './Content'
import WhatsApp from '../whatapp/Whatsapp'
import Navbar from '../../componets/Navbar/Navbar'
import Footer from '../Footer/Footer'
import Imagegrid from './Imagegrid'

function Home() {
  return (
    <div>
    <Navbar/>
      <Hero/>
      <Headline/>
      <Content/>
      <WhatsApp/>
      <Imagegrid/>
      <Footer/>
    </div>
  )
}

export default Home

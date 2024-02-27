import React from 'react'
import Herosection from './Herosection'
import About from './About'
import Services from './Services'
import Steps from './Steps'
import Benefitss from './Benefitss'
import Banner from './Banner'
import Kitchenlayouts from './Kitchenlayouts'
import Testimonials from './Testimonials'
import Contact from './Contact'



export default function Home() {
  return (
    <div>
       <Herosection/>
       <About/>
       <Services/>
       <Steps/>
       <Benefitss/>
       <Banner/>
       <Kitchenlayouts/>
       <Testimonials/>
       <Contact/>
    </div>
  )
}

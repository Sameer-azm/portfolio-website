import React from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Skills from './Components/Skills'

const App = () => {
  return (
    <div>
        <Nav/>
        <main>
         <Hero/>
         <About/> 
         <Projects/>
         <Skills/>
         <Contact/>
</main>
<Footer/>
      
    </div>
  )
}

export default App
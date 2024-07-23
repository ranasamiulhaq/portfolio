import React from 'react'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Tech  from './components/Tech.jsx'
import Experience from './components/Experience.jsx'
import Project from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const App = ()=>{
  const [show , setShow] = React.useState("Web Developer")

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-neutral-900'>
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-20">
      <NavBar show={show} setShow={setShow}/>
      <Hero show={show}  />
      <About />
      <Tech show={show} />
      <Project show={show}/>
      <Experience show={show} />
      <Contact />

      </div>

  </div>
  )
}

export default App

import './App.css'
import Navigation from './components/Navigation'
import { Home } from './components/Home'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  const [toggle,setToggle] = useState(true)
  const [showModal,setShowModal] = useState(true)
  console.log(showModal)
  const [dimensions,setDimensions] = useState({width: `${screen.width}`, height: `${screen.height}`})
  window.onresize = () => {
   setDimensions({width: `${screen.width}`, height: `${screen.height}`})
  }
  document.documentElement.style.setProperty(`--width`, `'${dimensions.width}'`)
  document.documentElement.style.setProperty(`--height`, `'${dimensions.height}'`)
  return (
      <Router>
        <Navigation 
          toggle = {toggle}
          setToggle = {setToggle}
          showModal = {showModal}
          setShowModal = {setShowModal}          
        />
        <Routes>
          <Route path = '/' element = {<Home toggle = {toggle}
          setToggle = {setToggle} />}/>
          <Route path = 'about' element = {<About />}/>
          <Route path = 'project' element = {<Projects />}/>
          <Route path = 'contact' element = {<Contact />} />
        </Routes>
      </Router>
  )
}

export default App

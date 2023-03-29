import './App.css'
import Navigation from './components/Navigation'
import { Home } from './components/Home'
import { useState } from 'react';
function App() {
  const [toggle,setToggle] = useState(true)
  const [dimensions,setDimensions] = useState({width: `${screen.width}`, height: `${screen.height}`})
  window.onresize = () => {
   setDimensions({width: `${screen.width}`, height: `${screen.height}`})
  }
  document.documentElement.style.setProperty(`--width`, `'${dimensions.width}'`)
  document.documentElement.style.setProperty(`--height`, `'${dimensions.height}'`)
  return (
    <>
      <Navigation 
        toggle = {toggle}
        setToggle = {setToggle}
      />
      <Home 
        toggle = {toggle}/>
    </>
  )
}

export default App

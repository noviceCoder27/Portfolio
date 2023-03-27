import './App.css'
import Navigation from './components/Navigation'
import { Home } from './components/Home'
import { useState } from 'react';
function App() {
  const [toggle,setToggle] = useState(true)
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

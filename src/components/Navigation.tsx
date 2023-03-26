import '../styles/Navigation.css'
import Me from '../images/M.png'
import { GoThreeBars } from "react-icons/go"
import { IoCloseSharp } from "react-icons/io5"
import { useState } from 'react'


const Navigation = () => {
  const [toggle,setToggle] = useState(true)
  return (
    <div className='navigation'>
      <img src = {Me} alt = 'logo' loading='lazy' decoding='async'/>
      <nav className='desktop-modal'>
        <a href = '#'>Home</a>
        <a href = '#'>About</a>
        <a href= '#'>Projects</a>
        <a href= '#'>Contact</a>
        <button>Resume</button>
      </nav>
      {toggle && <GoThreeBars className = 'toggle-modal' onClick={() => setToggle(false)}/>}
      {!toggle && <IoCloseSharp className='toggle-modal' onClick={() => setToggle(true)}/>}
      {!toggle && <nav className='mobile-nav'>
        <a>Home</a>
        <a>About</a>
        <a>Projects</a>
        <a>Contact</a>
        <button>Resume</button>
      </nav>}
    </div>
  )
}

export default Navigation

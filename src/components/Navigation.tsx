import '../styles/Navigation.css'
import Me from '../images/M.png'
import { GoThreeBars } from "react-icons/go"
import { IoCloseSharp } from "react-icons/io5"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  toggle: boolean,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const Navigation = ({toggle,setToggle}: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <img src = {Me} alt = 'logo' loading='lazy' decoding='async' role= 'presentation'/>
      <nav className='desktop-modal'>
        <Link to = '/'>Home</Link>
        <Link to = '/about'>About</Link>
        <Link to = '/project'>Projects</Link>
        <Link to = '/contact'>Contact</Link>
        <button>Resume</button>
      </nav>
      {toggle && <GoThreeBars className = 'toggle-modal' onClick={() => setToggle(false)}/>}
      {!toggle && <IoCloseSharp className='toggle-modal' onClick={() => setToggle(true)}/>}
      {!toggle && <nav className='mobile-nav'>
        <Link to = '/'>Home</Link>
        <Link to = '/about'>About</Link>
        <Link to = '/project'>Projects</Link>
        <Link to = '/contact'>Contact</Link>
        <button>Resume</button>
      </nav>}
    </header>
  )
}

export default Navigation

import '../styles/Navigation.css'
import Me from '../images/M.png'
import { GoThreeBars } from "react-icons/go"
import { IoCloseSharp } from "react-icons/io5"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  toggle: boolean,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>,
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}

const Navigation = ({toggle,setToggle,showModal,setShowModal}: Props) => {
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

  function hideModal() {
    setToggle(true)
    setShowModal(false)
  }

  function dispalyModal() {
    setToggle(false)
    setShowModal(true)
  }

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
      {toggle && <GoThreeBars className = 'toggle-modal' onClick={dispalyModal}/>}
      {!toggle && <IoCloseSharp className='toggle-modal' onClick= {hideModal}/>}
      {!toggle && showModal && <nav className='mobile-nav'>
        <Link to = '/' onClick={hideModal}>Home</Link>
        <Link to = '/about' onClick={hideModal}>About</Link>
        <Link to = '/project' onClick={hideModal}>Projects</Link>
        <Link to = '/contact' onClick={hideModal}>Contact</Link>
        <button>Resume</button>
      </nav>}
    </header>
  )
}

export default Navigation

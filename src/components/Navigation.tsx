import '../styles/Navigation.css'
import Me from '../images/M.png'
import { GoThreeBars } from "react-icons/go"
import { IoCloseSharp } from "react-icons/io5"

type Props = {
  toggle: boolean,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const Navigation = ({toggle,setToggle}: Props) => {
  return (
    <header className='navigation'>
      <img src = {Me} alt = 'logo' loading='lazy' decoding='async' role= 'presentation'/>
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
        <a href = '#'>Home</a>
        <a href = '#'>About</a>
        <a href = '#'>Projects</a>
        <a href = '#'>Contact</a>
        <button>Resume</button>
      </nav>}
    </header>
  )
}

export default Navigation

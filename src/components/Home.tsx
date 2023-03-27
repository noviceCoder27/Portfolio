import '../styles/Home.css'
import CoverPic from '../images/Home.webp'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

type Props = {
    toggle: boolean
}

export const Home = ({toggle}: Props) => {
  return (
    <main>
        <section className="intro">
            <div className='greet'>
                <h2>Hi </h2>
                {toggle && <span className='emote'>👋</span>}
            </div>
            <h1>I'm Mugdhatanu Dev Goswami</h1>
            <div className='role'>
                <h2>A</h2> 
                <h2>
                    <span>W</span>
                    <span>e</span>
                    <span>b</span>
                </h2>
                <h2 className='delay-view'>Frontend</h2>
                <h2>
                    <span>D</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                </h2>
            </div>
            <div className='icons'>
                <BsGithub className='icon'/>
                <FaLinkedinIn className='icon'/>
                <BsTwitter className='icon'/>
                <AiFillInstagram className='icon'/>
            </div>
        </section>
        <img src = {CoverPic}  loading='lazy' decoding='async' role= 'presentation' className='cover-pic'/>
    </main>
  )
}
import './index.css'
import Logo from '../../assets/logo-project.png'
import { useState } from 'react'

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="top-bar">
            <a className='link-logo' href="/">
                <img src={Logo} alt="Logo" className='logo' />
            </a>
            <nav className='nav-bar'>
                <div className='menu-mobile' onClick={()=> {
                    setIsOpen(!isOpen)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className='nav-list'>
                    <li><a className='menu-link' href="/">Adopt</a></li>
                    <li><a className='menu-link' href="/foster">Foster</a></li>
                    <li><a className='menu-link' href="/vontlunteer">Volunteer</a></li>
                    <li><a className='menu-link' href="/aboutus">About Us</a></li>
                    <li><a className='menu-link' href="/contact">Contact</a></li>
                    <li><a className='menu-link' href="/joinus">Join Us</a></li>
                </ul>                
            </nav>           
        </div>
        )
    }
    
export default Header
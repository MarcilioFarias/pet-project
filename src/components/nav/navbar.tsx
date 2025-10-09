import { useState } from 'react';
import Logo from '../../assets/logo-project.png'
import './nav.css'
import { FaBars, FaXmark } from "react-icons/fa6";

function Nav(){

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    return (
       <nav className="navbar">
            <div className="logo">
                <img  src={Logo} alt='logo'/>                
            </div>

            <ul className={`nav-items ${openMenu ? 'open' : ''}`}>
                <li className='nav-item'>
                    <a className='nav-link' href='#home'>Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#about'>About</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#services'>Services</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#contact'>Contact</a>
                </li>
            </ul>
            <div className='nav-button'>
                <button className='btn-nav'>Join Us</button>
                <button className='btn-nav'>Donate</button>
            </div>
            <div className='menu-mobile' onClick={()=> setOpenMenu(!openMenu)}>
                { openMenu ? <FaXmark /> : <FaBars />}
            </div>
       </nav>
    )
}

export default Nav
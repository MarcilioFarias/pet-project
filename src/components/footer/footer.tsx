import './index.css'
import Instagram from '../../assets/socials/Instagram.png'
import WhatsApp from '../../assets/socials/WhatsApp.png'
import Facebook from '../../assets/socials/Facebook.png'

function Footer(){
    return (
        <div className="footer">
            <div className='social-media'>
                <a href='#'><img alt='Instagram' src={Instagram}/></a>
                <a href='#'><img alt='WhatsApp' src={WhatsApp}/></a>
                <a href='#'><img alt='Facebook' src={Facebook}/></a>
             </div>
            <p>&copy; 2025 My Website</p>   
        </div>
    )
}

export default Footer
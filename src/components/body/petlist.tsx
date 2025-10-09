import './petlist.css'
import FavIcon from '../../assets/icons/fav_icon_off.png'

function PetList(){
    return (
        <div className="petlist">            
            <div className='pet-card'>
                <div className='card-image'>
                    <img className='pet-img' src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Dog" />
                    <i className='fav-icon'>
                        <img className='pet-fav-icon' src={FavIcon} alt='Favourite Pet Icon' />
                    </i>
                </div>
                <div className='pet-content'>
                    <h3>Buddy</h3>
                    <p>Breed: Golden Retriever</p>
                    <p>Age: 3 Months</p>                
                    <button className='button-adopt'>Adopt Me</button>
                </div>
            </div>
            <div className='pet-card'>
                <div className='card-image'>
                    <img className='pet-img' src="https://media.istockphoto.com/id/1335374640/photo/cat-looking.jpg?s=2048x2048&w=is&k=20&c=sYKL7fO3QH2gC16yt_Cg8yeIUbRFIGAcLxKzkAjbwfc=" alt="Cat" />
                    <i className='fav-icon'>
                        <img className='pet-fav-icon' src={FavIcon} alt='Favourite Pet Icon' />
                    </i>
                </div>
                <div className='pet-content'>
                    <h3>Whiskers</h3>
                    <p>Breed: Siamese</p>
                    <p>Age: 1 Year</p>                
                    <button className='button-adopt'>Adopt Me</button>
                </div>
            </div>
            <div className='pet-card'>
                <div className='card-image'>
                    <img className='pet-img' src="https://images.unsplash.com/photo-1659324798203-43b29bd7c5f8?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rabbit" />
                    <i className='fav-icon'>
                        <img className='pet-fav-icon' src={FavIcon} alt='Favourite Pet Icon' />
                    </i>
                </div>
                <div className='pet-content'>
                    <h3>Thumper</h3>
                    <p>Breed: Holland Lop</p>
                    <p>Age: 6 Months</p>                
                    <button className='button-adopt'>Adopt Me</button>
                </div>
            </div>
            <div className='pet-card'>
                <div className='card-image'>
                    <img className='pet-img' src="https://images.unsplash.com/photo-1746964245745-ecc9e553ba1c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Parrot" />
                    <i className='fav-icon'>
                        <img className='pet-fav-icon' src={FavIcon} alt='Favourite Pet Icon' />
                    </i>
                </div>
                <div className='pet-content'>
                    <h3>Polly</h3>
                    <p>Breed: African Grey</p>
                    <p>Age: 2 Years</p>                
                    <button className='button-adopt'>Adopt Me</button>
                </div>
            </div>
            <div className='pet-card'>
                <div className='card-image'>
                    <img className='pet-img' src="https://media.istockphoto.com/id/2166062544/photo/a-syrian-hamster-peeking-out-of-its-cage.jpg?s=2048x2048&w=is&k=20&c=EVMScf3xpa38b_XVWpXQhvD-uyrJaE52R1d5Ge6Pfrs=" alt="Hamster" />
                    <i className='fav-icon'>
                        <img className='pet-fav-icon' src={FavIcon} alt='Favourite Pet Icon' />
                    </i>
                </div>
                <div className='pet-content'>
                    <h3>Nibbles</h3>
                    <p>Breed: Syrian Hamster</p>
                    <p>Age: 4 Months</p>                
                    <button className='button-adopt'>Adopt Me</button>
                </div>
            </div>
            <div className='pet-card'>
                <div className='card-image'>
                    <img className='pet-img' src="https://media.istockphoto.com/id/2177666573/photo/red-eared-slider-turtle-basking-on-rock-in-green-water.jpg?s=2048x2048&w=is&k=20&c=r3vuiZ1jAxKeR76UDPOLGfdVSHorG7lujTbvsw1axcc=" alt="Turtle" />
                    <i className='fav-icon'>
                        <img className='pet-fav-icon' src={FavIcon} alt='Favourite Pet Icon' />
                    </i>
                </div>
                <div className='pet-content'>
                    <h3>Speedy</h3>
                    <p>Breed: Red-Eared Slider</p>
                    <p>Age: 5 Years</p>                
                    <button className='button-adopt'>Adopt Me</button>
                </div>
            </div>
            <div className='pet-card'>
                <div className='card-image'>
                    <img className='pet-img' src="https://media.istockphoto.com/id/2140648833/photo/brown-and-white-guinea-pig-outside-on-the-grass.jpg?s=2048x2048&w=is&k=20&c=NPVQOF-ALuaX3-ymQM1Jpe0DLR_8_5oGOA2rEWx47rw=" alt="Guinea Pig" />
                    <i className='fav-icon'>
                        <img className='pet-fav-icon' src={FavIcon} alt='Favourite Pet Icon' />
                    </i>
                </div>
                <div className='pet-content'>
                    <h3>Pepper</h3>
                    <p>Breed: American Guinea Pig</p>
                    <p>Age: 1 Year</p>                
                    <button className='button-adopt'>Adopt Me</button>
                </div>
            </div>
            <div className='pet-card'>
                <div className='card-image'>
                    <img className='pet-img' src="https://media.istockphoto.com/id/2152616164/photo/blue-siamese-fighting-fish-rosetail-halfmoon-aquarium-pet-blue-red-betta-splendens.jpg?s=2048x2048&w=is&k=20&c=5B_ogjnjhe2q_eA6bjFddPilL4ssU35xF5H3U99UskY=" alt="Fish" />
                    <i className='fav-icon'>
                        <img className='pet-fav-icon' src={FavIcon} alt='Favourite Pet Icon' />
                    </i>
                </div>
                <div className='pet-content'>
                    <h3>Bubbles</h3>
                    <p>Breed: Betta Fish</p>
                    <p>Age: 1 Year</p>                
                    <button className='button-adopt'>Adopt Me</button>
                </div>
            </div>
            <div className='pet-card'>
                <div className='card-image'>
                    <img className='pet-img' src="https://media.istockphoto.com/id/2189409908/photo/border-collie-pup-on-white-background.jpg?s=1024x1024&w=is&k=20&c=xFkm8sdO0vdgRIetq7Fq2TQ47OISt-e2XMHuU9Z2GBI=" alt="Dog" />
                    <i className='fav-icon'>
                        <img className='pet-fav-icon' src={FavIcon} alt='Favourite Pet Icon' />
                    </i>
                </div>
                <div className='pet-content'>
                    <h3>Izzy</h3>
                    <p>Breed: Border Collie</p>
                    <p>Age: 4 Months</p>                
                    <button className='button-adopt'>Adopt Me</button>
                </div>
            </div>
            <div className='pet-card'>
                <div className='card-image'>
                    <img className='pet-img' src="https://media.istockphoto.com/id/2178364721/photo/four-toed-hedgehog-on-black-background.jpg?s=1024x1024&w=is&k=20&c=3ziYBJq70Q-PSJ--HZy8HPKdnsQa_swzIP0zW8IG0Lk=" alt="Iguana" />
                    <i className='fav-icon'>
                        <img className='pet-fav-icon' src={FavIcon} alt='Favourite Pet Icon' />
                    </i>
                </div>
                <div className='pet-content'>
                    <h3>Pippin</h3>
                    <p>Breed: African Pygmy Hedgehog</p>
                    <p>Age: 1 year</p>                
                    <button className='button-adopt'>Adopt Me</button>
                </div>
            </div>
        </div>
    )
}
export default PetList
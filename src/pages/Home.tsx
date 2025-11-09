import './Home.css'
import Footer from '../components/footer/footer'
import Nav from '../components/nav/navbar'

import { petData } from '../components/Pet-List/pet-data'
import { PetCard } from '../components/Pet-List/pet-card'

function Home(){
  return (
    <>
      <header>        
        <Nav />
      </header>
      <section>        
        <PetCard pet={petData}/>        
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home
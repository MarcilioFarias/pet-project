import './Home.css'
// import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import PetList from '../components/body/petlist'
import Nav from '../components/nav/navbar'

function Home(){
  return (
    <>
      <header>        
        <Nav />
      </header>
      <section>
        <PetList />        
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Service from "./components/Service"

function App() {

  return (
      <div id="home" className="bg-black text-gray-100 w-screen relative">
        <Navbar/>
        <Hero/>
        <About/>
        <Service/>
        <Contact/>
        <Footer/>
       </div>
    
  )
}

export default App

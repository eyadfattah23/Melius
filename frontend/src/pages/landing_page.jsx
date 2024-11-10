import "../assets/styles/landing_page.css"
import Header from "../components/landing_page/header"
import Navbar from "../components/common/navbar"
import { useState } from "react"
import Features from "../components/landing_page/features"
// import About from "../components/landing_page/about"
import Process from "../components/landing_page/process"
import CTA from "../components/landing_page/cta"
import Contact from "../components/landing_page/contact"
import Footer from "../components/footer"
// import Team from "../components/landing_page/team"
/**
 * serves as the main entry point of the application, showcasing various sections 
 * 
 */
function LandingPage(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return   <main>
 
  <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
 <Header/>
  <Features/>
  <Process/>
  <CTA/>
  {/* <About/> */}
  {/* <Team/> */}
  {/* <Contact/>  */}

  <Footer/>
</main>
}
export default LandingPage
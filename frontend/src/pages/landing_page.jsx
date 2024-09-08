import Header from "../components/landing_page/header"
import Navbar from "../components/navbar"
import "../assets/styles/landing_page.css"
import Features from "../components/landing_page/features"
import About from "../components/landing_page/about"
import Contact from "../components/landing_page/contact"
import Footer from "../components/footer"
function LandingPage(){
  return   <div>
  <Navbar/>
  <Header/>
  <Features/>
  <About/>
  <Contact/>
  <Footer/>
</div>
}
export default LandingPage
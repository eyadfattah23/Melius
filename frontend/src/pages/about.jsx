import Navbar from "../components/common/navbar"
import About from "../components/landing_page/about"
import Footer from "../components/footer"
function AboutPage(){
    return <>
    <Navbar/>
   <main className="main_layout">
   <About/>
   </main>
    <Footer/>
    </>
}
export default AboutPage
import Footer from "../components/footer"
import Contact from "../components/landing_page/contact"
import Navbar from "../components/common/navbar"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
function HelpSupport(){
    
 
    return <>
    <Navbar/>
    <main className="main_layout">
    <Contact/>
    </main>
    <Footer/>
    </>
}
export default HelpSupport
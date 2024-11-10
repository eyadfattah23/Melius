import Footer from "../components/footer"
import Contact from "../components/landing_page/contact"
import Navbar from "../components/common/navbar"
/**
 *  is designed to provide a help and support page for users.
 * ```
 */
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
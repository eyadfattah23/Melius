import { Link } from "react-router-dom"
import Button from "../components/common/button"
import Footer from "../components/footer"
import Navbar from "../components/common/navbar"
import "../assets/styles/not_found.css"
function Error_404(){
    const loggedin = localStorage.getItem("user_id")
    return <> 
    <Navbar/>
    <section className="not_found_main">
        <span>404</span>
        <p>This page was not found. You may have mistyped the address or the page may have moved</p>
       <Link to={"/"}>
       <Button text={loggedin ? "Take me to the home page": "Take me to the landing page"} type={"btn_404"}/>
       </Link>
    </section>
    <Footer/>
    </>
}
export default Error_404
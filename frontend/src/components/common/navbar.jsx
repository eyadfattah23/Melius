import Logo from "./logo"
import Button from "./button"
import Menubar from "./menubar"
import Sidebar from "../sidebar"
import "../../assets/styles/common/navbar.css"
import { Link } from "react-router-dom"
function Navbar() {
  const loggedin = localStorage.getItem("token")
    return (
      <div className="navbar">
      <div className="nav-left">
        <Link to={"/"}>
        <Logo/>
        </Link>
        <Menubar loggedin={loggedin}/>
      </div>
      <div className="nav-right">
       <div className="btn">
      
       {
        !loggedin &&  <>
        <Link to={"/login"}>
       <Button text={"Login"} type={"cta_filled"}/>
       </Link>
       <Link to={"/signup"}>
       <Button text={"Join Our Community"} type={"cta_outline"}/>
       </Link>

       </>
       }
       
       </div>
        {
          loggedin && <Sidebar loggedin={loggedin}/>
        }
        </div>
      </div>
    )
  }
  
  export default Navbar
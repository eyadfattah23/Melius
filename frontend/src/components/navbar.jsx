import Icon from "../assets/icons/icon"
import Logo from "../assets/logo"
import Button from "./button"
import Menubar from "./menubar"
import Sidebar from "./sidebar"
import "../assets/styles/navbar.css"
import { Link } from "react-router-dom"
function Navbar() {
  const loggedin = localStorage.getItem("user_id")
    return (
      <div className="navbar">
      <div className="nav-left">
        <Logo/>
        <Menubar loggedin={loggedin}/>
      </div>
      <div className="nav-right">
       <div className="btn">
       {
        loggedin ? <></>
        // <Button icon={<Icon name={"heart"} size={24}/>} text={"Donate"} type={"outline_primary"}/>
        :
        <>
         <Link to={"/login"}>
        <Button text={"Login"} type={"primary"}/>
        </Link>
        <Link to={"/signup"}>
        <Button text={"Join Our Community"} type={"outline_primary"}/>
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
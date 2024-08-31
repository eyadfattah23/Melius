import Icon from "../assets/icons/icon"
import Logo from "../assets/logo"
import Button from "./button"
import Menubar from "./menubar"
import Sidebar from "./sidebar"
import "../assets/styles/navbar.css"
function Navbar({loggedin}) {
  
    return (
      <div className="navbar">
      <div className="nav-left">
        <Logo/>
        <Menubar loggedin={loggedin}/>
      </div>
      <div className="nav-right">
       <div className="btn">
       {
        loggedin ? 
        <Button icon={<Icon name={"heart"} size={24}/>} text={"Donate"} type={"outline_primary"}/>
        :
        <>
        <Button text={"Login"} type={"primary"}/>
        <Button text={"Join Us"} type={"outline_primary"}/>
        </>
       }
       </div>
        {
          loggedin && <Sidebar/>
        }
        </div>
      </div>
    )
  }
  
  export default Navbar
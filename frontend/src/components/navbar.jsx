import Logo from "../assets/logo"
import Button from "./button"
import Menubar from "./menubar"
import Sidebar from "./sidebar"
function Navbar() {
  
    return (
      <>
      <div className="nav-left">
        <Logo/>
        <Menubar/>
      </div>
      <div className="nav-right">
        <Button/>
        <Sidebar/>
        </div>
      </>
    )
  }
  
  export default Navbar
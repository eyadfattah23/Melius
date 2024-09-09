import Avatar from "./avatar"
import "../assets/styles/sidebar.css"
import { Link, useNavigate } from "react-router-dom"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "./shadcn/ui/dropdown-menu"
  import {    DialogTrigger, Dialog  } from "../components/shadcn/ui/dialog"
import Icon from "../assets/icons/icon"
import Edit_Profile from "../pages/edit_profile.jsx"
import Button from "./common/button"
import countNumberOfDays from "../functions/count_number_of_days"
  function Sidebar({loggedin}) {
    const navigate = useNavigate();
    const level = JSON.parse(localStorage.getItem("level"))
    const handleLoggout =() =>{
      localStorage.removeItem("username");
      localStorage.removeItem("user_id");
      localStorage.removeItem("number_of_days");
      localStorage.removeItem("level");
      navigate("/login")
    }
    return (
        <DropdownMenu> <DropdownMenuTrigger asChild>
            <button className="avatar"><Avatar level={level}/></button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel className={"dropdown_label"}>
     My Profile
        </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <Dialog>
          <DialogTrigger asChild>
          <div className={"menu_item"}>
          <Icon name={"user"} size={16} />
         <span>Edit Account</span>
         </div>
          </DialogTrigger>
          <Edit_Profile/>
      </Dialog> 
        {/* <DropdownMenuItem className={"menu_item"}>
        <Icon name={"survey"} size={16} />
          <span>Tests</span>
        </DropdownMenuItem> */}
        {/* <DropdownMenuItem className={"menu_item"}>
        <Icon name={"calendar_todo"} size={16}/>
          <span>Programs</span>
        </DropdownMenuItem>     */}
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
      <Link to={"/about"}>
      <DropdownMenuItem className={"menu_item"}>
        <Icon name={"info"} size={16}/>
          <span>About us</span>
        </DropdownMenuItem>
      </Link>
      <Link to={"/contact"}>
      <DropdownMenuItem className={"menu_item"}>
        <Icon name={"question"} size={16}/>
          <span> Help and Support</span>
        </DropdownMenuItem>
      </Link>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem className={"menu_item"} onClick={handleLoggout}>
      <Icon name={"question"} size={16}/>
        <span>Log out</span>
      </DropdownMenuItem>
      <Link to={"/terms_conditions"}>
      <div>
        <span className={"terms_item"}>Terms & conditions</span>
      </div></Link>
    </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  
export default Sidebar
import Avatar from "./avatar"
import "../assets/styles/sidebar.css"
import { useNavigate } from "react-router-dom"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "./shadcn/ui/dropdown-menu"
  import { DialogTrigger, Dialog } from "@radix-ui/react-dialog"
import Icon from "../assets/icons/icon"
//import Edit_Profile from "../pages/edit_profile"
  function Sidebar() {
    const navigate = useNavigate();
    const handleLoggout =() =>{
      localStorage.removeItem("loggedin")
      localStorage.removeItem('user')
      navigate("/login")
    }
    return (
        <DropdownMenu> <DropdownMenuTrigger asChild>
            <button className="avatar"><Avatar/></button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel className={"dropdown_label"}>
     My Profile
        </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem className={"menu_item"}>
        <Icon name={"user"} size={16} />
        <Dialog>
      <DialogTrigger asChild>
      <span>Edit Account</span>
      </DialogTrigger>
      {/* <Edit_Profile/> */}
      </Dialog>
         
        </DropdownMenuItem>
        <DropdownMenuItem className={"menu_item"}>
        <Icon name={"survey"} size={16} />
          <span>Tests</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={"menu_item"}>
        <Icon name={"calendar_todo"} size={16}/>
          <span>Programs</span>
        </DropdownMenuItem>    
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem className={"menu_item"}>
        <Icon name={"info"} size={16}/>
          <span>About us</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={"menu_item"}>
        <Icon name={"question"} size={16}/>
          <span> Help and Support</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem className={"menu_item"} onClick={handleLoggout}>
      <Icon name={"question"} size={16}/>
        <span>Log out</span>
      </DropdownMenuItem>
      <div>
        <span className={"terms_item"}>Terms & conditions</span>
      </div>
    </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  
export default Sidebar
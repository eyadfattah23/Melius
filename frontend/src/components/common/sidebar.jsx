import Avatar from "../avatar";
import "../../assets/styles/sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../shadcn/ui/dropdown-menu";
import { DialogTrigger, Dialog } from "../shadcn/ui/dialog";
import Icon from "../../assets/icons/icon";
import Edit_Profile from "./edit_profile";
import handleLogout from "../../functions/loggout";
/**
 * Sidebar - A sidebar component for user profile and navigation options.
 * 
 * This component displays a sidebar menu that includes options for editing the user profile,
 * navigating to different pages, and logging out. It utilizes dropdown menus and dialogs for
 * interactions.
 */
function Sidebar({maxDays}) {
  const navigate = useNavigate();
const level = JSON.parse(localStorage.getItem("level"))  
  return (
    <DropdownMenu className="sidebar_main">
      <DropdownMenuTrigger asChild>
        <button className="flex items-center avatar">
          <Avatar level={`${level}`}/>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 dropdown_main p-2">
        <DropdownMenuLabel className="dropdown_label">My Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Dialog>
            <DialogTrigger asChild>
              <div className="menu_item flex items-center p-2">
                <Icon name="user" size={16} />
                <span className="ml-2">Edit Account</span>
              </div>
            </DialogTrigger>
            <Edit_Profile />
          </Dialog>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to={"/about"}>
            <DropdownMenuItem className="menu_item flex items-center p-2">
              <Icon name="info" size={16} />
              <span className="ml-2">About us</span>
            </DropdownMenuItem>
          </Link>
          <Link to={"/contact"}>
            <DropdownMenuItem className="menu_item flex items-center p-2">
              <Icon name="question" size={16} />
              <span className="ml-2">Help and Support</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="menu_item flex items-center p-2" onClick={()=> handleLogout(navigate)}>
          <Icon name="logout" size={16} />
          <span className="ml-2">Log out</span>
        </DropdownMenuItem>
        <Link to={"/terms_conditions"}>
          <div className="p-2">
            <span className="terms_item">Terms & conditions</span>
          </div>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Sidebar;

import Avatar from "./avatar";
import "../assets/styles/sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./shadcn/ui/dropdown-menu";
import { DialogTrigger, Dialog } from "../components/shadcn/ui/dialog";
import Icon from "../assets/icons/icon";
import Edit_Profile from "../components/common/edit_profile";
import Button from "./common/button";
import countNumberOfDays from "../functions/count_number_of_days";

function Sidebar({ loggedin }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center">
          <Avatar  />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray-800 text-white">
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
        <DropdownMenuItem className="menu_item flex items-center p-2" onClick={handleLogout}>
          <Icon name="logout" size={16} />
          <span className="ml-2">Log out</span>
        </DropdownMenuItem>
        <Link to={"/terms_conditions"}>
          <div className="p-2">
            <span className="text-sm text-gray-400">Terms & conditions</span>
          </div>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Sidebar;

import Avatar from "./avatar"
import "../assets/styles/sidebar.css"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "./shadcn/ui/dropdown-menu"
  function Sidebar() {
    return (
        <DropdownMenu> <DropdownMenuTrigger asChild>
            <button className="avatar"><Avatar/></button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>My Profile</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          {/* <User className="mr-2 h-4 w-4" /> */}
          <span>Edit Account</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {/* <CreditCard className="mr-2 h-4 w-4" /> */}
          <span>Tests</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {/* <Settings className="mr-2 h-4 w-4" /> */}
          <span>Programs</span>
        </DropdownMenuItem>    
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          {/* <Users className="mr-2 h-4 w-4" /> */}
          <span>About us</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {/* <Users className="mr-2 h-4 w-4" /> */}
          <span> Help and Support</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        {/* <LogOut className="mr-2 h-4 w-4" /> */}
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
       
      </DropdownMenu>
    )
  }
  
export default Sidebar
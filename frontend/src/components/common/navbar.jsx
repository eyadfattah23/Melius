import { useState } from "react";
import Logo from "./logo";
import Button from "./button";
import Menubar from "./menubar";
import Sidebar from "../sidebar";
import "../../assets/styles/common/navbar.css";
import { Link } from "react-router-dom";
import Icon from "../../assets/icons/icon";

/**
 * Navbar Component
 * The Navbar component provides a responsive navigation bar that adapts based on the user's authentication state and screen size. It includes links for both logged-in and non-logged-in users and integrates a sidebar for authenticated users.
 */
function Navbar({maxDays}) {
  const [isOpen, setIsOpen] = useState(false);
  const loggedin = localStorage.getItem("token");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav_main  text-white flex items-center justify-between">
     <Link to={"/"}>
          <Logo />
        </Link>
      <div className="ndnd items-center ">
        
        <button
        className="lg:hidden"
          onClick={toggleMenu}
        >
          <Icon name={"menu"} size={24} color={"grey"}/>
        </button>
        <div className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
          <Menubar loggedin={loggedin} />
        </div>
      </div>
      <div className="hidden lg:flex items-center space-x-4">
        {!loggedin ? (
          <>
            <Link to={"/login"}>
              <Button text={"Login"} type={"cta_filled"} />
            </Link>
            <Link to={"/signup"}>
              <Button text={"Join Our Community"} type={"cta_outline"} />
            </Link>
          </>
        ) : (
          <Sidebar loggedin={loggedin}  maxDays={maxDays} />
        )}
      </div>
    </div>
  );
}

export default Navbar;

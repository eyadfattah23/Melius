
import { useState } from "react";
import Logo from "./logo";
import Button from "./button";
import Menubar from "./menubar";
import "../../assets/styles/common/navbar.css";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import Icon from "../../assets/icons/icon";

function Navbar({ maxDays, isMenuOpen, setIsMenuOpen }) {
  const loggedin = localStorage.getItem("token");

  return (
    <header 
    className={`${isMenuOpen ? "bg-black bg-opacity-55 h-full  h-[60px] pt-9 px-12 pr-16": "mx-6 h-[60px] px-6 rounded-[50px] mt-6  items-center"} fixed top-0 z-[999] lg:h-[90px] lg:mx-16 lg:mt-6 lg:rounded-[50px] lg:px-6 lg:px-16 lg:bg-white lg:bg-opacity-20 flex lg:items-center justify-between`}

    style={
      {
       backdropFilter: "blur(50px)",
             width:
              window.innerWidth >= 1024
               ? "calc(100vw - 128px)"
                 : isMenuOpen
                 ? "calc(100vw)"
                 : "calc(100vw - 72px)",
             boxShadow:
           !isMenuOpen? "0px 4px 4px 0px rgba(0, 0, 0, 0.09)": "none"
           }
         }
    >
   
 
        <Logo />
        <button
          className="lg:hidden h-9 z-[999] "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={36} color="white" /> : <Icon name={"menu"}/>}
        </button>
        <Menubar loggedin={loggedin} isMenuOpen={isMenuOpen} />
        <div className="hidden lg:flex gap-6">
          <Link to={"/login"}>
            <Button text={"Login"} type={"cta_nav_outline"} />
          </Link>
          <Link to={"/signup"}>
            <Button text={"Join Our Community"} type={"cta_nav_filled"} />
          </Link>
        </div>
      
    </header>
  );
}

export default Navbar;

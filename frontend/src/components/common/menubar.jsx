// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Icon from "../../assets/icons/icon";
// import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../shadcn/ui/navigation-menu";
// import Button from "./button";
// /**
//  * Menubar Component
//  * The Menubar component is responsible for rendering a navigation menu that adapts based on the user's logged-in state. The component conditionally displays different menu items depending on whether the user is logged in or not, and it is also responsive to different screen sizes.
//  */
// function Menubar({ loggedin, isMenuOpen }) {
//   const [activeItem, setActiveItem] = useState(1);

//   return (
//     <NavigationMenu
//     className={`${
//       isMenuOpen
//         ? "flex h-screen  bg-opacity-20 bg-white items-start font-size-button text-white"
//         : "hidden  "
//     } absolute lg:static lg:flex  flex-col lg:flex-row  lg:items-center gap-4 lg:p-0 p-8 pt-16 lg:bg-transparent lg:justify-between `}
//     style={{
//       backdropFilter: isMenuOpen ? "blur(50px)" : "none",
//     }}
//   >
//     <NavigationMenuList className={`menubar  flex lg:flex-row flex-col items-start gap-4   w-[100vw] text-black rounded-lg  lg:bg-transparent lg:w-auto lg:space-x-0 flex lg:static`}>

//       {loggedin ? (
//         <>
//           <NavigationMenuItem className={`menu_item ${window.location.pathname === "/home" ? "active_item" : ""}`} onClick={() => setActiveItem(1)}>
//             <Link to={'/home'}>Home</Link>
//           </NavigationMenuItem>
//           <NavigationMenuItem className={`menu_item ${window.location.pathname === "/challenge" ? "active_item" : ""}`} onClick={() => setActiveItem(2)}>
//             <Link to={'/challenge'}>Challenge</Link>
//           </NavigationMenuItem>
//           <NavigationMenuItem className={`menu_item ${window.location.pathname === "/community" ? "active_item" : ""}`} onClick={() => setActiveItem(3)}>
//             <Link to={'/community'}>Community</Link>
//           </NavigationMenuItem>
//           <NavigationMenuItem className={`menu_item ${window.location.pathname === "/articles" ? "active_item" : ""}`} onClick={() => setActiveItem(4)}>
//             <Link to={'/articles'}>Articles</Link>
//           </NavigationMenuItem>
       
//           <NavigationMenuItem className={`menu_item  lg:hidden ${activeItem === 6 ? "active_item" : ""}`} onClick={() => setActiveItem(6)}>
//             <Link to={"/about"}>
//             About us
//             </Link>
//           </NavigationMenuItem>
//           <NavigationMenuItem className={`menu_item  lg:hidden ${activeItem === 6 ? "active_item" : ""}`} onClick={() => setActiveItem(6)}>
//             <Link to={"/contact"}>
//             Help and Support
//             </Link>
//           </NavigationMenuItem>
//           <NavigationMenuItem className={`menu_item  lg:hidden ${activeItem === 6 ? "active_item" : ""}`} onClick={() => setActiveItem(6)}>
//             <Link to={"/terms_conditions"}>
//             Terms & Conditions
//             </Link>
//           </NavigationMenuItem>
//           <NavigationMenuItem className={`menu_item  lg:hidden ${activeItem === 6 ? "active_item" : ""}`} onClick={() => setActiveItem(6)}>
//             <Link to={"/terms_conditions"}>
//             <Icon name="logout" size={16} />
//             </Link>
//           </NavigationMenuItem>
          
//         </>
//       ) : (
//         <>
//           <NavigationMenuItem className={`menu_item ${1 === activeItem ? "active_item" : ""}`} onClick={() => setActiveItem(1)}>
//             <a href={'/landing_page#features'}>Features</a>
//           </NavigationMenuItem>
//           <NavigationMenuItem className={`menu_item ${2 === activeItem ? "active_item" : ""}`} onClick={() => setActiveItem(2)}>
//             <a href={'/landing_page#about'}>About</a>
//           </NavigationMenuItem>
//           <NavigationMenuItem className={`menu_item ${3 === activeItem ? "active_item" : ""}`} onClick={() => setActiveItem(3)}>
//             <a href={'/landing_page#contact'}>Contact</a>
//           </NavigationMenuItem>
          
//      <Link to={"/login"} className="lg:hidden">
//               <Button text={"Login"} type={"cta_outline"} />
//             </Link>
//             <Link to={"/signup"}  className="lg:hidden">
//               <Button text={"Join Our Community"} type={"cta_filled"} />
//             </Link>

//         </>
//       )}
    
//     </NavigationMenuList>
//     </NavigationMenu>
//   );
// }

// export default Menubar;

import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../assets/icons/icon";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../shadcn/ui/navigation-menu";
import Button from "./button";

function Menubar({ loggedin, isMenuOpen }) {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <NavigationMenu
      className={`${
        isMenuOpen ? "translate-x-0 pt-7 text-white" : " translate-x-[100vw] text-[#5B5B5B]"
      } fixed inset-0 h-screen bg-opacity-90 transition-transform duration-700 z-[998] lg:static lg:transform-none lg:flex lg:bg-transparent lg:text-[#5B5B5B] paragraph`}
      
    >
      <NavigationMenuList
        className="menubar flex flex-col h-full  items-start gap-8 p-8 pt-16 lg:flex-row lg:items-center  lg:justify-between lg:p-0 lg:bg-transparent text-white lg:text-black"
      >
        {loggedin ? (
          <>
            <NavigationMenuItem className="menu_item" onClick={() => setActiveItem(1)}>
              <Link to={"/home"}>Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="menu_item" onClick={() => setActiveItem(2)}>
              <Link to={"/challenge"}>Challenge</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="menu_item" onClick={() => setActiveItem(3)}>
              <Link to={"/community"}>Community</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="menu_item" onClick={() => setActiveItem(4)}>
              <Link to={"/articles"}>Articles</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="menu_item lg:hidden" onClick={() => setActiveItem(5)}>
              <Link to={"/about"}>About Us</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="menu_item lg:hidden" onClick={() => setActiveItem(6)}>
              <Link to={"/contact"}>Help and Support</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="menu_item lg:hidden" onClick={() => setActiveItem(7)}>
              <Link to={"/terms_conditions"}>Terms & Conditions</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="menu_item lg:hidden" onClick={() => setActiveItem(8)}>
              <Link to={"/logout"}>
                <Icon name="logout" size={16} />
              </Link>
            </NavigationMenuItem>
          </>
        ) : (
          <>
            <NavigationMenuItem className="menu_item" onClick={() => setActiveItem(1)}>
              <a href={"/landing_page#features"}>Features</a>
            </NavigationMenuItem>
            <NavigationMenuItem className="menu_item" onClick={() => setActiveItem(2)}>
              <a href={"/landing_page#about"}>About</a>
            </NavigationMenuItem>
            <NavigationMenuItem className="menu_item" onClick={() => setActiveItem(3)}>
              <a href={"/landing_page#contact"}>Contact</a>
            </NavigationMenuItem>
            <NavigationMenuItem className="menu_item" onClick={() => setActiveItem(3)}>
              <a href={"/login"}>Login</a>
            </NavigationMenuItem>
            <Link to={"/login"} className="lg:hidden">
              <Button text={"Login"} type={"cta_outline"} />
            </Link>
            <Link to={"/signup"} className="lg:hidden">
              <Button text={"Join Our Community"} type={"cta_filled"} />
            </Link>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Menubar;

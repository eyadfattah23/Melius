import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../assets/icons/icon";

/**
 * Menubar Component
 * The Menubar component is responsible for rendering a navigation menu that adapts based on the user's logged-in state. The component conditionally displays different menu items depending on whether the user is logged in or not, and it is also responsive to different screen sizes.
 */
function Menubar({ loggedin }) {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <ul className={`menubar flex-col lg:flex lg:flex-row absolute right-0 top-16 w-56 bg-white text-black rounded-lg  lg:bg-transparent lg:w-auto lg:space-x-0 flex lg:static`}>
      {loggedin ? (
        <>
          <li className={`menu_item ${window.location.pathname === "/home" ? "active_item" : ""}`} onClick={() => setActiveItem(1)}>
            <Link to={'/home'}>Home</Link>
          </li>
          <li className={`menu_item ${window.location.pathname === "/challenge" ? "active_item" : ""}`} onClick={() => setActiveItem(2)}>
            <Link to={'/challenge'}>Challenge</Link>
          </li>
          <li className={`menu_item ${window.location.pathname === "/community" ? "active_item" : ""}`} onClick={() => setActiveItem(3)}>
            <Link to={'/community'}>Community</Link>
          </li>
          <li className={`menu_item ${window.location.pathname === "/articles" ? "active_item" : ""}`} onClick={() => setActiveItem(4)}>
            <Link to={'/articles'}>Articles</Link>
          </li>
       
          <li className={`menu_item  lg:hidden ${activeItem === 6 ? "active_item" : ""}`} onClick={() => setActiveItem(6)}>
            <Link to={"/about"}>
            About us
            </Link>
          </li>
          <li className={`menu_item  lg:hidden ${activeItem === 6 ? "active_item" : ""}`} onClick={() => setActiveItem(6)}>
            <Link to={"/contact"}>
            Help and Support
            </Link>
          </li>
          <li className={`menu_item  lg:hidden ${activeItem === 6 ? "active_item" : ""}`} onClick={() => setActiveItem(6)}>
            <Link to={"/terms_conditions"}>
            Terms & Conditions
            </Link>
          </li>
          <li className={`menu_item  lg:hidden ${activeItem === 6 ? "active_item" : ""}`} onClick={() => setActiveItem(6)}>
            <Link to={"/terms_conditions"}>
            <Icon name="logout" size={16} />
            </Link>
          </li>
          
        </>
      ) : (
        <>
          <li className={`menu_item ${1 === activeItem ? "active_item" : ""}`} onClick={() => setActiveItem(1)}>
            <a href={'/landing_page#features'}>Features</a>
          </li>
          <li className={`menu_item ${2 === activeItem ? "active_item" : ""}`} onClick={() => setActiveItem(2)}>
            <a href={'/landing_page#about'}>About</a>
          </li>
          <li className={`menu_item ${3 === activeItem ? "active_item" : ""}`} onClick={() => setActiveItem(3)}>
            <a href={'/landing_page#contact'}>Contact</a>
          </li>
        </>
      )}
    </ul>
  );
}

export default Menubar;

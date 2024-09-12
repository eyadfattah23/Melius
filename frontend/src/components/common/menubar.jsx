import { useState } from "react"
import { Link } from "react-router-dom"

function Menubar({ loggedin }) {
  const [activeItem, setActiveItem] = useState(1);
console.log(window.location.pathname)
  if (loggedin) {
    return (
      <ul className="menubar">
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
      </ul>
    );
  } else {
    return (
      <ul className="menubar">
        <li className={`menu_item ${1 === activeItem ? "active_item" : ""}`} onClick={() => setActiveItem(1)}>
          <a href={'/landing_page#features'}>Features</a>
        </li>
        <li className={`menu_item ${2 === activeItem ? "active_item" : ""}`} onClick={() => setActiveItem(2)}>
          <a href={'/landing_page#about'}>About</a>
        </li>
        <li className={`menu_item ${3 === activeItem ? "active_item" : ""}`} onClick={() => setActiveItem(3)}>
          <a href={'/landing_page#contact'}>Contact</a>
        </li>
      </ul>
    );
  }
}

export default Menubar;

import { Link } from "react-router-dom"

function Menubar({loggedin}) {
  if (loggedin){
    return (
      
      <ul className="menubar">
        <li className="menu_item"><Link to={'/home'}>Home</Link></li>
        <li className="menu_item"><Link to={'/challenge'}>Challenge</Link></li>
        <li className="menu_item"><Link to={'/community'}>Community</Link></li>
        <li className="menu_item"><Link to={'/articles'}>Articles</Link></li>
      </ul>
    )
  }
  else{
    return <ul className="menubar">
    <li className="menu_item"><a href={'/landing_page#features'}>Features</a></li>
    <li className="menu_item"><a href={'/landing_page#about'}>About</a></li>
    <li className="menu_item"><a href={'/landing_page#contact'}>Contact</a></li>
    </ul>
  }
  }
export default Menubar
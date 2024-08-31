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
    <li className="menu_item"><Link to={'/landing_page#features'}>Features</Link></li>
    <li className="menu_item"><Link to={'/landing_page#about'}>About</Link></li>
    <li className="menu_item"><Link to={'/landing_page#testimonials'}>Testimonials</Link></li>
    <li className="menu_item"><Link to={'/landing_page#team'}>Team</Link></li>
    <li className="menu_item"><Link to={'/landing_page#contact'}>Contact</Link></li>
    </ul>
  }
  }
export default Menubar
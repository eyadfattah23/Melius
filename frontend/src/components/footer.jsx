import { Link } from "react-router-dom"
import Icon from "../assets/icons/icon"
import Logo from "../assets/logo"
import "../assets/styles/footer.css"
function Footer() {
  
    return (
      <footer className="footer">
      <div className="footer_content">
        <div className="logo_socials">
          <Logo/>
          <div className="socials">
            <div>
              <Icon name={"linkedin"} color={"grey"} size={20}/>
            </div>
            <div>
            <Icon name={"facebook"} color={"grey"} size={20}/>
            </div>
            <div>
            <Icon name={"twitter"} color={"grey"} size={20}/>
            </div>
          </div>
        </div>
        <div className="links">
          <h3>
            Quick Links
          </h3>
          <div className="content">
            <p>Tests</p>
            <p>Programs</p>
          </div>
        </div>
        <div className="links">
          <h3>
            Resources
          </h3>
          <div className="content">
           <Link to={"/contact"}>
           <p>Help and Support</p>
           </Link>
           <Link to={"/about"}>
           <p>About us</p>
           </Link>
            <Link to={"/terms_conditions"}>
            <p>Privacy & conditions</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        <Icon name={"copyright"} color={"white"} size={24}/> 
        <p>2024 Melius. All rights reserved</p>       
      </div>
      </footer>
    )
  }
export default Footer
import Button from "../common/button"
import { Link } from "react-router-dom"
import HeroImage from "./hero_image"
import "../../assets/styles/landing_page/header.css"
function Header(){
 return <section>
  <div className="grid max-w-screen-xl px-16 py-8 mx-auto gap-16 lg:py-4 lg:grid-cols-12 landing_header items-center">
      <div className="place-self-center lg:col-span-7 landing_header_content paragraph flex flex-col py-0 lg:gap-12 gap-4 items-center lg:items-start ">
      <h1 className="lg:text-left text-center">Melius: Your Way to Freedom</h1>
      <p className="lg:text-left text-center">Join thousands on the path to recovery. Melius is here to help you overcome porn addiction, providing support, education, and a community that understands</p>
          <Link to="/signup" style={{width: "fit-content"}}>
        <Button text="Start Your Journey" type="cta_hero" />
   </Link>
      </div>
      <HeroImage/>             
  </div>
<div className="landing_header_background">
<div className="ellipse-top-right">
</div>
<div className="ellipse-bottom-left">
</div>
<div>
</div>
</div>
 </section>
}
export default Header
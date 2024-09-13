import Button from "../common/button"
import HeroImg from "../../assets/images/landing_hero.png"
import { Link } from "react-router-dom"
function Header(){
    return <section className="full_screen_section landing_header flex flex-col lg:flex-row lg:justify-center lg:items-center gap-16  px-16 ">
    <div className="left flex flex-col justify-center lg:justify-start lg:items-start lg:gap-16 lg:w-1/2">
      <div className="content flex flex-col gap-4 lg:gap-4">
        <h1>Melius: Your Way to Freedom</h1>
        <p>Join thousands on the path to recovery. Melius is here to help you overcome porn addiction, providing support, education, and a community that understands</p>
      </div>
      <Link to="/signup">
        <Button text="Start Your Journey" type="cta_filled" />
      </Link>
    </div>
    <div className="right lg:w-1/2 flex justify-end">
      <img src={HeroImg} alt="" className="w-full h-auto" />
    </div>
  </section>  
}
export default Header
import Button from "../common/button"
import HeroImg from "../../assets/images/landing_hero.png"
import { Link } from "react-router-dom"
function Header(){
    return <section className="full_screen_section landing_header">
        <div className="left">
            <div className="content">
                <h1>Melius: Your Way to Freedom</h1>
                <p>Join thousands on the path to recovery. Melius is here to help you overcome porn addiction, providing support, education, and a community that understands                </p>
            </div>
            <Link to={"/signup"}>
            <Button text={"Start Your Journey"} type={"cta_filled"}/>
            </Link>
        </div>
       <div className="right">
       <img src={HeroImg} alt="" />
       </div>
    </section>
}
export default Header
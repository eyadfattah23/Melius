import "../../assets/styles/hero_image.css"
import HeroDots from "../../assets/icons/hero_dots"
export default function HeroImage() {
  return <div className="hidden lg:mt-0 lg:col-span-5 lg:flex landing_header_image">
  <div className="dots_top-left">
  <HeroDots/>
  </div>
  
  <div >
    <div className="img"></div>
  </div>
  <div className="dots_bottom-right">
  <HeroDots/>
  </div>
</div>   
}

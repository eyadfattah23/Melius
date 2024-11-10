import { Link } from "react-router-dom"
import Icon from "../assets/icons/icon"
import Logo from "./common/logo"
import "../assets/styles/footer.css"
import Field from "./common/field"
import Button from "./common/button"
function Footer() {
  
    return (
      <footer className="footer flex py-12 lg:px-20 px-6 justify-center flex-col gap-8  items-start">
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8  justify-between w-full">       
        <div className="links flex  lg:gap-32 justify-around lg:justify-start gap-8  ">
          <div className="flex flex-col gap-3 items-start">
          <h4 className="text-black">
            Quick Links
          </h4>
            <Link>
            <p className="text-black paragraph opacity-75">Tests</p>
            </Link>
            <Link>
            <p className="text-black paragraph opacity-75">Programs</p>
            </Link>
          </div>
          <div className="flex flex-col gap-3 items-start">
          <h4 className="text-black">
          Information
          </h4>
            <Link>
            <p className="text-black paragraph opacity-75">Help and Support</p>
            </Link>
            <Link>
            <p className="text-black paragraph opacity-75">About Us</p>
            </Link>
            <Link>
            <p className="text-black paragraph opacity-75">Privacy & Conditionas</p>
            </Link>
          </div>  
        </div>
        <div className="flex flex-col gap-4">
        <h4 className="text-black">Contact Us</h4>
        <p className="paragraph text-gray-500">Have questions or need support? We're here to help.</p>
        <div className="form flex flex-col gap-2">
                                <div className="field h-[32px] px-3 rounded-[10px] bg-white border border-[#CBD5E1]">
                                    <Field
                                        placeholder="Email"
                                        type="email"
                                    />
                            </div>   
                                <div className="field px-3 rounded-[10px] bg-white border border-[#CBD5E1] h-[98px] ">
                                    <Field
                                        placeholder=""
                                        type="text"
                                        required
                                    />
                               
                            </div>
                            <div className="contact_submit  flex justify-end">
                            <Button text={"submit"} type={"secondary_filled"}/>
                            </div>
                        </div>
       
        </div>
      </div>
      <div className="copyright flex py-4 justify-between items-center w-full border-t border-black">
          <Logo/>
          <div className=" items-center gap-2 hidden lg:flex">
          <Icon name={"copyright"} color={"black"} size={24}/> 
          <p className="paragraph text-black font-semibold">2024 Melius. All rights reserved</p>   
          </div>
          <div className="socials flex items-center gap-4">
            <div>
              <Icon name={"linkedin"} color={"black"} size={16}/>
            </div>
            <div>
            <Icon name={"facebook"} color={"black"} size={16}/>
            </div>
            <div>
            <Icon name={"twitter"} color={"black"} size={16}/>
            </div>
          </div>
        
            
      </div>
      <div className=" items-center justify-center mt-[-42px] w-full gap-2 lg:hidden flex">
          <Icon name={"copyright"} color={"black"} size={24}/> 
          <p className="paragraph text-black font-semibold">2024 Melius. All rights reserved</p>   
        </div>  
      </footer>
    )
  }
export default Footer
import "../../assets/styles/landing_page/cta.css"
import Button from "../common/button"
export default function CTA() {
    return <section className="landing_cta py-20 lg:px-16 px-6 my-16">
        <div className="flex lg:flex-row flex-col lg:py-16 lg:px-24 justify-between gap-8 items-center lg:rounded-[100px] lg:bg-white bg-opacity-80">
            <header className="flex  flex-col justify-center lg:items-start gap-4">
                <h1 className="lg:text-start text-center">Find the Light Within</h1>
                <p className="paragraph lg:text-start text-center">Take the first step toward breaking free from addiction. At Melius, we'll help you navigate the darkness and guide you toward a brighter future.                </p>
            </header>
   
         
         <Button text={"Get Started"} type={" py-6 bg-[#FFAC54]  text-[#E8EEFE] min-w-[200px]"}/>
        </div>
    </section>
}
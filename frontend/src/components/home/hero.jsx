import { FourSquare } from "react-loading-indicators"
import Button from "../common/button"
import Star from "../../assets/icons/star"
import HomeHero from "../../assets/images/home_hero.png"
import "../../assets/styles/home/hero.css"
import Counter2 from "../common/counter2"
import { Progress } from "../shadcn/ui/progress"
import { useEffect, useState } from "react"
import Badge from "../../assets/icons/badge"
import RelapsingCheck from "../common/relapsing_check"
export default function Hero({isUserLoading, elapsedDays, handleJoinChallenge, user_id, token}) {
  const [progress, setProgress] = useState(13)
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
    {/* If user data is being fetched, display FourSquare spinner */}
    if (isUserLoading) return <section className="full_screen_section px-16 py-8" id="hero">
        <FourSquare color="#040093" size="medium" text="Loading..." textColor="#000" />
      </section>
    else return (
      <section className={`home_hero  items-center  ${elapsedDays >= 0 ? "justify-center": "h-screen"} flex  lg:px-16 px-6 py-8`} id="hero">
        
        {elapsedDays >= 0 ? (
          <div className="flex flex-col justify-center items-center gap-8 lg:w-[75vw] px-6 lg:px-16 py-16 mt-20  ">
           <div className="flex justify-between lg:flex-row flex-col-reverse gap-16  w-full items-center  ">
          <header className="flex flex-col items-start gap-8">
            <h1 className="text-black">11 <span className="paragraph_large">Days left to achieve your trophy</span></h1>
            <Progress value={progress} className="lg:w-[385px]"/>
            {/* <Counter2
              achieved_days={elapsedDays}
              unit={elapsedDays > 1 ? "Days" : "Day"}
            />
            <h4>of your journey to freedom</h4> */}
           
          </header>
            <Badge level={"1"} enabled={false} className={"w-[210px]"} />
           </div>
            <RelapsingCheck user_id={user_id} token={token}/>
          

           <div>

           </div>
          </div>
        ) : (
          <>
          <div className="flex flex-col  lg:items-start items-center  gap-8 mt-20 ">
           <header className="flex flex-col lg:items-start items-center gap-4">
            <div className="flex justify-center   relative">
                <h1 className="text-center lg:text-left text-[#092466]">Join Our Challenge</h1>
                <span className="absolute lg:-right-12  -right-6 lg:-top-6 -top-10"><Star/></span>
            </div>
           
            <p className="paragraph_large text-center lg:text-left">
              Join our challenge today and start your journey towards a better
              you!
            </p>
            </header>
            <div>
              <Button
                text={"Get Started"}
                type={"cta_home"}
                onClick={handleJoinChallenge}
              />
            </div>
          </div>
          <img src={HomeHero} className="h-auto w-[60vw] absolute right-0 lg:block hidden bottom-0"/>
          </>
        )}
      </section>
    )}

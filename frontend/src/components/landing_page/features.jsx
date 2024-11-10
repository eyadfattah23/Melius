import Icon from "../../assets/icons/icon"
import Feature from "./feature"
import "../../assets/styles/landing_page/features.css"
import FeatureIcon1 from "../../assets/icons/feature_icon1.png"
import FeatureIcon2 from "../../assets/icons/feature_icon2.png"
import FeatureIcon3 from "../../assets/icons/feature_icon3.png"
import Tracking1 from "../../assets/images/features/tracking1.png"
import Tracking2 from "../../assets/images/features/tracking2.png"
import Community1 from "../../assets/images/features/community2.png"
import Community2 from "../../assets/images/features/community1.png"
import Articles1 from "../../assets/images/features/articles.png"
function Features() {
    return <section className="landing_features flex flex-col  items-center justify-center lg:py-32 py-16 gap-16" id="features">
        <header className="flex flex-col items-center gap-4 lg:w-[50vw] px-4">
        <h1 className="text-center">Explore Our Features</h1>
        <p className="paragraph text-center">Discover the tools to transform your journey—your next step starts here!</p>
        </header>
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center w-full  lg:px-20 px-6 gap-8">
          
            
<div className="flex justify-center">
    <Feature
            icon = {FeatureIcon1}
                title={"Progress Tracker"}
                description={
                    "Track your no-porn days with our personalized timer. As you progress, earn badges that celebrate your milestones and encourage you to keep going."
                }
                image1={Tracking1}
            /></div>
<div className="flex justify-center"><Feature
            icon={FeatureIcon2}
                image1={Community1}
                title={"Community"} 
               
                description={"Connect with others who are going through similar experiences. Share your progress, read others’ stories, and find support through the Melius community."} /></div>
<div className="flex justify-center"> <Feature  
            icon={FeatureIcon3}
             image1={Articles1}
            title={"Educational Content"} description={"Access expert content that explore porn addiction from different perspectives—mental health, religion, relationships, and personal growth."} /></div>
        </div>
    </section>
}
export default Features
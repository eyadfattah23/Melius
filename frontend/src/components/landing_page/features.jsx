import Icon from "../../assets/icons/icon"
import Feature from "./feature"
import Tracking1 from "../../assets/images/features/tracking1.png"
import Tracking2 from "../../assets/images/features/tracking2.png"
import Community1 from "../../assets/images/features/community2.png"
import Community2 from "../../assets/images/features/community1.png"
import Articles1 from "../../assets/images/features/articles.png"
import Articles2 from "../../assets/images/features/articles2.png"
function Features() {
    return <section className="landing_features flex flex-col  items-center justify-center px-16 gap-8" id="features">
        <h1>Explore Our Features</h1>
        <div className="lg:px-16 gap-16 flex flex-col items-center features_list">
            <Feature
                title={"Progress Tracker"}
                description={
                    "Track your no-porn days with our personalized timer. As you progress, earn badges that celebrate your milestones and encourage you to keep going."
                }
                image1={Tracking1}
                image2 = {Tracking2}
            />
            <Feature
                image1={Community1}
                image2 = {Community2}
                title={"Community"} 
                reverse
                description={"Connect with others who are going through similar experiences. Share your progress, read others’ stories, and find support through the Melius community."} />
            <Feature  
             image1={Articles1}
             image2 = {Articles2}
            title={"Educational Content"} description={"Access expert content that explore porn addiction from different perspectives—mental health, religion, relationships, and personal growth."} />

        </div>
    </section>
}
export default Features
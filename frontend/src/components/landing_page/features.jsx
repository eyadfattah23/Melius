import Icon from "../../assets/icons/icon"
import Feature from "./feature"

function Features(){
    return <section className="full_screen_section landing_features" id="features">
        <h1>Explore Our Features</h1>
        <div className="features_list">
            <Feature icon={<Icon name={"calendar_todo"} size={24} color={"icon_secondary"}/>} title={"Progress Tracker"} description={"Track your no-porn days with our personalized timer. As you progress, earn badges that celebrate your milestones and encourage you to keep going."}/>
            <Feature icon={<Icon name={"group_users"} size={24} color={"icon_secondary"}/>} title={"Community"} description={"Connect with others who are going through similar experiences. Share your progress, read others’ stories, and find support through the Melius community."}/>
            <Feature icon={<Icon name={"book_open"} size={24} color={"icon_secondary"}/>} title={"Educational Content"} description={"Access expert content that explore porn addiction from different perspectives—mental health, religion, relationships, and personal growth."}/>
        </div>
    </section>
}
export default Features
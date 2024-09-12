import Icon from "../../assets/icons/icon"

function AboutMember({name, role, about, linkedin, gmail, github, picture, reverse}){
    return <div className="team_member" style={reverse && {flexDirection: "row-reverse"}}>
<div className="member_card" style={{ backgroundImage: `url(${picture})` }}>
<div className="information">
               <p className="name"> {name}</p>
               <p className="role"> {role}</p>
            </div>
        </div>
        <div className="description">
            <p>{about}</p>
            <div className="social_media">
               <p>Follow me for more updates</p>
               <div className="social_links">
               <a href={github} target="_blank" rel="noopener noreferrer">
      <Icon name={"github"} size={24} color={"icon_secondary"}/>
    </a>
    <a  href={gmail} target="_blank" rel="noopener noreferrer">
    <Icon name={"email"} size={24} color={"icon_secondary"}/>
    </a>
    <a href={linkedin} target="_blank" rel="noopener noreferrer">
    <Icon name={"linkedin"} size={24} color={"icon_secondary"}/>
    </a>
               </div>
            </div>
        </div>

    </div>
}
export default AboutMember
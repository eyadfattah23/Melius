import BadgeFrame from "../assets/icons/badge_frame"
import userImage from "../assets/images/user.png"
import "../assets/styles/avatar.css"
function Avatar ({level}){
    return <>
   {
      <div className="avatar_main">
        <img src={userImage} alt="" />
        <div className="avatar_badge">
        <BadgeFrame level={level}/>
        </div>
     </div>
   }
   
    </>
}
export default Avatar
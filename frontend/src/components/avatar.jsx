import BadgeFrame from "../assets/icons/badge_frame"
import userImage from "../assets/images/user.png"
import "../assets/styles/avatar.css"
function Avatar ({level}){
    return <>
   {
     <div className="avatar_main">
     <img src={userImage} alt="User Avatar" className="avatar_image"/>
     <div className={Number(level) < 3 ? "avatar_badge": Number(level) ===3 ? "avatar_advanced": "avatar_more_advanced"}>
       <BadgeFrame level={level}/>
     </div>
   </div>
   }
   
    </>
}
export default Avatar
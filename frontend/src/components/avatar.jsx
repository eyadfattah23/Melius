import Badge from "../assets/icons/badge"
import userImage from "../assets/images/user.png"
import "../assets/styles/avatar.css"
function Avatar (){
    return <>
   {
      <div className="avatar_main">
        <img src={userImage} alt="" />
        <div className="avatar_badge">
        <Badge level={"3"}/>
        </div>
     </div>
   }
   
    </>
}
export default Avatar
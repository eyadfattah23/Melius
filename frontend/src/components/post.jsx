import Icon from "../assets/icons/icon"
import Avatar from "./avatar"

function Post(){
    return <div className="post_main">
        <div className="header">
            <div className="profile">
                <div className="avatar">
                <Avatar level={"2"}/> 
                </div>
                <div className="username">
                    <p className="name">username</p>
                    <p className="post_time">1 min</p>
                </div>
                
            </div>
            <Icon name={"flag"} size={24} color={"grey"}/>
        </div>
        <div className="content">
            <p className="title">Post Title</p>
            <p className="description">post text #awesome #emoticons</p>
        </div>
        <div className="statistics">
            <div className="stat">
                <p> 26k likes</p>
            </div>
            <div className="stat">
            <p> 2k comments</p>
            </div>
            <div className="stat">
                <p>2 shares</p>
            </div>
        </div>
        <div className="footer">
          <div className="sec">
            <Icon name={"hand_heart"} size={20} color={"grey"}/>
            <p>Like</p>
          </div>
          <div className="sec">
            <Icon name={"chat"} size={20} color={"grey"}/>
            <p>Comment</p>
          </div>
          <div className="sec">
          <Icon name={"share"} size={20} color={"grey"}/>
          <p>Share</p>
          </div>
        </div>
    </div>
}
export default Post
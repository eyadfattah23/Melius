import formatDate from "../../functions/format_date"
import Icon from "../../assets/icons/icon"
import Avatar from "../avatar"
import { useState } from "react"
import countLevel from "../../functions/count_level"
import fetchComments from "../../functions/fetch_comments"
import Comments from "./comments"
import likeOrUnlike from "../../functions/like_or_unlike"
import PostOptions from "./post_options"
import "../../assets/styles/common/post.css"
import { useNavigate } from "react-router-dom"
import handleLogout from "../../functions/loggout"
/**
 * Post Component
 * 
 * This component represents a single post in a social feed or user interface. 
 * It displays the post's title, content, like count, and comments, and includes options to interact with the post.
 */
function Post({title, text,likes_count, created_at, post_id, comments_count, isLiked, activeTabName, postUsername, userMaxTime}){
    const navigate = useNavigate()
    const user_id = JSON.parse(localStorage.getItem("user_id"))
    const token = JSON.parse(localStorage.getItem("token"));
    
    // Check for valid token and user ID, otherwise logout
    if (!user_id || !token){
        handleLogout(navigate)
    }

    // State variables for post interactions
    const [comments, setComments] = useState([])
    const [liked, setLiked] = useState(isLiked)
    const [loading, setLoading] = useState(false)
    const [commentField, setCommentField] = useState(false)
    const [comment, setComment] = useState("")
    const [likesCount, setLikesCount] = useState(likes_count)
    const [commentsCount, setCommentsCount] = useState(comments_count)
  
    return <>
    <div className="post_main">
        <div className="header">
            <div className="profile">
                <div className="avatar">
                <Avatar level={`${countLevel(Number(userMaxTime))}`} /> 
                </div>
                <div className="username">
                    <p className="name">{postUsername}</p>
                    <p className="post_time">{formatDate(created_at)}</p>
                </div>
                
            </div>
           {
            activeTabName != "by_user" &&  <Icon name={"flag"} size={24} color={"grey"}/>
           }
           {
            activeTabName == "by_user" && <PostOptions post_id={post_id} title = {title} text={text}/>
           }
        </div>
        <div className="content">
            <p className="title">{title}</p>
            <p className="description">{text}</p>
        </div>
        <div className="statistics">
            <div className="stat">
                <p> {likesCount} likes</p>
            </div>
            <div className="stat" onClick={()=> fetchComments(setCommentField,"posts", post_id, setComments, setLoading, navigate)}>
            <p> {commentsCount} comments</p>
            </div>
        </div>
        <div className="footer">
          <div className="sec" onClick={()=> likeOrUnlike(setLoading, setLiked, liked, "posts", post_id, user_id, setLikesCount, likesCount, navigate)}>
            <Icon name={"hand_heart"} size={20} color={!liked? "grey": "red"}/>
            <p className={liked ? "isLiked": ""}>Like</p>
          </div>
          <div className="sec" onClick={()=> setCommentField(true)}>
            <Icon name={"chat"} size={20} color={"grey"}/>
            <p>Comment</p>
          </div>
          <div className="sec">
          <Icon name={"share"} size={20} color={"grey"}/>
          <p>Share</p>
          </div>
        </div>
        {
        (comments && comments.length > 0 || commentField) && <Comments 
        comment={comment} 
        setComment={setComment} 
        setCommentField={setCommentField} 
        contentType={"posts"} 
        content_id={post_id} 
        setComments={setComments} 
        setLoading={setLoading} 
        user_id={user_id} 
        comments={comments}
        userMaxTime = {userMaxTime}
        commentsCount = {commentsCount}
        setCommentsCount = {setCommentsCount}
    />
        }
        </div>
        
    </>
}
export default Post
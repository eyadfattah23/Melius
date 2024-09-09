import formatDate from "../functions/format_date"
import Icon from "../assets/icons/icon"
import Avatar from "./avatar"
import axios from "axios"
import { useState, useEffect } from "react"
import Field from "./field"
import writeComment from "../functions/write_comment"
import fetchComments from "../functions/fetch_comments"
import CommentField from "./comment_field"
import Comments from "./comments"
import likeOrUnlike from "../functions/like_or_unlike"
import PostOptions from "./post_options"
function Post({title, text, key, created_at, post_id, comments_count, likes_count, isLiked, activeTabName, postUser}){
    const user_id = JSON.parse(localStorage.getItem("user_id"))
    const [comments, setComments] = useState([])
    const [liked, setLiked] = useState(isLiked)
    const [loading, setLoading] = useState(false)
    const [commentField, setCommentField] = useState(false)
    const [comment, setComment] = useState("")
    const [postUsername, setPostUsername] = useState("")
    useEffect(() => {
        const fetchPostUser = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5050/api/v1/users/${postUser}`, {
                  });
                  setPostUsername(response.data.username)
               
            } catch (error) {
                console.error(error);
            } finally {
                
            }
        };
        fetchPostUser()
    }, []);
 
  
    return <>
    <div className="post_main" key={key}>
        <div className="header">
            <div className="profile">
                <div className="avatar">
                <Avatar level={"2"}/> 
                </div>
                <div className="username">
                    <p className="name">{postUsername}</p>
                    <p className="post_time">{formatDate(created_at)}</p>
                </div>
                
            </div>
           {
            activeTabName != "My Posts" &&  <Icon name={"flag"} size={24} color={"grey"}/>
           }
           {
            activeTabName == "My Posts" && <PostOptions post_id={post_id}/>
           }
        </div>
        <div className="content">
            <p className="title">{title}</p>
            <p className="description">{text}</p>
        </div>
        <div className="statistics">
            <div className="stat">
                <p> {likes_count} likes</p>
            </div>
            <div className="stat" onClick={()=> fetchComments(setCommentField,"posts", post_id, setComments, setLoading)}>
            <p> {comments_count} comments</p>
            </div>
        </div>
        <div className="footer">
          <div className="sec" onClick={()=> likeOrUnlike(setLoading, setLiked, liked, "posts", post_id, user_id)}>
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
    />
        }
        </div>
        
    </>
}
export default Post
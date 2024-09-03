import formatDate from "../functions/format_date"
import Icon from "../assets/icons/icon"
import Avatar from "./avatar"
import axios from "axios"
import { useState, useEffect } from "react"
import Field from "./field"
function Post({title, text, key, created_at, post_id, comments_count, likes_count, isLiked}){
    const user_id = JSON.parse(localStorage.getItem("user_id"))
    const [comments, setComments] = useState([])
    const [liked, setLiked] = useState(isLiked)
    const [loading, setLoading] = useState(false)
    const [commentField, setCommentField] = useState(false)
    const [comment, setComment] = useState("")
  const [activeTabName, setActiveTabName] = useState("Most Liked")
  const fetchComments = async () => {
    setCommentField(true)
    try {
        const response = await axios.get(`http://127.0.0.1:5050/api/v1/posts/${post_id}/comments`);
        console.log(response.data);
        setComments(response.data)
        
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
  }
  const likeOrUnlike = async () => {
    setLoading(true);
    setLiked(!liked)
    try {
        const response = await axios.post(`http://127.0.0.1:5050/api/v1/posts/${post_id}/likes`, {
            user_id
        });
        console.log(response);
        
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};
  const writeComment = async () => {
    setLoading(true);
    try {
        const response = await axios.post(`http://127.0.0.1:5050/api/v1/posts/${post_id}/comments`, {
            user_id,
            text: comment
        });
        console.log(response);
        setComment("")
        await fetchComments()
        
        
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};
  
    return <>
    <div className="post_main" key={key}>
        <div className="header">
            <div className="profile">
                <div className="avatar">
                <Avatar level={"2"}/> 
                </div>
                <div className="username">
                    <p className="name">username</p>
                    <p className="post_time">{formatDate(created_at)}</p>
                </div>
                
            </div>
            <Icon name={"flag"} size={24} color={"grey"}/>
        </div>
        <div className="content">
            <p className="title">{title}</p>
            <p className="description">{text}</p>
        </div>
        <div className="statistics">
            <div className="stat">
                <p> {likes_count} likes</p>
            </div>
            <div className="stat" onClick={fetchComments}>
            <p> {comments_count} comments</p>
            </div>
        </div>
        <div className="footer">
          <div className="sec" onClick={likeOrUnlike}>
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
        (comments && comments.length > 0 || commentField) && <div className="post_comments_section">
            <div className="post_comment_field">
               <div className="profile">
               <Avatar/>
               </div>
                <div className="input">
                    <Field
                    placeholder="comment..."
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    />
                    
                    <div className="send_btn" onClick={writeComment}>
                    <Icon name={"send"} size={20} color={"grey"}/>
                    </div>
                </div>
            </div>
            {
                comments && comments.length > 0 && <div className="comments">
                    {
                       comments.map((cmnt) =>
                       {
                        return <div>{cmnt.text}</div>
                       
                       })
                    }
                </div>
            }
            </div>
        }
    </div>
   
    </>
}
export default Post
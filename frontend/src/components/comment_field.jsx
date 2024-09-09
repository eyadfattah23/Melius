import Avatar from "./avatar"
import Field from "./field"
import writeComment from "../functions/write_comment"
import Icon from "../assets/icons/icon"
function CommentField({comment, setComment, setCommentField, contentType, id, setComments, setLoading, user_id}){
    return <div className="post_comment_field">
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
         
         <div className="send_btn" onClick={()=> writeComment(setCommentField, contentType, id, setComments, setLoading, setComment, user_id, comment)}>
         <Icon name={"send"} size={20} color={"grey"}/>
         </div>
     </div>
 </div>
}
export default CommentField
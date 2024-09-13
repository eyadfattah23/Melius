import CommentField from "./comment_field"
import formatDate from "../../functions/format_date"
import Avatar from "../avatar"
function Comments({comment, setComment, setCommentField, contentType, content_id, setComments, setLoading, user_id, comments, setCommentsCount, commentsCount}){
    console.log(comments)
    return <div className="comments_section">
    <CommentField comment={comment} setComment={setComment} setCommentField={setCommentField} contentType={contentType} id={content_id} setComments={setComments} setLoading={setLoading} user_id={user_id} setCommentsCount={setCommentsCount} commentsCount={commentsCount}/>
    {
        comments && comments.length > 0 && <div className="comments">
            {
               comments.map((cmnt) =>
               {
                return <div className="one_comment">
                    <div className="profile">
                
                <Avatar level={"2"}/> 
                
            </div>
            <div className="text">
            <div className="username">
                    <p className="name">{cmnt.username}</p>
                    <p className="post_time">{formatDate(cmnt.created_at)}</p>
                </div>
                    <p>{cmnt.text}</p>
                </div>
            </div>
               
               })
            }
        </div>
    }
    </div>
}
export default Comments
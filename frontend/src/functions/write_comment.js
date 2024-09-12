import fetchComments from "./fetch_comments";
import axios from "axios";
const writeComment = async (setCommentField, contentType, id, setComments, setLoading, setComment, user_id, comment, setCommentsCount, commentsCount) => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("token"))
    try {
        const response = await axios.post(`http://127.0.0.1:5050/api/v1/${contentType}/${id}/comments`, {
            user_id,
            text: comment
        },
    {
        headers: {
            Authorization: `Bearer ${token}`,
          },
    });
        console.log(response);
        setComment("")
        setCommentsCount(Number(commentsCount) + 1)
        await fetchComments(setCommentField,`${contentType}`, id, setComments, setLoading)
        
        
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};
export default writeComment
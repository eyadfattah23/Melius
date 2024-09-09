import fetchComments from "./fetch_comments";
import axios from "axios";
const writeComment = async (setCommentField, contentType, id, setComments, setLoading, setComment, user_id, comment) => {
    setLoading(true);
    try {
        const response = await axios.post(`http://127.0.0.1:5050/api/v1/${contentType}/${id}/comments`, {
            user_id,
            text: comment
        });
        console.log(response);
        setComment("")
        await fetchComments(setCommentField,`${contentType}`, id, setComments, setLoading)
        
        
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};
export default writeComment
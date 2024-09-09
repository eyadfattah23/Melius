import axios from "axios";
const likeOrUnlike = async (setLoading, setLiked, liked, contentType, content_id, user_id) => {
    setLoading(true);
    setLiked(!liked)
    try {
        const response = await axios.post(`http://127.0.0.1:5050/api/v1/${contentType}/${content_id}/likes`, {
            user_id
        });
        console.log(response);
        
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};
export default likeOrUnlike
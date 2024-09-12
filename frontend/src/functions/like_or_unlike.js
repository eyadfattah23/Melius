import axios from "axios";
const likeOrUnlike = async (setLoading, setLiked, liked, contentType, content_id, user_id, setLikesCount, likesCount) => {
    setLoading(true);
    setLiked(!liked)
    const token = JSON.parse(localStorage.getItem("token"))
    try {
        const response = await axios.post(`http://127.0.0.1:5050/api/v1/${contentType}/${content_id}/likes`, {
            user_id
        },
    {
        headers: {
            Authorization: `Bearer ${token}`,
          },
    });
        console.log(response);
        if (liked){
            setLikesCount(Number(likesCount) - 1)
        }
        else{
            setLikesCount(Number(likesCount) + 1)
        }

    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};
export default likeOrUnlike
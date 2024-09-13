import axios from "axios";
import config from "@/config";
const likeOrUnlike = async (
  setLoading,
  setLiked,
  liked,
  contentType,
  content_id,
  user_id,
  setLikesCount,
  likesCount
) => {
  setLoading(true);
  setLiked(!liked);
  const token = JSON.parse(localStorage.getItem("token"));
  try {
    const response = await axios.post(
      config.API_URL + `${contentType}/${content_id}/likes`,
      {
        user_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    if (liked) {
      setLikesCount(Number(likesCount) - 1);
    } else {
      setLikesCount(Number(likesCount) + 1);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export default likeOrUnlike;

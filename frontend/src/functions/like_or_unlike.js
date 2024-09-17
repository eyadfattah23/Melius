import axios from "axios";
import config from "../config";
import handleLogout from "./loggout";
/**
 * likeOrUnlike - Toggles the like status for a content item and updates the like count.
 *
 * This function sends a request to toggle the like status of a specific content item
 * and updates the like count based on whether the user has liked or unliked the item.
 */
const likeOrUnlike = async (
  setLoading,
  setLiked,
  liked,
  contentType,
  content_id,
  user_id,
  setLikesCount,
  likesCount,
  navigate
) => {
  setLoading(true);
  setLiked(!liked);
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token){
    handleLogout(navigate)
  }
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
    if (error.status === 401 || error.status === 422){
      handleLogout(navigate)
    }
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export default likeOrUnlike;

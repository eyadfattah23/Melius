import fetchComments from "./fetch_comments";
import axios from "axios";
import config from "../config";
import handleLogout from "./loggout";
/**
 * writeComment - Submits a new comment and updates the comments section.
 *
 * This function handles the submission of a new comment by sending it to the API, updating the comments count,
 * and fetching the latest comments to refresh the comments section.
 */
const writeComment = async (
  setCommentField,
  contentType,
  id,
  setComments,
  setLoading,
  setComment,
  user_id,
  comment,
  setCommentsCount,
  commentsCount,
  navigate
) => {
  setLoading(true);
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token){
    handleLogout(navigate)
  }
  try {
    const response = await axios.post(
      config.API_URL + `${contentType}/${id}/comments`,
      {
        user_id,
        text: comment,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
   
    console.log(response);
    setComment("");
    setCommentsCount(Number(commentsCount) + 1);
    await fetchComments(
      setCommentField,
      `${contentType}`,
      id,
      setComments,
      setLoading,
      navigate
    );
  } catch (error) {
    console.error(error);
    if (error.status === 401 || error.status === 422){
      handleLogout(navigate)
    }
  } finally {
    setLoading(false);
  }
};
export default writeComment;

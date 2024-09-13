import fetchComments from "./fetch_comments";
import axios from "axios";
import config from "../config";
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
  commentsCount
) => {
  setLoading(true);
  const token = JSON.parse(localStorage.getItem("token"));
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
      setLoading
    );
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export default writeComment;

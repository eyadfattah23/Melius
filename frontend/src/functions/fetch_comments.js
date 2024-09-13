import axios from "axios";
import config from "../config";
const fetchComments = async (
  setCommentField,
  contentType,
  id,
  setComments,
  setLoading
) => {
  const token = JSON.parse(localStorage.getItem("token"));
  try {
    const response = await axios.get(
      config.API_URL + `${contentType}/${id}/comments`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    setComments(response.data);
    setCommentField(true);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export default fetchComments;

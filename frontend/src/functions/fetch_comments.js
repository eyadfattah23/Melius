import axios from "axios";
import config from "../config";
import handleLogout from "./loggout";
/**
 * fetchComments - Function to retrieve comments for a specific content type and ID.
 *
 * This function fetches the comments for a given content type (e.g., post, article) and ID by making a GET
 * request to the API. It uses the stored authentication token and handles authorization errors by logging
 * the user out when necessary.
 */
const fetchComments = async (
  setCommentField,
  contentType,
  id,
  setComments,
  setLoading,
  navigate
) => {
  const token = JSON.parse(localStorage.getItem("token"));
  
  // If no token is found, log the user out
  if (!token)
  {
    handleLogout(navigate)
  }
  try {
    // API request to fetch comments for the given content type and ID
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
    if (error.status === 401 || error.status === 422){
      handleLogout(navigate)
    }
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export default fetchComments;

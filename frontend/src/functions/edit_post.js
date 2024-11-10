import handleLogout from "./loggout";
import config from "../config";
import axios from "axios";

/**
 * Edit an existing post.
 * 
 * This function handles editing a post by sending a PUT request to the server. It validates the input,
 * manages loading and error states, and handles user logout in case of authorization errors.
 */
const editPost = async (event, post_id, token, setLoading, setErrorTitle, setErrorText, postTitle, postText, navigate) => {
    event.preventDefault();
    setLoading(true);
    setErrorTitle("");
    setErrorText("");

    let hasError = false;
    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.put(
        config.API_URL + "posts/" + post_id,
        {
          title: postTitle,
          text: postText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      window.location.reload();
    } catch (error) {
        if (error.status === 401 || error.status === 422){
            handleLogout(navigate)
        }
      console.error(error);
      setErrorText(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
export default editPost
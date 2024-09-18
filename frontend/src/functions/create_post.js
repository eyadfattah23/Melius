import handleLogout from "./loggout";
import axios from "axios";
import config from "../config";
/**
 * createPost - Handles the creation of a new post by making an API request.
 *
 */
const createPost = async (event, user_id, token, setLoading, setErrorTitle, setErrorText,title, text, navigate) => {
    event.preventDefault();
    setLoading(true);
    setErrorTitle("");
    setErrorText("");

    let hasError = false;
    if (!title) {
      setErrorTitle("Please fill the title field");
      hasError = true;
    }
    if (!text) {
      setErrorText("Please fill the content field");
      hasError = true;
    }
    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        config.API_URL + "posts",
        {
          user_id,
          title,
          text,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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

export default createPost
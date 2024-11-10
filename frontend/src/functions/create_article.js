import handleLogout from "./loggout";
import axios from "axios";
import config from "../config";
/**
 * Creates a new article by sending a POST request to the API.
 */
const createArticle = async (event, token, setLoading, setErrorTitle, setErrorText, title, content, author, img, navigate) => {
    event.preventDefault();
    setLoading(true);
    setErrorTitle("");
    setErrorText("");

    let hasError = false;
    if (!title) {
      setErrorTitle("Please fill the title field");
      hasError = true;
    }
    if (!content) {
      setErrorText("Please fill the content field");
      hasError = true;
    }
    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        config.API_URL + "articles",
        {
          title,
          content,
          author,
          img
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
export default createArticle
import handleLogout from "./loggout";
import axios from "axios";
import config from "../config";
/**
 * editArticle - A function that handles the update of an article by sending a PUT request to the API.
 *
 * This function validates the input data (article title and content), and if valid, submits the update request to the backend API.
 * It uses Axios to send the HTTP request and handles any potential errors, such as missing authorization or server errors.
 */
const editArticle = async (event, articleId, token, setLoading, setErrorTitle, setErrorContent, setErrorImage, articleTitle, articleContent, articleImage, navigate) => {
    event.preventDefault();
    setLoading(true);
    setErrorTitle("");
    setErrorContent("");
    setErrorImage("");

    let hasError = false;
    if (articleTitle.trim() === "") {
      setErrorTitle("Title is required.");
      hasError = true;
    }
    if (articleContent.trim() === "") {
      setErrorContent("Content is required.");
      hasError = true;
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.put(
        config.API_URL + "articles/" + articleId,
        {
          title: articleTitle,
          content: articleContent,
          img: articleImage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Article updated successfully:", response);
      window.location.reload(); 
    } catch (error) {
        if (error.status === 401 || error.status === 422){
            handleLogout(navigate)
        }
      console.error("Error updating article:", error);
      setErrorContent(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
export default editArticle
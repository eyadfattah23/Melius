import handleLogout from "./loggout";
import axios from "axios";
import config from "../config";
/**
 * Deletes an article by sending a DELETE request to the API.
 */
const deleteArticle = async (article_id, token, setLoading, navigate) => {
    try {
      const response = await axios.delete(config.API_URL + `articles/${article_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/articles")
    } catch (error) {
    if (error.status === 401 || error.status === 422){
        handleLogout(navigate)
    }
      console.error(error);
    } finally {
      // setLoading(false);
    }
  };
export default deleteArticle
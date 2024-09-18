import handleLogout from "./loggout";
import axios from "axios";
import config from "../config";
/**
 * Fetches the details of an article from the server and updates the component state with the fetched data.
 * Handles authentication errors and logs out the user if necessary.
 */
const fetchArticle = async (article_id, token, setLoading, setArticle, setLikesCount, likes, setCommentsCount, navigate) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${config.API_URL}articles/${article_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setArticle(response.data);
      setLikesCount(likes);
      setCommentsCount(response.data.comments_count);
    } catch (error) {
        if (error.status === 401 || error.status === 422){
            handleLogout(navigate)
        }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
export default fetchArticle
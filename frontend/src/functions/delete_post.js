import handleLogout from "./loggout";
import axios from "axios";
import config from "../config";
/**
 * Deletes a post by its ID.
 */
const deletePost = async (post_id, token, setLoading, navigate) => {
    try {
      const response = await axios.delete(config.API_URL + `posts/${post_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
    } catch (error) {
        if (error.status === 401 || error.status === 422){
            handleLogout(navigate)
        }
      console.error(error);
    } finally {
      // setLoading(false);
    }
  };
export default deletePost
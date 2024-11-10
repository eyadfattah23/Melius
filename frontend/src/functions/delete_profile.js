import handleLogout from "./loggout";
import axios from "axios";
import config from "../config";
/**
 * deleteProfile - Deletes a user profile from the system and handles session cleanup.
 * 
 * This function sends an HTTP DELETE request to remove the user profile from the server.
 * It also handles the removal of user data from local storage and redirects to the signup page 
 * after a successful deletion.
 */
const deleteProfile = async (user_id, token, setLoading, navigate) => {
    try {
      const response = await axios.delete(config.API_URL + `users/` + user_id , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("user_id");
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin")
      localStorage.removeItem("level")
      navigate("/signup");
    } catch (error) {
    if (error.status === 401 || error.status === 422)
    {
        handleLogout(navigate)
    }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
export default deleteProfile
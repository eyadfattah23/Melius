import axios from "axios";
import config from "../config";
import handleLogout from "./loggout";
/**
 * fetchUser - Fetches user data from the API.
 *
 * This function makes an authenticated GET request to retrieve a specific user's information, including username, 
 * maximum days achieved, email, and elapsed days. It handles logout if the user is unauthorized.
 */
const fetchUser = async (user_id, token, setUsername, setMaxDays, navigate, setEmail, setElapsedDays) => {
  try {
    const response = await axios.get(config.API_URL + `users/${user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      if (setUsername)
      {
        setUsername(response.data.username);
      }
      if (setMaxDays){
        setMaxDays(response.data.max_days);
        
      }
      if (setEmail){
        setEmail(response.data.email)
      }
      if (setElapsedDays)
      {
        setElapsedDays(response.data.elapsed_days)
      }
     
    }
  } catch (error) {
    if (error.status === 401 || error.status === 422){
      handleLogout(navigate)
    }
    console.error(error);
  } finally {
  }
};
export default fetchUser;

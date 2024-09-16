import axios from "axios";
import config from "../config";
import handleLogout from "./loggout";
const fetchUser = async (user_id, token, setUsername, setMaxDays, navigate, setEmail) => {
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

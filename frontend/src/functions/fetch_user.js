import axios from "axios";
import config from "@/config";
const fetchUser = async (user_id, token, setUsername, setMaxDays) => {
  try {
    const response = await axios.get(config.API_URL + `users/${user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      setUsername(response.data.username);
      setMaxDays(response.data.max_days);
    }
  } catch (error) {
    console.error(error);
  } finally {
  }
};
export default fetchUser;

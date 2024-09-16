import axios from "axios";
import countLevel from "./count_level";
import config from "../config";
import handleLogout from "./loggout";
const fetchTimerStatus = async (
  user_id,
  token,
  setStartingDate,
  setTries,
  setMaxDays,
  setLevel,
  setLoading,
  navigate
) => {
  setLoading(true);
  try {
    const response = await axios.get(
      config.API_URL + `timer/status/${user_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
   
    console.log(response);
    setStartingDate(response.data.data.start_date);
    setTries(response.data.data.no_tries);
    setMaxDays(response.data.data.max_time);
    setLevel(countLevel(response.data.data.max_time));
  } catch (error) {
    if (error.status === 401 || error.status === 422){
      handleLogout(navigate)
    }
    if (error.status === 404){
      setMaxDays(-1)
    }
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export default fetchTimerStatus;

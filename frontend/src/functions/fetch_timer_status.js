import axios from "axios";
import countLevel from "./count_level";
import config from "../config";
import handleLogout from "./loggout";
import daysBetween from "./days_between";
/**
 * fetchTimerStatus - Fetches the timer status for a specific user from the API.
 *
 * This function makes an authenticated GET request to retrieve a user's timer status, including the start date, number of tries, 
 * maximum time achieved, and calculates the level based on that data. It also handles logout in case of an authorization error.
 */
const fetchTimerStatus = async (
  user_id,
  token,
  setStartingDate,
  setTries,
  setMaxDays,
  setLevel,
  setLoading,
  navigate,
  setElapsedDays
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
    setElapsedDays(daysBetween(response.data.data.reset_date))
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

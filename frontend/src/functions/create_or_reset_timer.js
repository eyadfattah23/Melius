import axios from "axios";
import config from "../config";
import handleLogout from "./loggout";

/**
 * createOrResetTimer - Function to create or reset the user's timer.
 * This function sends a request to create or reset a timer for a user. If the user is on 
 * the "/challenge" page, the page will be reloaded after the operation. Otherwise, the user 
 * will be navigated to the "/challenge" page. It also manages the loading state during the process.
 */

const createOrResetTimer = async (
  user_id,
  token,
  setLoading,
  navigate
) => {
  setLoading(true);
  try {
    const response = await axios.post(
      config.API_URL + "timer/reset_or_create",
      {
        user_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (window.location.pathname === "/challenge") {
      window.location.reload();
    } else {
      navigate("/challenge");
    }
  } catch (error) {
    if (error.status === 401 || error.status === 422){
      handleLogout(navigate)
    }
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export default createOrResetTimer;

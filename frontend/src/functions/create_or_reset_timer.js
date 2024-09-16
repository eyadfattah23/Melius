import axios from "axios";
import config from "../config";
const createOrResetTimer = async (
  user_id,
  token,
  setLoading,
  navigate,
  setMaxDays
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
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export default createOrResetTimer;

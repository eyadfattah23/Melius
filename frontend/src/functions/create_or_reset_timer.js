import countLevel from "./count_level";
import countNumberOfDays from "./count_number_of_days";
import axios from "axios";
import fetchTimerStatus from "./fetch_timer_status";
const createOrResetTimer = async (user_id, token, setLoading, navigate, setMaxDays) => {
    setLoading(true);
    try {
        const response = await axios.post(
            'http://127.0.0.1:5050/api/v1/timer/reset_or_create',
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
            window.location.reload()
        } else {
            navigate("/challenge");
        }
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};
export default createOrResetTimer
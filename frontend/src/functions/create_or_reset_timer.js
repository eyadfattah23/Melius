import countLevel from "./count_level";
import countNumberOfDays from "./count_number_of_days";
import axios from "axios";
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
        console.log(JSON.stringify(countNumberOfDays(response.data.data.reset_date)));
        localStorage.setItem("number_of_days", JSON.stringify(countNumberOfDays(response.data.data.reset_date)));
        localStorage.setItem("level", JSON.stringify(countLevel(countNumberOfDays(response.data.data.reset_date))));
        if (window.location.pathname === "/challenge") {
            window.location.reload();
            setMaxDays(response.max_days)
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
import axios from "axios";
import countLevel from "./count_level";
const fetchTimerStatus = async (user_id, token, setStartingDate, setTries, setMaxDays, setLevel, setLoading) => {
    setLoading(true);
    try {
        const response = await axios.get(`http://127.0.0.1:5050/api/v1/timer/status/${user_id}`, {
            headers: {
                Authorization: `Bearer ${token}`, 
              },
        });
        console.log(response);
        setStartingDate(response.data.data.start_date)
        setTries(response.data.data.no_tries)
        setMaxDays(response.data.data.max_time)
        setLevel(countLevel(response.data.data.max_time))
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
    
};
export default fetchTimerStatus
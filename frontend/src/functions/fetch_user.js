import axios from "axios";
const fetchUser = async (user_id, token,  setUsername, setMaxDays) => {
    try {
        const response = await axios.get(`http://127.0.0.1:5050/api/v1/users/${user_id}`, {
            headers: {
                Authorization: `Bearer ${token}`, 
              },
          });
    if(response.status == 200){
        setUsername(response.data.username)
        setMaxDays(response.data.max_days)
    }
    } catch (error) {
        console.error(error);
    } finally {
        
    }
};
export default fetchUser
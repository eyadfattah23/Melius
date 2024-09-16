import axios from "axios";
import config from "../config";
import { useNavigate } from "react-router-dom";
const fetchLikes = async (setLikesCount, contentType, id, setLoading) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate()
  try {
    const response = await axios.get(
      config.API_URL + `${contentType}/${id}/likes/count`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 401){
      navigate("/login")
    }
    console.log(response);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export default fetchLikes;

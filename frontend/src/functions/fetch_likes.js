import axios from "axios";
import config from "../config";
import { useNavigate } from "react-router-dom";
import handleLogout from "./loggout";
const fetchLikes = async (setLikesCount, contentType, id, setLoading, navigate) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token){
    handleLogout(navigate)
  }
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
    console.log(response);
  } catch (error) {
    if (error.status === 401 || error.status === 422){
      handleLogout(navigate)
    }
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export default fetchLikes;

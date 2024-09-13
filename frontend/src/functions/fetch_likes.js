import axios from "axios";
import config from "@/config";
const fetchLikes = async (setLikesCount, contentType, id, setLoading) => {
  const token = JSON.parse(localStorage.getItem("token"));
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
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export default fetchLikes;

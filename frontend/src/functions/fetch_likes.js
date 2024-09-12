import axios from "axios";
const fetchLikes = async (setLikesCount, contentType, id, setLoading) => {
    const token = JSON.parse(localStorage.getItem("token"))
    try {
        const response = await axios.get(`http://127.0.0.1:5050/api/v1/${contentType}/${id}/likes/count`,{
            headers: {
                Authorization: `Bearer ${token}`,
              },
        });
        console.log(response)
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
  }
export default fetchLikes
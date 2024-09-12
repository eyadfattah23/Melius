import axios from "axios";
const fetchComments = async (setCommentField, contentType, id, setComments, setLoading) => {
    const token = JSON.parse(localStorage.getItem("token"))
    try {
        const response = await axios.get(`http://127.0.0.1:5050/api/v1/${contentType}/${id}/comments`,{
            headers: {
                Authorization: `Bearer ${token}`,
              },
        });
        console.log(response.data);
        setComments(response.data)
        setCommentField(true)
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
  }
export default fetchComments
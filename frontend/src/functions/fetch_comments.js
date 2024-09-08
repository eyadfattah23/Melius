import axios from "axios";
const fetchComments = async (setCommentField, contentType, id, setComments, setLoading) => {
    setCommentField(true)
    try {
        const response = await axios.get(`http://127.0.0.1:5050/api/v1/${contentType}/${id}/comments`);
        console.log(response.data);
        setComments(response.data)
        
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
  }
export default fetchComments
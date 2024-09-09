const fetchUser = async (user_id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:5050/api/v1/users/${user_id}`, {
          });
    return response
    } catch (error) {
        console.error(error);
    } finally {
        
    }
};
export default fetchUser
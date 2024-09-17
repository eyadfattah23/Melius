import axios from "axios";
import config from "../config";
/**
 * login - Handles user login by sending credentials to the API and managing state.
 * 
 * This function processes the login request by validating input fields, sending a request to the API,
 * handling errors, and updating the local storage and navigation upon successful login.
 */
const login = async (event, setLoading, setErrorEmail, setErrorPassword, email, password, navigate) => {
    event.preventDefault();
    setLoading(true);
    setErrorEmail("");
    setErrorPassword("");
    let hasError = false;

    if (!email) {
      setErrorEmail("Email is required");
      hasError = true;
    } else {
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!emailRegex.test(email)) {
        setErrorEmail("Invalid email format");
        hasError = true;
      }
    }
    if (!password) {
      setErrorPassword("Password is required");
      hasError = true;
    }
    try {
      const response = await axios.post(
        config.API_URL + "users/authenticate",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user_id", JSON.stringify(response.data.user.id));
      localStorage.setItem("isAdmin", JSON.stringify(response.data.user.isAdmin))
      console.log(response.data)
      navigate("/home");
    } catch (error) {
      console.error(error);
      setErrorPassword(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
export default login
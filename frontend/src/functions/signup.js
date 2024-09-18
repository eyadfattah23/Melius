import config from "../config";
import axios from "axios";
import countLevel from "./count_level";
/**
 * signup - Handles user registration by sending user details to the API and managing state.
 *
 * This function processes the registration request by validating input fields, sending a request to the API,
 * handling errors, and updating local storage and navigation upon successful registration.
 */
const signup = async (event, setLoading, setErrorEmail, setErrorUsername, setErrorPassword, email, username, password, navigate) => {
    event.preventDefault();
    setLoading(true);
    setErrorEmail("");
    setErrorUsername("");
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

    if (!username) {
      setErrorUsername("Username is required");
      hasError = true;
    }

    if (!password) {
      setErrorPassword("Password is required");
      hasError = true;
    } else {
      const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$%@#])[A-Za-z\d$%@#]{8,30}$/;
      if (!passwordRegex.test(password)) {
        setErrorPassword(
          "Password should have at least one numeral, one uppercase letter, one lowercase letter, and one symbol"
        );
        hasError = true;
      }
    }

    if (password.length < 8) {
      setErrorPassword("Password should be at least 8 characters long");
      hasError = true;
    }
    if (password.length > 30) {
      setErrorPassword("Password should not be greater than 30 characters");
      hasError = true;
    }

    if (hasError) {
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(config.API_URL + "users", {
        email,
        username,
        password,
      });
      console.log(response);
      const img = response.data.img;
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("isAdmin", JSON.stringify(response.data.user.isAdmin));
      localStorage.setItem("user_id", JSON.stringify(response.data.user.id));
      localStorage.setItem("level", JSON.stringify(countLevel(response.data.user.max_days)))

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

export default signup
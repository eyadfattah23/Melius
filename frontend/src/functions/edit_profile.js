import handleLogout from "./loggout";
import axios from "axios";
import config from "../config";
/**
 /**
 * Edit user profile details.
 * 
 * This function handles profile editing by sending a PUT request to update the user's email, username, 
 * and password. It performs input validation, manages loading and error states, and logs the user out 
 * if the request fails due to authorization errors.
 */
const editProfile = async (event, user_id, token, setLoading, setErrorEmail, setErrorUsername, setErrorPassword, email, username, password, navigate) => {
    event.preventDefault();
    setLoading(true);
    setErrorEmail("");
    setErrorUsername("");
    setErrorPassword("");
    let hasError = false;

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailRegex.test(email)) {
      setErrorEmail("Invalid email format");
      hasError = true;
    }

    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$%@#])[A-Za-z\d$%@#]{8,30}$/;
    if (password.length != 0 && !passwordRegex.test(password)) {
      setErrorPassword(
        "Password should have at least one numeral, one uppercase letter, one lowercase letter, and one symbol"
      );
      hasError = true;
    }

    if (password.length != 0 && password.length < 8) {
      setErrorPassword("Password should be at least 8 characters long");
      hasError = true;
    } else if (password.length > 30) {
      setErrorPassword("Password should not be greater than 30 characters");
      hasError = true;
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.put(
        config.API_URL + `users/${user_id}`,
        {
          email,
          username,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      window.location.reload();
    } catch (error) {
        if (error.status === 401 || error.status === 422){
            handleLogout(navigate)
        }
      console.error(error);
      setErrorPassword(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
export default editProfile
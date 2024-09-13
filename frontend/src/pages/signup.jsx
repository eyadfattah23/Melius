import Button from "../components/common/button";
import "../assets/styles/signup.css";
import Icon from "../assets/icons/icon";
import Field from "../components/common/field";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../components/common/logo";
import config from "../config";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
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

  return (
    <main className="py-8 px-16 signup_main">
      <header className="flex justify-between authenticate_nav">
        <Link to={"/"}>
          <Logo />
        </Link>
        <Link to={"/"} className="cursor-pointer menu_item">
          <Icon name={"home"} size={24} />
        </Link>
      </header>

      <section className="flex flex-col-reverse lg:flex-row justify-center gap-8 main_section" id="signup_section">
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center py-8 left_container">
          <div className="space-y-6">
            <div className="flex items-center gap-4 border border-gray-300 rounded px-4 py-2">
              <Icon name={"email_fill"} size={24} color={"grey"} />
              <Field
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {errorEmail && <p className="text-red-500 text-sm">{errorEmail}</p>}

            <div className="flex items-center gap-4 border border-gray-300 rounded px-4 py-2">
              <Icon name={"user_fill"} size={24} color={"grey"} />
              <Field
                placeholder="Enter your username"
                type="text"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {errorUsername && <p className="text-red-500 text-sm">{errorUsername}</p>}

            <div className="flex items-center gap-4 border border-gray-300 rounded px-4 py-2">
              <Icon name={"lock"} size={24} color={"grey"} />
              <Field
                placeholder="Enter your password"
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorPassword && <p className="text-red-500 text-sm">{errorPassword}</p>}
          </div>

          <div className="mt-6">
            <Button
              text={loading ? "Signing Up..." : "SIGN UP"}
              onClick={handleSubmit}
              type="signup_btn"
            />
          </div>

          <div className="flex items-center gap-2 alternative">
            <p>Already have an account?</p>
            <Link to={"/login"}>
              <Button text={"Login"} type="login_btn_link" />
            </Link>
          </div>
        </div>

        <div className="text-center w-full lg:w-1/2 p-8 flex flex-col justify-center right_container py-8">
          <p className="title">Join Us in Your Journey to Freedom</p>
          <p className="description">
            Create your account and take the first step towards a healthier, more fulfilling life.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Signup;

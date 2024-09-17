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
import signup from "../functions/signup";
/**
 * provides a user interface for registering a new account. It includes form validation
 * and handles user input, triggering the signup process upon form submission.
 */

function Signup() {
  // State variables to store user inputs and errors
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Hook for navigation after successful signup
  const navigate = useNavigate();

  // Handles form submission by triggering the signup process.
  const handleSubmit = (event) => {
    signup(event, setLoading, setErrorEmail, setErrorUsername, setErrorPassword, email, username, password, navigate);
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
